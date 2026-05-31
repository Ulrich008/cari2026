# Session Frontend 3 — Pages participant connectées

**Date :** 31 mai 2026  
**Tests backend :** 244/244 ✅

---

## 1. Ce qui a changé

### Pages désormais connectées à l'API

| Page | Avant | Après |
|------|-------|-------|
| `RegistrationPortal` | Statuts hardcodés | Payment + Registration Status dynamiques |
| `RegistrationPayment` | UI statique | GET registration → si existante affiche statut, sinon formulaire de création |
| `RegistrationInvitation` | Simulation 1.8s | Génère lettre réelle, télécharge fichier, compteur 3× |
| `RegistrationCertificate` | Simulation 1.5s | Télécharge certificat réel, compteur 3×, condition paiement vérifié |

---

## 2. Nouveaux fichiers frontend

```
src/api/publicApi.js           — verifyDiscountCode()
```

## 3. Fichiers frontend modifiés

```
src/api/client.js              — support responseType: 'text' pour téléchargements
src/api/participantApi.js      — +7 méthodes (registration, documents, notifications)
src/pages/RegistrationPortal.jsx   — statuts Payment + Registration dynamiques
src/pages/RegistrationPayment.jsx  — connexion API complète
src/pages/RegistrationInvitation.jsx — connexion API, max 3 downloads
src/pages/RegistrationCertificate.jsx — connexion API, max 3 downloads, condition paid
```

---

## 4. Flux Payment

1. Charge `GET /registrations/my` au montage
2. Si registration existe → affiche statut et papiers (read-only)
3. Si pas de registration → affiche le formulaire :
   - Sélectionner un package
   - Optionnel : code promo (vérifié via `POST /public/discount-codes/verify`)
   - Optionnel : gala dinner, invoice amendment
   - Optionnel : papiers à inscrire (depuis `papiers_disponibles`)
4. Bouton → `POST /registrations` → registration créée en `pending`
5. Message : "En attente de paiement — l'agrégateur sera configuré prochainement"

---

## 5. Flux Invitation Letter

1. Charge `GET /registrations/my` + `GET /participant/profile` en parallèle
2. Vérifie : profil complet + paiement validé + downloads restants > 0
3. Pré-rempli nom + institution depuis le profil
4. Bouton → `POST /participant/invitation-letter` → reçoit texte → déclenche download navigateur
5. Compteur décrémenté localement (et en DB côté backend)

---

## 6. Flux Certificate

1. Charge `GET /registrations/my` + `GET /participant/profile`
2. Conditions : profil complet + `statut_paiement = paid` + downloads restants > 0
3. Bouton → `GET /participant/certificate` → reçoit texte → déclenche download navigateur

---

## 7. Note sur les téléchargements

Les fichiers sont actuellement au format texte (`.txt`). La génération PDF nécessite une librairie backend (ex: `barryvdh/laravel-dompdf`). Cette amélioration peut être ajoutée en Phase 5 sans changer les routes ni le frontend — juste le Content-Type dans le controller.

---

## 8. Ce qui reste (Phase 4 — Routes publiques)

| Page | Endpoint manquant |
|------|------------------|
| Programme (UnderConstruction) | `GET /api/public/evenements` + `GET /api/public/programme` |
| Sponsors.jsx (statique) | `GET /api/public/sponsors` |
| News (inexistante) | `GET /api/public/news` |
| Speakers (inexistante) | `GET /api/public/speakers` |
