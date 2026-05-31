# Session Frontend 2 — Synchronisation champs profil participant

**Date :** 31 mai 2026  
**Projet :** CARI'2026 Frontend — React 19 + Vite 7  
**Backend déployé :** `http://cari-conf-back.uac.bj/api`

---

## 1. Contexte

Après la Session Frontend 1, le formulaire `RegistrationMyInfo.jsx` envoyait 26 champs via `PUT /api/participant/profile`, mais :
- La DB n'avait que 10 colonnes de profil
- Le champ `institution` du frontend correspondait à `affiliation` en DB (bug de nommage)
- 16 champs étaient silencieusement ignorés par le backend

Cette session corrige tout ça de bout en bout : DB, backend, frontend.

---

## 2. Ce qui a changé côté frontend

### `src/pages/RegistrationMyInfo.jsx`

**`useEffect` (chargement du profil) :**

| Avant | Après |
|-------|-------|
| `p.affiliation` | `p.institution` (corrigé) |
| `emailPersonal: p.email_personnel` | `emailPersonal: ''` (supprimé — pas de colonne) |
| Religions et responsabilités non chargées | `setReligions(p.religions)` et `setCaringResponsibilities(p.responsabilites_soin)` pré-remplissent les checkboxes |

**`onSubmit` (payload envoyé à l'API) :**

| Avant | Après |
|-------|-------|
| `email_personnel: data.emailPersonal` | *(supprimé)* |
| `email: data.emailWork` | *(supprimé — email non modifiable)* |
| Ordre désorganisé | Tous les 24 champs correctement mappés |

**Payload complet envoyé maintenant :**

```js
{
  titre, prenom, nom, genre,
  institution, departement,
  adresse, ville, region, code_postal, pays,
  telephone, mobile, fax,
  preferences_alimentaires,
  facturation_institution, facturation_adresse,
  bureau_fiscal, numero_fiscal,
  residence, handicap, autre_religion,
  religions,           // array JSONB
  responsabilites_soin // array JSONB
}
```

---

## 3. Ce qui a changé côté backend et DB

Voir `the_back/back_cari2026/docs/SESSION_FRONTEND_2_SCHEMA.md` pour le détail complet.

**En résumé :**
- Colonne `affiliation` renommée en `institution`
- 7 VARCHAR existants doublés en taille
- 16 nouvelles colonnes ajoutées
- 4 fichiers Laravel mis à jour (Model, Request, Controller, Resource)

---

## 4. Réponse GET /participant/profile — nouveaux champs disponibles

Après cette session, `getProfile()` retourne maintenant :

```json
{
  "data": {
    "id": 291,
    "email": "visadisaz@mailinator.com",
    "titre": "Mr",
    "prenom": "Owen",
    "nom": "Mueller",
    "genre": "",
    "institution": "dfghnjkjhgbf",
    "departement": "bghnj;hgbfvd",
    "adresse": "Dolores dolores expl",
    "ville": "Veniam officiis dol",
    "region": "g hj;j,hngbfv",
    "code_postal": "Ea sed consequatur",
    "pays": "Distinctio Cupidata",
    "telephone": "+1 (995) 218-7354",
    "mobile": "363553552",
    "fax": "532632",
    "preferences_alimentaires": "",
    "facturation_institution": "",
    "facturation_adresse": "",
    "bureau_fiscal": "",
    "numero_fiscal": "",
    "residence": "",
    "handicap": "No",
    "religions": [],
    "responsabilites_soin": [],
    "autre_religion": "",
    "type_participant": "regular",
    "est_auteur": false,
    "papier_ids": [],
    "statut_compte": "ACTIF",
    "created_at": "2026-05-31T17:48:06.000000Z"
  }
}
```

---

## 5. Règles à retenir pour la suite

- **`email` est en lecture seule** dans le profil — ne jamais l'envoyer dans le payload PUT
- **`religions` et `responsabilites_soin`** sont des tableaux JSONB — toujours envoyer `[]` si vide (jamais `null`)
- **`institution`** est le bon nom partout — `affiliation` n'existe plus
