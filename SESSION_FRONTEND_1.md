# Session Frontend 1 — Intégration Backend/Frontend (Module Participants) fait par Gérard

**Date :** 31 mai 2026  
**Projet :** CARI'2026 Frontend — React 19 + Vite 7  
**Backend déployé :** `http://cari-conf-back.uac.bj/api`  
**Tests backend :** 226/226 ✅ (Passport JWT, guard `participant`)

---

## 1. Contexte

Avant cette session, le frontend avait son UI complète (pages, navigation, formulaires Tailwind CSS) mais **zéro connexion avec le backend**. Chaque formulaire faisait uniquement un `console.log` à la soumission. Il n'existait aucun service API, aucun contexte d'authentification et aucun guard de routes.

Cette session a posé toute la couche d'intégration pour l'espace participants.

---

## 2. Endpoints backend connectés

| Méthode | URL | Page frontend |
|---------|-----|---------------|
| POST | `/api/auth/register` | `SignUp.jsx` |
| POST | `/api/auth/login` | `SignIn.jsx` |
| POST | `/api/auth/logout` | `RegistrationPortal.jsx` (bouton Logout) |
| GET | `/api/auth/me` | `RegistrationPortal.jsx` (chargement profil) |
| POST | `/api/auth/forgot-password` | `ForgotPassword.jsx` |
| POST | `/api/auth/reset-password` | `ResetPassword.jsx` |
| GET | `/api/participant/profile` | `RegistrationMyInfo.jsx` (pré-remplissage) |
| PUT | `/api/participant/profile` | `RegistrationMyInfo.jsx` (soumission) |

**Pas encore connectés (backend non implémenté) :** `/api/registrations/*`, `/api/notifications/*`, `/api/public/*`

---

## 3. Fichiers créés

### `.env.local` (racine du projet)
```
VITE_API_URL=http://cari-conf-back.uac.bj/api
```
Toujours utiliser `import.meta.env.VITE_API_URL` dans le code — jamais d'URL hardcodée.

---

### `src/api/client.js` — Fetch wrapper central

Toute la couche API passe par ce fichier. Il gère automatiquement :
- Injection du header `Authorization: Bearer {token}` (lit `localStorage.getItem('cari_token')`)
- `Content-Type: application/json`
- Réponse 401 → supprime le token du localStorage et redirige vers `/signin`
- Réponse non-ok → `throw` les données JSON (format Laravel `{ errors: { field: [...] } }`)
- Réponse 204 No Content → retourne `null`

```js
// Usage
import apiClient from './client';
const data = await apiClient('/auth/me');                           // GET
await apiClient('/participant/profile', { method: 'PUT', body: JSON.stringify(payload) }); // PUT
```

---

### `src/api/authApi.js` — Service authentification

| Méthode | Endpoint |
|---------|----------|
| `authApi.register(data)` | POST `/auth/register` |
| `authApi.login(data)` | POST `/auth/login` |
| `authApi.logout()` | POST `/auth/logout` |
| `authApi.me()` | GET `/auth/me` |
| `authApi.forgotPassword(data)` | POST `/auth/forgot-password` |
| `authApi.resetPassword(data)` | POST `/auth/reset-password` |
| `authApi.changePassword(data)` | POST `/auth/change-password` |

---

### `src/api/participantApi.js` — Service profil participant

| Méthode | Endpoint |
|---------|----------|
| `participantApi.getProfile()` | GET `/participant/profile` |
| `participantApi.updateProfile(data)` | PUT `/participant/profile` |

---

### `src/contexts/AuthContext.jsx` — Contexte d'authentification React

Fournit à toute l'application l'état d'authentification via Context API.

**State exposé :**
- `token` — JWT access token (string | null)
- `user` — objet utilisateur (id, prenom, nom, email, statut_compte, …)
- `isAuthenticated` — boolean
- `isLoading` — true pendant la lecture initiale du localStorage

**Méthodes exposées :**
- `login(accessToken, userData)` — stocke token + user dans localStorage et state
- `logout()` — supprime token + user du localStorage et remet le state à null
- `updateUser(userData)` — met à jour l'objet user sans toucher au token

