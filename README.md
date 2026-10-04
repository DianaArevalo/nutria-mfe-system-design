# nutria-mfe-system-design

Design System oficial de NUTRIA. Provee identidad visual y tokens reutilizables para los proyectos frontend de NUTRIA.

## Design Tokens

Los Design Tokens son variables semánticas que centralizan decisiones visuales (colores, tipografías, espaciados, radios, etc.). Su objetivo es garantizar consistencia visual, facilitar el mantenimiento y evitar hardcodear valores en componentes.

### Ubicación

Los tokens se encuentran definidos en src/styles/tokens/:

- colors.css - Paleta cromática base
- 	ypography.css - Familias tipográficas (--nutria-font-display, --nutria-font-body, --nutria-font-mono)
- spacing.css - Escala coherente de espaciados
- adius.css - Tokens de border-radius
- misc.css - Valores visuales reutilizables (border-width, focus outline, transiciones)
- index.css - Punto de entrada que importa todos los tokens

Los estilos globales que cargan los tokens están disponibles en:
- src/styles/index.css
- src/styles/global.css

### Uso

Los tokens se definen como variables CSS globales (:root) y pueden consumirse desde cualquier componente CSS/SCSS al importar los estilos del paquete.

Desde la librería, se exporta también la ruta de estilos a través de exports:

\\\js
// Importar tokens globalmente en la aplicación
import '@nutria/design-system/styles';
\\\

O importando el archivo específico:

\\\js
import '@nutria/design-system/dist/styles/tokens/index.css';
\\\

### Convenciones de nomenclatura

Todos los tokens usan el prefijo --nutria- para asegurar namespace y evitar colisiones:

- Colores: --nutria-color-* (ej. --nutria-color-ink, --nutria-color-accent, --nutria-color-success)
- Tipografía: --nutria-font-* (ej. --nutria-font-display, --nutria-font-body, --nutria-font-mono)
- Espaciado: --nutria-space-* (escala 0,1,2,3,...)
- Radios: --nutria-radius-*
- Misceláneos: --nutria-border-width-*, --nutria-focus-outline-*, --nutria-transition-*

Los nombres son agnósticos del dominio (no incluyen conceptos como "afiliado", "aporte", "empresa", etc.) para mantener el Design System reutilizable.
