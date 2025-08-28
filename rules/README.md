# 📋 Rules Directory

## 🎯 **Sistema de Reglas Organizado**

Este directorio contiene todas las reglas y estándares del proyecto para mantener consistencia y prevenir errores.

## 📁 **Archivos de Reglas**

### 🚀 **Deployment Rules** (`deployment.md`)
- Configuración de archivos (`_routes.json`, `_redirects`, `wrangler.toml`)
- Proceso de deployment automatizado
- Errores comunes y cómo prevenirlos
- Comandos de verificación

### 🧭 **Navigation Rules** (`navigation.md`)
- Estructura de navegación requerida
- Diseño responsive
- Animaciones y estilos
- Proceso de actualización

### 💻 **Development Rules** (`development.md`)
- Flujo de trabajo
- Scripts requeridos
- Validaciones y debugging
- Checklist antes de cada acción

## 🔄 **Proceso de Uso**

### Antes de Cada Acción
1. ✅ **Revisar reglas relevantes** en `/rules/`
2. ✅ **Verificar configuración** actual
3. ✅ **Planificar cambios** según reglas
4. ✅ **Ejecutar con validación**

### Comandos de Verificación
```bash
# Verificar todas las reglas
ls -la rules/

# Verificar configuración actual
cat _routes.json
cat _redirects
cat wrangler.toml

# Verificar scripts
ls -la scripts/
```

## 📊 **Reglas Principales**

### ✅ **Deployment**
- Siempre usar sistema automatizado
- Nunca deployment manual
- Auto-corrección de errores
- Logs detallados

### ✅ **Navegación**
- Todos los enlaces visibles
- Diseño responsive completo
- Animaciones suaves
- Traducción completa

### ✅ **Desarrollo**
- Revisar reglas antes de cambios
- Usar scripts automatizados
- Documentar cambios
- Validar en cada paso

## 🚨 **Errores Comunes**

### Deployment
- Overlapping rules en `_routes.json`
- Infinite loop en `_redirects`
- Configuración inválida en `wrangler.toml`

### Navegación
- Enlaces faltantes
- Diseño no responsive
- Animaciones bruscas
- Sin traducción

### Desarrollo
- No revisar reglas
- Deployment manual
- Sin documentación
- Sin validación

## 🎯 **Checklist Rápido**

### Antes de Modificar
- [ ] Revisar `/rules/` relevantes
- [ ] Verificar estado actual
- [ ] Planificar según reglas
- [ ] Preparar herramientas

### Durante Modificación
- [ ] Seguir patrones establecidos
- [ ] Usar scripts automatizados
- [ ] Validar en cada paso
- [ ] Documentar cambios

### Después de Modificación
- [ ] Probar funcionalidad
- [ ] Verificar deployment
- [ ] Confirmar éxito
- [ ] Actualizar documentación

## 📝 **Actualización de Reglas**

### Al Agregar Nueva Regla
1. ✅ Crear archivo en `/rules/`
2. ✅ Documentar claramente
3. ✅ Incluir ejemplos
4. ✅ Actualizar este README
5. ✅ Commit con pre-commit

### Al Modificar Regla Existente
1. ✅ Revisar impacto
2. ✅ Actualizar documentación
3. ✅ Verificar consistencia
4. ✅ Probar cambios
5. ✅ Commit con pre-commit

---

**📝 Regla Principal: Siempre revisar las reglas antes de ejecutar cualquier acción.**

**🎯 Objetivo: Mantener consistencia, prevenir errores y mejorar la experiencia de desarrollo.**