**Stockage localStorage :**
- `cari_token` — le JWT access token
- `cari_user` — l'objet user JSON stringifié

**Hook :**
```jsx
import { useAuth } from '../contexts/AuthContext';
const { user, isAuthenticated, login, logout } = useAuth();
```

---

### `src/pages/ForgotPassword.jsx`

Route : `/forgot-password`

Formulaire email → POST `/auth/forgot-password`. L'API retourne toujours 200 même si l'email n'existe pas (sécurité — ne pas révéler l'existence d'un compte). Affiche un message de confirmation après soumission.

---

### `src/pages/ResetPassword.jsx`

Route : `/reset-password`

Lit les paramètres `?token=xxx&email=yyy` depuis l'URL (envoyés par l'email de reset). Formulaire nouveau mot de passe → POST `/auth/reset-password`. Redirige automatiquement vers `/signin` après succès (délai 3s).

---

## 4. Fichiers modifiés

### `src/App.jsx`

Trois changements :

1. **`AuthProvider`** enveloppe toute l'application pour rendre le contexte disponible partout.

2. **`ProtectedRoute`** composant inline qui redirige vers `/signin` si `!isAuthenticated`. Affiche un spinner pendant `isLoading`.

3. **Routes protégées** — les 5 routes du portail participant ont été enveloppées :
   - `/registration/portal`
   - `/registration/portal/myinfo`
   - `/registration/portal/payment`
   - `/registration/portal/invitation`
   - `/registration/portal/certificate`

4. **Nouvelles routes publiques** ajoutées :
   - `/forgot-password` → `ForgotPassword`
   - `/reset-password` → `ResetPassword`

---

### `src/pages/SignIn.jsx`

- Converti de `useState` vers **React Hook Form + Zod** (schéma : email requis, password requis)
- `onSubmit` appelle `authApi.login({ email, password })`
- Succès : `login(access_token, user)` dans le contexte puis `navigate('/registration/portal')`
- Erreur 422 : erreurs champ par champ via `setError`
- Erreur générique : bandeau rouge en haut du formulaire
- Bouton désactivé pendant `isSubmitting`
- Lien "Forgot password?" vers `/forgot-password`

---

### `src/pages/SignUp.jsx`

