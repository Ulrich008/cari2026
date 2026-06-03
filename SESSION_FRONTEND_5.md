# Session Frontend 5 — PDF côté client + intégration update_frontend

**Date :** 3 juin 2026  
**Tests backend :** 253/253 ✅

---

## 1. Changement architectural majeur

**Avant (Sessions 3-4) :** backend générait du texte `.txt` → frontend téléchargeait  
**Après (Session 5) :** backend retourne des **données JSON** → **frontend génère le PDF** avec **jsPDF**

```
Frontend → POST /participant/invitation-letter → JSON {full_name, institution, pays, ...}
         → generateInvitationPDF({...})         → PDF téléchargé localement
         → POST /participant/send-invitation-email → email envoyé + compteur incrémenté
```

---

## 2. Fichiers créés / modifiés

### Frontend

| Fichier | Changement |
|---------|-----------|
| `package.json` | `jspdf@^4.2.1` ajouté |
| `src/utils/generateInvitationPDF.js` | Nouveau — génère le PDF invitation (jsPDF, A4 portrait, 3 logos, 5 paragraphes) |
| `src/utils/generateCertificatePDF.js` | Nouveau — génère le certificat (jsPDF, A4 paysage, filets or) |
| `src/api/participantApi.js` | +`getInvitationData()`, `sendInvitationEmail()`, `getCertificateData()`, `sendCertificateEmail()` |
| `src/pages/RegistrationInvitation.jsx` | Refactorisé — formulaire + jsPDF + envoi email backend |
| `src/pages/RegistrationCertificate.jsx` | Refactorisé — jsPDF + envoi email backend |
| `src/pages/Venue.jsx` | "Residence Nenuphar" → **"IITA Guest House"** |
| `src/pages/Registration.jsx` | Prix gala dîner : 20€ → **10€** |

### Backend

| Fichier | Changement |
|---------|-----------|
| `routes/api.php` | `invitation-letter` → `getInvitationData()`, `certificate` → `getCertificateData()`, +2 routes email |
| `app/Mail/InvitationMail.php` | Nouveau Mailable |
| `app/Mail/CertificateMail.php` | Nouveau Mailable |
| `resources/views/emails/invitation.blade.php` | Nouveau template email |
| `resources/views/emails/certificate.blade.php` | Nouveau template email |
| `app/Services/Participant/RegistrationParticipantService.php` | +`getInvitationData()`, `getCertificateData()`, `sendInvitationEmail()`, `sendCertificateEmail()` |
| `app/Http/Controllers/Api/Participant/RegistrationParticipantController.php` | Méthodes remplacées/ajoutées |
| `tests/Feature/Participant/RegistrationParticipantTest.php` | Tests mis à jour (JSON au lieu de texte) |

---

## 3. Nouvelles routes backend

| Méthode | URL | Condition | Description |
|---------|-----|-----------|-------------|
| POST | `/api/participant/invitation-letter` | `statut_paiement = paid` + remaining > 0 | Retourne JSON pour génération PDF |
| POST | `/api/participant/send-invitation-email` | idem | Envoie email + incrémente compteur |
| GET | `/api/participant/certificate` | `statut_registration = checked_in` + remaining > 0 | Retourne JSON pour génération PDF |
| POST | `/api/participant/send-certificate-email` | idem | Envoie email + incrémente certificat |

---

## 4. Flux invitation letter

1. Participant va sur `/registration/portal/invitation`
2. `getMyRegistration()` + `getProfile()` chargés en parallèle
3. Si paiement validé : `getInvitationData()` → pré-rempli nom + institution
4. Participant saisit **nationalité** + **numéro de passeport** (optionnel)
5. Clic "Generate & Download" :
   - `generateInvitationPDF({fullName, affiliation, nationality, passportNumber})` → téléchargement local
   - `sendInvitationEmail({full_name, nationality, passport_number})` → email envoyé + compteur incrémenté
6. Message de confirmation affiché

**Numéro de passeport :** saisi par le participant à chaque génération — non persisté en DB.

---

## 5. Flux certificat

1. Participant va sur `/registration/portal/certificate`
2. Condition : `statut_registration = 'checked_in'` (validé par un admin via le dashboard)
3. `getCertificateData()` → retourne `{full_name, conference_dates, conference_lieu, certificate_remaining}`
4. Clic "Download Certificate (PDF)" :
   - `generateCertificatePDF({fullName})` → téléchargement local A4 paysage
   - `sendCertificateEmail()` → email envoyé + compteur incrémenté

---

## 6. Règle importante

Les logos (UAC, CARI, ASDS) sont dans `public/assets/`. Les utils jsPDF les chargent via `fetch('/assets/logo.png')` converti en data URL. **Ne pas importer les images de `public/` avec `import` ES module dans Vite** — cela cause une erreur de build.
