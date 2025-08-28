# Cloudflare Pages Setup Guide

## Problema Solucionado ✅

El workflow de Docker estaba causando fallos porque no es compatible con `output: 'export'` de Next.js.

## Configuración Manual de Cloudflare Pages

### Opción 1: Dashboard de Cloudflare (Recomendado)

1. **Ve al Dashboard de Cloudflare**
   - [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Selecciona tu cuenta

2. **Crear Proyecto de Pages**
   - Ve a "Pages" en el menú lateral
   - Haz clic en "Create a project"
   - Selecciona "Connect to Git"

3. **Conectar Repositorio**
   - Selecciona tu repositorio: `Jod-Dev/jod-cv`
   - Autoriza a Cloudflare

4. **Configurar Build**
   - **Framework preset**: None
   - **Build command**: `npm run build:cloudflare`
   - **Build output directory**: `.` (punto)
   - **Root directory**: `/` (dejar vacío)

5. **Variables de Entorno (Opcional)**
   - `NODE_VERSION`: `18`
   - `NPM_VERSION`: `10`

6. **Deploy**
   - Haz clic en "Save and Deploy"

### Opción 2: GitHub Actions (Automático)

Si quieres usar el workflow de GitHub Actions:

1. **Obtener API Token de Cloudflare**
   - Ve a [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Crea un nuevo token con permisos de Pages
   - Copia el token

2. **Obtener Account ID**
   - En el dashboard de Cloudflare, ve a la página principal
   - Copia el "Account ID" del lado derecho

3. **Configurar Secrets en GitHub**
   - Ve a tu repositorio en GitHub
   - Settings → Secrets and variables → Actions
   - Agrega estos secrets:
     - `CLOUDFLARE_API_TOKEN`: Tu API token
     - `CLOUDFLARE_ACCOUNT_ID`: Tu Account ID

4. **El workflow se ejecutará automáticamente** en cada push a `main`

## Verificación

Una vez configurado, tu sitio estará disponible en:
```
https://jod-cv.jodlouis-dev.workers.dev
```

## Troubleshooting

### Si sigue dando 404:
1. Verifica que el build command sea `npm run build:cloudflare`
2. Verifica que el output directory sea `.` (punto)
3. Asegúrate de que los archivos `index.html`, `_redirects`, y `_headers` estén en el directorio raíz

### Si el build falla:
1. Revisa los logs en el dashboard de Cloudflare
2. Verifica que todas las dependencias estén en `package.json`
3. Asegúrate de que Node.js 18 esté disponible

## Archivos Importantes

- `index.html`: Página principal
- `_redirects`: Reglas de redirección para SPA
- `_headers`: Headers de seguridad
- `.cloudflare/build.toml`: Configuración de build
- `wrangler.toml`: Configuración de Workers

## Nota

El workflow de Docker ha sido deshabilitado porque no es compatible con la configuración de export estático de Next.js.
