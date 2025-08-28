# Cloudflare Pages Deployment Guide

## Solución para "Page Not Found"

Este proyecto está configurado para funcionar correctamente en Cloudflare Pages con las siguientes configuraciones:

### Archivos de Configuración

1. **`public/_redirects`** - Maneja el routing de SPA (Single Page Application)
   ```
   /*    /index.html   200
   ```

2. **`public/_headers`** - Configura headers de seguridad y caché
   ```
   /*
     X-Frame-Options: DENY
     X-Content-Type-Options: nosniff
     Referrer-Policy: strict-origin-when-cross-origin

   /index.html
     Cache-Control: public, max-age=0, must-revalidate
   ```

3. **`.cloudflare/build.toml`** - Configuración de build para Cloudflare
   ```toml
   [build]
   command = "npm install --legacy-peer-deps && npm run build:local"
   publish = "out"

   [build.environment]
   NODE_VERSION = "18"
   NPM_VERSION = "10"
   NPM_FLAGS = "--legacy-peer-deps"

   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200

   [[redirects]]
   from = "/"
   to = "/index.html"
   status = 200
   ```

4. **`wrangler.toml`** - Configuración alternativa para Cloudflare Pages
   ```toml
   name = "jod-cv"
   compatibility_date = "2024-01-01"

   [build]
   command = "npm run build"
   publish = "out"

   [build.environment]
   NODE_VERSION = "18"

   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```

### Comandos de Build

```bash
# Build local
npm run build

# Build para Cloudflare (copia archivos al directorio raíz)
npm run build:cloudflare
```

### Verificación

Después del build, verifica que los siguientes archivos estén en el directorio `out/`:
- `index.html`
- `_redirects`
- `_headers`
- `_next/` (directorio con assets)

### Troubleshooting

Si sigues viendo "Page Not Found":

1. Verifica que el directorio `out/` contenga todos los archivos necesarios
2. Asegúrate de que Cloudflare Pages esté configurado para usar el directorio `out/` como directorio de publicación
3. Verifica que las redirecciones estén configuradas correctamente en el dashboard de Cloudflare
4. Limpia la caché de Cloudflare si es necesario

### Configuración en Cloudflare Dashboard

1. Ve a tu proyecto en Cloudflare Pages
2. En la pestaña "Settings" > "Builds & deployments"
3. Asegúrate de que:
   - Build command: `npm run build:cloudflare`
   - Build output directory: `.` (directorio raíz)
   - Node.js version: 18

### Notas Importantes

- Este proyecto usa `output: 'export'` en `next.config.js` para generar archivos estáticos
- Las redirecciones son necesarias para que las rutas de la SPA funcionen correctamente
- Los archivos `_redirects` y `_headers` se copian automáticamente al directorio `out/` durante el build
