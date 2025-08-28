# 💻 Development Rules

## 📋 Reglas de Desarrollo

### ✅ **Flujo de Trabajo**

#### Antes de Cada Acción
1. ✅ **Revisar reglas** en `/rules/`
2. ✅ **Verificar configuración** actual
3. ✅ **Planificar cambios** según reglas
4. ✅ **Ejecutar con validación**

#### Proceso de Commit
```bash
# 1. Pre-commit hook (automático)
git add .
git commit -m "message"  # Auto-fix se ejecuta

# 2. Push trigger GitHub Actions
git push  # Auto-deploy se ejecuta
```

### 🔧 **Scripts Requeridos**

#### Pre-commit Hook
```bash
./scripts/pre-commit.sh
```
**✅ Funciones:**
- Corregir `_routes.json`
- Corregir `_redirects`
- Corregir `wrangler.toml`
- Staging automático

#### Auto-deploy Script
```bash
./scripts/auto-deploy.sh
```
**✅ Funciones:**
- Detectar errores
- Corregir automáticamente
- Reintentar hasta 3 veces
- Logs detallados

### 📁 **Estructura de Archivos**

#### Configuración de Deployment
```
├── _routes.json          # Reglas de routing
├── _redirects            # Reglas de redirección
├── wrangler.toml         # Configuración Cloudflare
├── scripts/
│   ├── auto-deploy.sh    # Script de deployment
│   └── pre-commit.sh     # Script pre-commit
└── rules/
    ├── deployment.md     # Reglas de deployment
    ├── navigation.md     # Reglas de navegación
    └── development.md    # Reglas de desarrollo
```

### 🚨 **Validaciones Requeridas**

#### Antes de Modificar
1. ✅ **Leer reglas relevantes**
2. ✅ **Verificar estado actual**
3. ✅ **Planificar según reglas**
4. ✅ **Preparar rollback si es necesario**

#### Durante Modificación
1. ✅ **Seguir patrones establecidos**
2. ✅ **Mantener consistencia**
3. ✅ **Usar herramientas automatizadas**
4. ✅ **Documentar cambios**

#### Después de Modificación
1. ✅ **Verificar funcionamiento**
2. ✅ **Probar en diferentes dispositivos**
3. ✅ **Confirmar deployment exitoso**
4. ✅ **Actualizar documentación si es necesario**

### 🎯 **Comandos de Verificación**

#### Verificar Configuración
```bash
# Verificar archivos de configuración
cat _routes.json
cat _redirects
cat wrangler.toml

# Verificar scripts
ls -la scripts/
chmod +x scripts/*.sh
```

#### Verificar Estado
```bash
# Verificar git hooks
ls -la .git/hooks/pre-commit

# Verificar GitHub Actions
ls -la .github/workflows/
```

### 📊 **Métricas de Calidad**

#### Deployment
- **Tiempo**: < 3 minutos
- **Éxito**: > 99%
- **Reintentos**: < 3
- **Errores**: 0 críticos

#### Código
- **Linting**: Sin errores
- **Types**: Sin errores
- **Build**: Exitoso
- **Tests**: Pasando

### 🔄 **Proceso de Debugging**

#### Si hay Error de Deployment
1. ✅ **Revisar logs** en GitHub Actions
2. ✅ **Verificar configuración** según reglas
3. ✅ **Ejecutar auto-deploy** localmente
4. ✅ **Corregir según reglas**
5. ✅ **Re-deploy automático**

#### Si hay Error de Código
1. ✅ **Revisar linting** local
2. ✅ **Verificar tipos** TypeScript
3. ✅ **Probar build** local
4. ✅ **Corregir según estándares**
5. ✅ **Commit con pre-commit**

### 📝 **Documentación**

#### Reglas a Seguir
- ✅ **Siempre revisar** `/rules/` antes de cambios
- ✅ **Documentar** cambios significativos
- ✅ **Mantener** reglas actualizadas
- ✅ **Comunicar** cambios importantes

#### Archivos de Reglas
- `rules/deployment.md` - Reglas de deployment
- `rules/navigation.md` - Reglas de navegación
- `rules/development.md` - Reglas de desarrollo

### 🎯 **Checklist Antes de Cada Acción**

#### ✅ Preparación
- [ ] Revisar reglas relevantes
- [ ] Verificar estado actual
- [ ] Planificar cambios
- [ ] Preparar herramientas

#### ✅ Ejecución
- [ ] Seguir patrones establecidos
- [ ] Usar scripts automatizados
- [ ] Validar en cada paso
- [ ] Documentar cambios

#### ✅ Verificación
- [ ] Probar funcionalidad
- [ ] Verificar deployment
- [ ] Confirmar éxito
- [ ] Actualizar documentación

---

**📝 Regla Principal: Siempre revisar las reglas antes de ejecutar cualquier acción.**
