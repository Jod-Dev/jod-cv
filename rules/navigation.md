# 🧭 Navigation Rules

## 📋 Reglas de Navegación

### ✅ **Estructura de Navegación**

#### Enlaces Principales (Desktop)
```typescript
const navItems = [
  { href: '#about', label: 'navigation.about' },
  { href: '#experience', label: 'navigation.experience' },
  { href: '#skills', label: 'navigation.skills' },
  { href: '#education', label: 'navigation.education' },
  { href: '#projects', label: 'navigation.projects' },
  { href: '#contact', label: 'navigation.contact' }
]
```

**✅ REQUERIDO:**
- Todos los 6 enlaces deben estar visibles en desktop
- Usar `TranslatedText` para internacionalización
- Hover effects con transiciones suaves

#### Controles de Navegación
```typescript
// Controles agrupados
<ThemeToggle />
<LanguageSwitcher />
<TranslatedButton onClick={generateCVPDF} />
```

### 📱 **Responsive Design**

#### Desktop (lg:flex)
- ✅ Navegación horizontal completa
- ✅ Separador visual entre navegación y controles
- ✅ Espaciado consistente (gap-6)

#### Mobile/Tablet (lg:hidden)
- ✅ Menú hamburguesa animado
- ✅ Panel lateral deslizable
- ✅ Backdrop con blur
- ✅ Organización por secciones

### 🎨 **Diseño Visual**

#### Estilos Requeridos
```css
/* Enlaces de navegación */
text-muted-foreground hover:text-foreground
transition-colors duration-200
font-medium text-sm

/* Separador */
w-px h-6 bg-border

/* Controles */
gap-3 flex items-center
```

#### Animaciones
- ✅ Hamburger → X transformación fluida
- ✅ Panel lateral con spring animation
- ✅ Hover effects en enlaces
- ✅ Transiciones suaves en controles

### 🚨 **Errores a Prevenir**

#### ❌ NO PERMITIDO:
- Navegación incompleta (menos de 6 enlaces)
- Enlaces sin traducción
- Controles sin agrupar
- Animaciones bruscas
- Diseño no responsive

#### ✅ REQUERIDO:
- Todos los enlaces visibles
- Traducción completa
- Controles organizados
- Animaciones suaves
- Responsive completo

### 📊 **Estructura del Menú Mobile**

#### Sección: Navigation
- About
- Experience
- Skills
- Education
- Projects
- Contact

#### Sección: Settings
- Theme (ThemeToggle)
- Language (LanguageSwitcher)

#### Sección: CTA
- Download CV (TranslatedButton)

### 🎯 **Comandos de Verificación**

#### Verificar Navegación
```bash
# Verificar que todos los enlaces estén presentes
grep -n "navItems" components/header.tsx

# Verificar traducciones
grep -n "navigation\." messages/*.json
```

#### Verificar Responsive
```bash
# Verificar breakpoints
grep -n "lg:flex\|lg:hidden" components/header.tsx
```

### 🔄 **Proceso de Actualización**

#### Al Agregar Nuevo Enlace:
1. ✅ Agregar a `navItems` array
2. ✅ Agregar traducción en `messages/*.json`
3. ✅ Verificar responsive design
4. ✅ Probar animaciones
5. ✅ Commit con pre-commit hook

#### Al Modificar Controles:
1. ✅ Mantener agrupación
2. ✅ Verificar espaciado
3. ✅ Probar en mobile
4. ✅ Verificar accesibilidad

---

**📝 Regla Principal: Navegación debe ser completa, responsive y accesible en todos los dispositivos.**
