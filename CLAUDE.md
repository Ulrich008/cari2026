# CLAUDE.md — Frontend CARI'2026

> Ce fichier est la source de vérité pour Claude Code.
> À lire ENTIÈREMENT avant toute modification de code.

---

## 1. Contexte du projet

Plateforme frontend de la conférence **CARI'2026** (18ème édition — African Conference on Research in Computer Science and Applied Mathematics).
- **Dates** : 21–24 Octobre 2026, Abomey-Calavi, Cotonou, Bénin
- **Deux interfaces** :
  - Dashboard admin (gestion de la conférence)
  - Portail participants (inscription, paiement, documents)

---

## 2. Stack technique

| Outil | Version | Usage |
|---|---|---|
| React | 19.2 | UI Framework |
| Vite | 7.x | Build tool |
| React Router DOM | 7.13 | Routing |
| React Hook Form | 7.75 | Gestion des formulaires |
| Zod | 4.x | Validation des schémas |
| @hookform/resolvers | 5.x | Connexion RHF ↔ Zod |
| react-icons | 5.x | Icônes |
| **Tailwind CSS** | **3.x** | **Styling (utilisé partout)** |
| Fetch natif | — | Appels HTTP (pas d'axios) |

**Dev dependencies notables :**
- `vite-plugin-image-optimizer` — compression automatique JPEG/PNG/WebP (75%) au build
- `sharp`, `svgo` — requis par vite-plugin-image-optimizer

**Pas de store global** (pas de Pinia, Redux, Zustand). L'état est géré via :
- `React Context API` pour l'auth (token, user) — **à implémenter**
- `useState` / `useReducer` localement dans les composants

---

## 3. API Backend

- **Base URL** : `http://cari-conf-back.uac.bj/api`
- **Documentation Swagger** : `http://cari-conf-back.uac.bj/api/documentation`
- **Authentification** : JWT via header `Authorization: Bearer {token}`
- **Format** : JSON (Content-Type: application/json)
- **Erreurs de validation** : format Laravel 422 `{ errors: { field: ["message"] } }`

### Variable d'environnement obligatoire

```env
VITE_API_URL=http://cari-conf-back.uac.bj/api
```

> **ATTENTION** : Le fichier `.env.local` n'existe pas encore dans le projet.
> Le créer à la racine avant tout appel API :
> ```
> echo "VITE_API_URL=http://cari-conf-back.uac.bj/api" > .env.local
> ```

Toujours utiliser `import.meta.env.VITE_API_URL` — jamais de base URL hardcodée dans le code.

---

## 4. Stockage du token JWT

> **ATTENTION** : L'authentification JWT n'est pas encore implémentée.
> `SignIn.jsx` et `SignUp.jsx` existent mais ne font pas d'appel API réel.
> Cette section décrit le comportement **cible**.

- **Clé localStorage** : `cari_token`
- **Clé localStorage user** : `cari_user` (objet JSON stringifié)
- Lecture : `localStorage.getItem('cari_token')`
- Écriture : `localStorage.setItem('cari_token', token)`
- Suppression (logout) : `localStorage.removeItem('cari_token')` + `localStorage.removeItem('cari_user')`

---

## 5a. Structure actuelle du projet (ce qui EXISTE)

```
src/
├── App.jsx                      ← Routing complet ici (BrowserRouter + toutes les Routes)
├── App.css
├── main.jsx
├── index.css
│
├── components/                  ← Composants PLATS (pas de sous-dossiers ui/layout/shared)
│   ├── Countdown.jsx            ← Compte à rebours vers le 21/10/2026
│   ├── Footer.jsx
│   ├── Header.jsx               ← Carousel 6 slides, auto-avance 5s
│   ├── HeroBanner.jsx
│   ├── Navigation.jsx           ← Nav principale avec dropdowns + menu mobile
│   ├── RegistrationPortalLayout.jsx  ← Layout wrapper pour le portail inscription
│   ├── RegistrationPortalNav.jsx     ← Nav latérale du portail (Home, MyInfo, Payment...)
│   ├── SidebarLinks.jsx
│   └── WelcomeSection.jsx
│
├── pages/                       ← 23 pages PLATES (pas de sous-dossiers public/participant/admin)
│   ├── CallForPapers.jsx
│   ├── Contact.jsx
│   ├── CybSecAfrica.jsx
│   ├── DAAfricaReadMore.jsx
│   ├── HomePage.jsx
│   ├── InterCoopReadMore.jsx
│   ├── LocalCommittee.jsx
│   ├── NLPARLReadMore.jsx
│   ├── PhotoGallery.jsx
│   ├── Proceedings.jsx
│   ├── Registration.jsx               ← Page info tarifs (statique)
│   ├── RegistrationCertificate.jsx    ← UI certificat (pas d'API encore)
│   ├── RegistrationInvitation.jsx     ← UI lettre invitation (localStorage, pas d'API)
│   ├── RegistrationMyInfo.jsx         ← Formulaire RHF+Zod (onSubmit → console.log, pas d'API)
│   ├── RegistrationPayment.jsx        ← UI paiement (pas d'API encore)
│   ├── RegistrationPortal.jsx         ← Home portail participant (statique)
│   ├── SignIn.jsx                     ← Formulaire login (pas d'API encore)
│   ├── SignUp.jsx                     ← Formulaire register (pas d'API encore)
│   ├── Sponsors.jsx
│   ├── TechnicalProgramCommittee.jsx
│   ├── UnderConstruction.jsx
│   ├── Venue.jsx
│   └── Workshops.jsx
│
└── validation/                  ← Schémas Zod
    └── registrationSchema.js    ← Schéma complet profil participant (titre, nom, institution...)
```

### Routes actuelles dans App.jsx

| Chemin actuel | Composant | Statut |
|---|---|---|
| `/` | HomePage | ✅ Fonctionnel |
| `/signin` | SignIn | UI seule, pas d'API |
| `/signup` | SignUp | UI seule, pas d'API |
| `/registration` | Registration | Statique |
| `/registration/portal` | RegistrationPortal | Statique |
| `/registration/portal/myinfo` | RegistrationMyInfo | UI + Zod, pas d'API |
| `/registration/portal/payment` | RegistrationPayment | UI seule |
| `/registration/portal/invitation` | RegistrationInvitation | UI seule |
| `/registration/portal/certificate` | RegistrationCertificate | UI seule |
| `/calls/papers` | CallForPapers | Statique |
| `/calls/cari-workshops` | Workshops | Statique |
| `/calls/cari-workshops/*-read-more` | DAAfricaReadMore, etc. | Statique |
| `/organization/local-committee` | LocalCommittee | Statique |
| `/organization/tpc` | TechnicalProgramCommittee | Statique |
| `/venue` | Venue | Statique |
| `/sponsors` | Sponsors | Statique |
| `/contact` | Contact | Statique |
| `/proceedings` | Proceedings | Statique |
| `/photo-gallery` | PhotoGallery | Statique |
| `/program/*` | UnderConstruction | Placeholder |

---

## 5b. Structure cible (à construire)

```
src/
├── api/                     # À CRÉER — appels fetch
│   ├── client.js            # fetch wrapper central avec token + gestion erreurs
│   ├── authApi.js           # register, login, logout, forgotPassword
│   ├── participantApi.js    # profil, registration, paiement
│   └── adminApi.js          # endpoints dashboard admin
│
├── contexts/                # À CRÉER — Context API React
│   └── AuthContext.jsx      # token, user, login(), logout(), isAuthenticated
│
├── hooks/                   # À CRÉER — Hooks personnalisés
│   ├── useAuth.js           # consomme AuthContext
│   └── useApi.js            # wrapper pour les appels avec loading/error/data
│
├── pages/
│   ├── public/              # Migrer depuis pages/ plat
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx    ← Renommer SignIn.jsx + connecter à authApi
│   │   └── RegisterPage.jsx ← Renommer SignUp.jsx + connecter à authApi
│   │
│   ├── participant/         # Migrer depuis pages/Registration*.jsx
│   │   ├── DashboardPage.jsx       ← RegistrationPortal.jsx
│   │   ├── MyInfoPage.jsx          ← RegistrationMyInfo.jsx + connecter API
│   │   ├── PaymentPage.jsx         ← RegistrationPayment.jsx + connecter API
│   │   ├── InvitationLetterPage.jsx
│   │   └── CertificatePage.jsx
│   │
│   └── admin/               # À CRÉER entièrement
│       ├── DashboardAdminPage.jsx
│       ├── ParticipantsPage.jsx
│       ├── ProgramsPage.jsx
│       ├── PagesPage.jsx
│       ├── DocumentsPage.jsx
│       ├── SpeakersPage.jsx
│       ├── SponsorsPage.jsx
│       ├── UsersRolesPage.jsx
│       └── SiteInfoPage.jsx
│
├── components/
│   ├── ui/                  # Extraire composants réutilisables
│   ├── layout/              # Layouts (AdminLayout, ParticipantLayout, PublicLayout)
│   └── shared/              # Composants partagés (LoadingSpinner, ErrorMessage, etc.)
│
├── router/
│   └── index.jsx            # À CRÉER — migrer routing depuis App.jsx + guards
│
├── utils/
│   └── formatters.js        # À CRÉER — fonctions utilitaires
│
└── validation/              # EXISTE DÉJÀ
    └── registrationSchema.js
```

### Routes cibles

| Chemin cible | Ancienne route | Statut |
|---|---|---|
| `/` | `/` | ✅ OK |
| `/login` | `/signin` | Renommer + API |
| `/register` | `/signup` | Renommer + API |
| `/dashboard` | `/registration/portal` | Renommer + guard auth |
| `/my-info` | `/registration/portal/myinfo` | Renommer + API |
| `/payment` | `/registration/portal/payment` | Renommer + API |
| `/invitation-letter` | `/registration/portal/invitation` | Renommer + API |
| `/certificate` | `/registration/portal/certificate` | Renommer + API |
| `/admin/login` | ❌ | À créer |
| `/admin` | ❌ | À créer |
| `/admin/participants` | ❌ | À créer |
| `/admin/programs` | ❌ | À créer |
| `/admin/pages` | ❌ | À créer |
| `/admin/documents` | ❌ | À créer |
| `/admin/speakers` | ❌ | À créer |
| `/admin/sponsors` | ❌ | À créer |
| `/admin/users` | ❌ | À créer |
| `/admin/site-info` | ❌ | À créer |

---

## 6. Pattern obligatoire — client fetch central

**Toujours passer par `src/api/client.js`** une fois créé, jamais de `fetch()` direct dans les composants.

```js
// src/api/client.js — structure attendue
const apiClient = async (endpoint, options = {}) => {
  const token = localStorage.getItem('cari_token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };
  const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, config);
  if (response.status === 401) {
    localStorage.removeItem('cari_token');
    localStorage.removeItem('cari_user');
    window.location.href = '/login';
    return;
  }
  const data = await response.json();
  if (!response.ok) throw data;
  return data;
};
```

---

## 7. Gestion des formulaires

Pattern obligatoire : **React Hook Form + Zod**. Déjà en place dans `RegistrationMyInfo.jsx`.

```jsx
const schema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(8, 'Minimum 8 caractères'),
});

const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm({
  resolver: zodResolver(schema),
});

// Erreurs Laravel 422 → setError champ par champ
const onSubmit = async (data) => {
  try {
    await authApi.login(data);
  } catch (err) {
    if (err.errors) {
      Object.entries(err.errors).forEach(([field, messages]) => {
        setError(field, { message: messages[0] });
      });
    }
  }
};
```

Le schéma de validation du profil participant se trouve dans `src/validation/registrationSchema.js`.

---

## 8. Guards de routes (à implémenter)

```jsx
// Pattern ProtectedRoute — à créer dans src/router/index.jsx
// participant → redirige /login si pas de token
// admin → redirige /admin/login si pas de token admin
```

---

## 9. Rôles et permissions

| Rôle | Accès |
|---|---|
| `super_admin` | Tout le dashboard admin |
| `admin` | Dashboard admin (sauf gestion super_admin) |
| `editor` | Dashboard admin lecture + édition contenu |
| `participant` | Portail participant uniquement |

Le rôle est stocké dans `cari_user.role` après login.

---

## 10. Modules fonctionnels — état d'avancement

### Portail Participant
| Module | État |
|---|---|
| Auth (register, login, logout) | UI seulement — `src/api/authApi.js` à créer |
| My Info (profil complet) | UI + Zod — `onSubmit` à connecter à l'API |
| Payment (packages, discount code) | UI seulement — à connecter à l'API |
| Invitation Letter | UI seulement — à connecter à l'API |
| Certificate | UI seulement — à connecter à l'API |

### Dashboard Admin
| Module | État |
|---|---|
| Participants (liste, export) | À créer |
| Programs (CRUD sessions) | À créer |
| Pages (CMS) | À créer |
| Documents (upload) | À créer |
| Speakers/Committees | À créer |
| Sponsors/Partners | À créer |
| Users & Roles | À créer |
| Site Info | À créer |

---

## 11. Règles de développement

### Ce qu'il faut TOUJOURS faire
- ✅ Utiliser les classes Tailwind CSS (ne pas mélanger avec du CSS inline)
- ✅ Utiliser `apiClient` de `src/api/client.js` pour tous les appels fetch (une fois créé)
- ✅ Valider tous les formulaires avec Zod avant envoi
- ✅ Gérer les états `loading`, `error`, `success` dans chaque action async
- ✅ Utiliser `import.meta.env.VITE_API_URL` pour la base URL
- ✅ Stocker token sous la clé `cari_token` dans localStorage
- ✅ Protéger toutes les routes privées avec les guards appropriés
- ✅ Afficher les erreurs de validation Laravel champ par champ

### Ce qu'il ne faut JAMAIS faire
- ❌ Hardcoder `http://cari-conf-back.uac.bj/api` dans le code
- ❌ Faire un `fetch()` direct dans un composant (toujours passer par `src/api/`)
- ❌ Stocker le token autrement que dans `localStorage` sous `cari_token`
- ❌ Installer axios ou une autre lib HTTP (on utilise fetch natif)
- ❌ Créer un store Redux/Zustand (on utilise Context API)
- ❌ Supprimer physiquement des données côté UI sans confirmation utilisateur
- ❌ Utiliser du CSS inline ou des fichiers `.css` pour styler (utiliser Tailwind)

---

## 12. Conventions Tailwind CSS

Le projet utilise **Tailwind CSS**. Couleur principale : **vert** (`green-700` / `green-800`).

Patterns récurrents dans le projet :
```jsx
// Bouton principal
className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"

// Input standard
className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"

// Section header (dans les formulaires)
className="bg-green-700 text-white px-4 py-2 font-semibold text-sm"

// Erreur champ
className="text-red-500 text-xs mt-1"
```

---

## 13. Format des demandes à Claude Code

Toujours utiliser ce format :

```
📌 CONTEXTE :
- Fichier(s) concerné(s) : [chemin exact]
- Endpoint API : [METHOD /endpoint]

🎯 OBJECTIF :
[Une phrase claire]

📋 DÉTAILS :
- Body attendu : { ... }
- Réponse attendue : { ... }
- Comportement erreur : [que faire en 401/422/500]

🔗 DÉPENDANCES :
- Utilise : [apiClient, useAuth, etc.]
```

---

## 14. Commandes utiles

```bash
# Démarrer en dev
npm run dev

# Build production
npm run build

# Lint
npm run lint

# Créer le fichier .env si manquant
echo "VITE_API_URL=http://cari-conf-back.uac.bj/api" > .env.local
```

---

*Dernière mise à jour : Mai 2026 — Synchronisé avec l'état réel du codebase*
