import { z } from 'zod';

// ─── Schéma Zod ─────────────────────────────────────────────────────────────

export const registrationSchema = z.object({
  title: z.enum(['Mr', 'Mrs', 'Dr', 'Prof', 'Ms'], {
    errorMap: () => ({ message: 'Veuillez sélectionner une civilité' }),
  }),

  gender: z.string().optional(),

  firstName: z
    .string()
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(50, 'Le prénom ne peut pas dépasser 50 caractères')
    .regex(/^[A-Za-zÀ-ÿ\s'-]+$/, 'Le prénom ne doit contenir que des lettres'),

  lastName: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères')
    .regex(/^[A-Za-zÀ-ÿ\s'-]+$/, 'Le nom ne doit contenir que des lettres'),

  institution: z
    .string()
    .min(3, "Le nom de l'institution est requis (min 3 caractères)")
    .max(150, "L'institution ne peut pas dépasser 150 caractères"),

  department: z.string().max(150, 'Max 150 caractères').optional(),

  address: z.string().max(200, 'Max 200 caractères').optional(),

  city: z
    .string()
    .min(2, 'La ville est requise')
    .max(100, 'Max 100 caractères'),

  state: z.string().max(100, 'Max 100 caractères').optional(),

  postalCode: z
    .string()
    .max(20, 'Max 20 caractères')
    .optional(),

  country: z
    .string()
    .min(2, 'Le pays est requis')
    .max(100, 'Max 100 caractères'),

  telephone: z
    .string()
    .min(6, 'Le numéro de téléphone est requis')
    .regex(
      /^\+?[\d\s\-().]{6,20}$/,
      'Numéro de téléphone invalide (ex: +229 01 23 45 67)'
    ),

  mobile: z
    .string()
    .regex(/^(\+?[\d\s\-().]{6,20})?$/, 'Numéro de mobile invalide')
    .optional()
    .or(z.literal('')),

  fax: z
    .string()
    .regex(/^(\+?[\d\s\-().]{6,20})?$/, 'Numéro de fax invalide')
    .optional()
    .or(z.literal('')),

  emailWork: z
    .string()
    .email('Adresse email professionnelle invalide')
    .max(100, 'Max 100 caractères'),

  emailPersonal: z
    .string()
    .email('Adresse email personnelle invalide')
    .max(100, 'Max 100 caractères')
    .optional()
    .or(z.literal('')),

  dietary: z.string().max(300, 'Max 300 caractères').optional(),

  // Invoice
  billingInstitution: z.string().max(150, 'Max 150 caractères').optional(),
  billingAddress: z.string().max(200, 'Max 200 caractères').optional(),
  taxOffice: z.string().max(100, 'Max 100 caractères').optional(),
  taxNo: z
    .string()
    .regex(/^[A-Za-z0-9\-]*$/, 'Le numéro fiscal ne doit contenir que des lettres, chiffres ou tirets')
    .max(50, 'Max 50 caractères')
    .optional()
    .or(z.literal('')),

  // Equality
  residence: z.string().max(100, 'Max 100 caractères').optional(),
  disability: z.enum(['Yes', 'No', 'Prefer not to say'], {
    errorMap: () => ({ message: 'Veuillez sélectionner une option' }),
  }),

  otherReligion: z.string().max(200, 'Max 200 caractères').optional(),
});

// Type TypeScript inféré (optionnel, si vous utilisez TypeScript)
export default registrationSchema