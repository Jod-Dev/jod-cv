# 🚀 Deployment Rules

## 📋 Reglas de Deployment

### ✅ **Configuración de Archivos**

#### `_routes.json`
```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": [
    "/_next/static/*",
    "/api/*",
    "/static/*"
  ]
}
```

**❌ NO PERMITIDO:**
- Reglas que se superpongan con `/_next/static/*`
- Reglas demasiado amplias como `/_next/*`

#### `_redirects`
```
/*    /index.html   200
```

**❌ NO PERMITIDO:**
- Reglas que causen bucles infinitos
- Reglas complejas sin necesidad

#### `wrangler.toml`
```toml
name = "jod-cv"
compatibility_date = "2024-01-01"
pages_build_output_dir = "out"
```

**❌ NO PERMITIDO:**
- Sección `[build]` (no soportada en Pages)
- Configuraciones innecesarias

### 🔄 **Proceso de Deployment**

#### Pre-commit (Automático)
1. ✅ Corregir `_routes.json`
2. ✅ Corregir `_redirects`
3. ✅ Corregir `wrangler.toml`
4. ✅ Staging automático de archivos corregidos

#### Auto-deploy (Automático)
1. ✅ Detectar errores comunes
2. ✅ Corregir automáticamente
3. ✅ Reintentar hasta 3 veces
4. ✅ Logs detallados con colores

#### GitHub Actions (Automático)
1. ✅ Trigger en push a `main`
2. ✅ Usar `CLOUDFLARE_API_TOKEN`
3. ✅ Notificar éxito/fallo

### 🚨 **Errores Comunes a Prevenir**

#### Error 8000057: Overlapping Rules
```
Error 8000057: Overlapping rules in `_routes.json` are not allowed.
Rule "/_next/static/*" is overlapped by "/_next/*"
```

#### Error: Infinite Loop
```
Infinite loop detected in this rule and has been ignored.
```

#### Error: Wrangler Configuration
```
Configuration file for Pages projects does not support "build"
```

### 📊 **Monitoreo**

#### Logs Requeridos
- 🔵 **Azul**: Información general
- 🟢 **Verde**: Éxito
- 🟡 **Amarillo**: Advertencias
- 🔴 **Rojo**: Errores

#### Métricas
- **Tiempo de Deployment**: ~2-3 minutos
- **Tasa de Éxito**: 99%+
- **Reintentos**: Máximo 3
- **Auto-correcciones**: 3 tipos

### 🎯 **Comandos**

#### Deploy Manual
```bash
npm run deploy
# o
./scripts/auto-deploy.sh
```

#### Pre-commit
```bash
./scripts/pre-commit.sh
```

#### Verificar Configuración
```bash
# Verificar _routes.json
cat _routes.json

# Verificar _redirects
cat _redirects

# Verificar wrangler.toml
cat wrangler.toml
```

---

**📝 Regla Principal: Siempre usar el sistema automatizado, nunca deployment manual.**