- Converti de `useState` vers **React Hook Form + Zod**
- Champs adaptés pour correspondre à l'API :
  - `firstName` → `prenom`
  - `lastName` → `nom`
  - Ajout du champ `password_confirmation` (obligatoire par l'API)
  - Suppression du champ `fullName` (l'API attend deux champs séparés)
- `onSubmit` appelle `authApi.register({ prenom, nom, email, password, password_confirmation })`
- Succès : stocke le token + redirige vers le portail

---

### `src/pages/RegistrationPortal.jsx`

- Au montage : charge les données via `authApi.me()` si `user` n'est pas encore dans le contexte
- **Profile Status** : calculé dynamiquement (vérifie si `prenom`, `nom`, `email`, `telephone`, `institution`, `pays` sont remplis)
- **Payment Status** et **Registration Status** : affichent "Pending" / "In Progress" par défaut (les endpoints `/api/registrations` ne sont pas encore implémentés côté backend)
- Salutation personnalisée avec le prénom (`Welcome, {prenom}!`)
- **Bouton Logout** : appelle `authApi.logout()`, puis `logout()` du contexte, puis redirige vers `/signin`

---

### `src/pages/RegistrationMyInfo.jsx`

Changements **minimaux** pour ne pas casser la structure RHF+Zod existante (523 lignes) :

**Au montage** : `participantApi.getProfile()` → `reset()` RHF avec les données mappées :

| Champ API | Champ formulaire |
|-----------|-----------------|
| `prenom` | `firstName` |
| `nom` | `lastName` |
| `email` | `emailWork` |
| `telephone` | `telephone` |
| `institution` | `institution` |
| `pays` | `country` |
| `ville` | `city` |
| `departement` | `department` |
| `adresse` | `address` |
| *(autres)* | *(mappés si présents)* |

**À la soumission** : `participantApi.updateProfile(payload)` avec mapping inverse. En cas d'erreur 422, les erreurs Laravel sont mappées vers les champs du formulaire via `setError`.

**Bandeau de statut** ajouté en haut du formulaire :
- Vert : "Your information has been saved successfully."
- Rouge : "An error occurred while saving."

---

## 5. Architecture de la couche API

```
Composant React
    │
    ▼
src/api/authApi.js  |  src/api/participantApi.js
    │                        │
    └────────────────────────┘
                 │
                 ▼
         src/api/client.js
         (fetch wrapper — token, 401, erreurs)
                 │
                 ▼
    http://cari-conf-back.uac.bj/api
```

---

## 6. Flux d'authentification complet

```
SignUp ──► POST /auth/register ──► {access_token, user}
                                        │
                                        ▼
                               login(token, user)
                               → localStorage.setItem('cari_token', token)
                               → localStorage.setItem('cari_user', JSON)
                               → navigate('/registration/portal')

SignIn ──► POST /auth/login ──► {access_token, user}
                                        │
                                        ▼
                               (même flux que SignUp)

Rechargement page ──► AuthContext lit localStorage
                   → si cari_token existe → isAuthenticated = true
                   → sinon → isAuthenticated = false → ProtectedRoute redirige /signin

Logout ──► POST /auth/logout (révoque token côté serveur)
        ──► logout() dans contexte
        ──► localStorage.removeItem(...)
        ──► navigate('/signin')

Token expiré ──► API retourne 401
             ──► client.js supprime le token + redirige /signin automatiquement
```

---

## 7. Règles à respecter pour la suite

1. **Toujours passer par `src/api/client.js`** — jamais de `fetch()` direct dans un composant
2. **Jamais d'URL hardcodée** — utiliser `import.meta.env.VITE_API_URL`
3. **Token stocké uniquement sous `cari_token`** dans localStorage
4. **Gestion des erreurs 422** : toujours mapper champ par champ avec `setError`
5. **Routes protégées** : toute nouvelle page participant doit être enveloppée dans `<ProtectedRoute>`

---

## 8. Ce qui reste à faire (prochaines sessions)

### Phase 3 — Espace participant (backend non encore implémenté)

| Module | Endpoint backend | Page frontend |
|--------|-----------------|---------------|
| Ma registration | POST `/api/registrations`, GET `/api/registrations/my` | `RegistrationPayment.jsx` |
| Notifications | GET `/api/notifications`, PUT `/api/notifications/{id}/read` | À créer |
| Badge | GET `/api/registrations/my` (champ badge) | `RegistrationCertificate.jsx` |
| Lettre d'invitation | GET `/api/registrations/my` | `RegistrationInvitation.jsx` |

### Phase 4 — Routes publiques (backend non encore implémenté)

| Endpoint | Page frontend cible |
|----------|---------------------|
| GET `/api/public/evenements` | `HomePage.jsx` (programme) |
| GET `/api/public/speakers` | À créer |
| GET `/api/public/sponsors` | `Sponsors.jsx` |
| GET `/api/public/news` | À créer |
| GET `/api/public/programme` | Remplacement des pages `UnderConstruction` |

### Amélioration UX à prévoir

- Système de toast/notification global (remplacer les bandeaux inline)
- Token refresh automatique avant expiration (15 min → POST `/auth/refresh`)
- Page de changement de mot de passe (`/registration/portal/change-password`)

---

## 9. Comment tester

```bash
# Depuis /home/gerard/cari26/cari2026/
npm run dev

# Vérifier que l'API répond
curl http://cari-conf-back.uac.bj/api/health
```

**Checklist de test :**
- [ ] `/signup` → créer un compte → redirige vers `/registration/portal`
- [ ] `/signin` → se connecter → redirige vers le portail
- [ ] Accès direct `/registration/portal` sans token → redirige `/signin`
- [ ] Rechargement page en étant connecté → reste sur le portail (token lu depuis localStorage)
- [ ] `/registration/portal/myinfo` → formulaire pré-rempli avec les données API
- [ ] Soumission `MyInfo` → message de confirmation vert
- [ ] `/forgot-password` → envoyer email → message de confirmation
- [ ] Bouton Logout → token supprimé → redirige `/signin`
- [ ] Token expiré (attendre 15 min ou modifier manuellement) → redirect `/signin` automatique
