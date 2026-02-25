import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      /* Configuration de l'optimisation des images */
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      
      /* Options pour JPEG */
      jpeg: {
        quality: 75, // Qualité de 75% (bon équilibre qualité/taille)
      },
      
      /* Options pour JPG */
      jpg: {
        quality: 75,
      },
      
      /* Options pour PNG */
      png: {
        quality: 75,
      },
      
      /* Options pour WebP (format moderne recommandé) */
      webp: {
        quality: 75,
      },
      
      /* Options avancées */
      includePublic: true, // Optimise aussi les images dans /public
      logStats: true, // Affiche les stats d'optimisation dans la console
      
      /* Cache pour éviter de réoptimiser les images déjà traitées */
      cache: true,
      cacheLocation: '.cache/image-optimizer',
    }),
  ],
  
  /* Configuration du build */
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Organise les assets par type
          if (/\.(jpe?g|png|gif|svg|webp)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});