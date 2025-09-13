# Memorial

## 🏗️ Arquitectura Aplicada

### **1. Modular Architecture (Arquitectura Modular)**
- Cada sección de la landing es un módulo independiente y autocontenido
- Separación clara de responsabilidades por carpeta
- Cada módulo encapsula su lógica, datos y tipos

### **2. Plugin Architecture (Arquitectura de Plugins)**
- Sistema de autodescubrimiento de módulos usando `import.meta.glob()`
- Cada bloque actúa como un "plugin" que se registra automáticamente
- Capacidad de habilitar/deshabilitar módulos sin modificar código

### **3. Registry Pattern (Patrón Registro)**
- `registry.ts` actúa como un registro central de todos los componentes
- Resolución dinámica de dependencias y configuración
- Sistema de metadata para cada módulo (slug, order, enabled, props)

### **4. Configuration-Driven Development**
- Configuración centralizada en `landing.config.ts`
- Separación de configuración del código de implementación
- Override de propiedades y comportamiento sin tocar componentes

### **5. Convention over Configuration**
- Estructura de carpetas predecible (`/src/blocks/<Section>/`)
- Nomenclatura estándar (Block.astro, index.ts, data.ts, types.ts)
- Autodescubrimiento basado en convenciones de naming

### **6. Inversion of Control (IoC)**
- La página principal (`index.astro`) no conoce qué componentes renderizar
- El registry controla qué, cómo y en qué orden se renderizan las secciones
- Dependencias inyectadas a través del sistema de configuración

### **7. Single Responsibility Principle (SRP)**
- Cada módulo tiene una única responsabilidad
- Separación clara entre datos, tipos, componentes y lógica
- Componentes pequeños y enfocados (<200 líneas)

### **8. Open/Closed Principle (OCP)**
- Extensible para nuevos módulos sin modificar código existente
- Cerrado para modificaciones del core del sistema
- Fácil adición de nuevas secciones

## 📁 Estructura del Proyecto

```
memorial/
├── src/
│   ├── pages/
│   │   └── index.astro              # Página principal (mínima lógica)
│   ├── layouts/
│   │   └── BaseLayout.astro         # Layout base
│   ├── blocks/                      # Módulos/Secciones
│   │   ├── registry.ts              # ⚡ Sistema de registro dinámico
│   │   ├── Header/
│   │   │   ├── Block.astro          # Componente principal
│   │   │   ├── index.ts             # Export y metadata
│   │   │   └── data.ts              # Datos de ejemplo
│   │   ├── Hero/
│   │   │   ├── Block.astro
│   │   │   ├── index.ts
│   │   │   ├── data.ts
│   │   │   └── types.ts             # Tipos TypeScript
│   │   ├── Banner/
│   │   ├── Works/
│   │   │   ├── Block.astro
│   │   │   ├── TabList.astro        # Subcomponente
│   │   │   ├── index.ts
│   │   │   ├── data.ts
│   │   │   └── types.ts
│   │   ├── Donations/
│   │   ├── CardsGrid/
│   │   ├── MessagesMarquee/
│   │   └── Footer/
│   ├── landing.config.ts            # ⚙️ Configuración principal
│   └── assets/                      # Imágenes y recursos
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── postcss.config.cjs
```

## ⚙️ Sistema de Configuración

### **landing.config.ts**
```typescript
export default {
  // Autodescubre módulos automáticamente
  autoDiscover: true,
  
  // Define el orden de renderizado
  order: ["Header", "Hero", "Banner", "Works", "Donations", "CardsGrid", "MessagesMarquee", "Footer"],
  
  // Override de configuración por módulo
  overrides: {
    Hero: { 
      enabled: true, 
      props: { 
        customTitle: "Mi título personalizado" 
      } 
    },
    Banner: { 
      enabled: false  // Deshabilita esta sección
    }
  }
} satisfies LandingConfig;
```

### **Estructura de Módulo**
```typescript
// src/blocks/Example/index.ts
import Block from './Block.astro';
import data from './data';

export default Block;

export const meta = {
  slug: 'Example',
  order: 10,
  enabled: true,
  props: data
};
```

## 🚀 Instalación y Uso

### **Requisitos**
- Node.js 18+
- npm o yarn

### **Instalación**
```bash
# Clonar e instalar dependencias
git clone <repository>
cd memorial
npm install
```

### **Scripts Disponibles**
```bash
npm run dev      # Servidor de desarrollo (http://localhost:4321)
npm run build    # Build de producción
npm run preview  # Preview del build
```

## 🔧 Cómo Agregar un Nuevo Módulo

1. **Crear la estructura de carpeta:**
```
src/blocks/MiNuevoModulo/
├── Block.astro      # Componente principal
├── index.ts         # Export y metadata
├── data.ts          # Datos de ejemplo
└── types.ts         # Tipos (opcional)
```

2. **Implementar el componente (Block.astro):**
```astro
---
import type { MiNuevoModuloProps } from './types';

interface Props {
  data?: MiNuevoModuloProps;
}

const { data } = Astro.props;
---

<section class="py-16">
  <!-- Tu contenido aquí -->
</section>
```

3. **Configurar el módulo (index.ts):**
```typescript
import Block from './Block.astro';
import data from './data';

export default Block;

export const meta = {
  slug: 'MiNuevoModulo',
  order: 50,
  enabled: true,
  props: { data }
};
```

4. **¡Listo!** El módulo aparecerá automáticamente en la landing.

## 🎯 Ventajas de Esta Arquitectura

### **✅ Escalabilidad**
- Agregar nuevas secciones sin tocar código existente
- Sistema preparado para crecimiento orgánico
- Cada módulo evoluciona independientemente

### **✅ Mantenibilidad**
- Código altamente organizado y predecible
- Separación clara de responsabilidades
- Fácil localización y debugging

### **✅ Flexibilidad**
- Configuración dinámica sin redeploy
- Reordenamiento de secciones en tiempo de build
- A/B testing a nivel de módulo

### **✅ Reutilización**
- Módulos reutilizables en otros proyectos
- Datos y configuración separados del código
- Sistema de props tipado y flexible

### **✅ Testing**
- Cada módulo es testeable de forma aislada
- Mocking sencillo de dependencias
- Tests unitarios enfocados

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework principal
- **TailwindCSS** - Estilos utilitarios
- **TypeScript** - Tipado estático
- **CSS Keyframes** - Animaciones suaves
- **ES Modules** - Sistema de módulos moderno

## 📋 Principios de Diseño

- **KISS** (Keep It Simple, Stupid)
- **YAGNI** (You Aren't Gonna Need It)
- **DRY** (Don't Repeat Yourself)
- **SOLID** Principles
- **Convention over Configuration**
- **Mobile-First Design**
- **Accessibility-First (ARIA)**

---

**Desarrollado con ❤️ para máxima flexibilidad y mantenibilidad**