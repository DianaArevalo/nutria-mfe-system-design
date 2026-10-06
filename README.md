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


## Button

Componente Button reutilizable con variantes definidas según el diseño visual de NUTRIA. Utiliza Design Tokens existentes.

### Variantes disponibles

- primary - Botón principal con fondo accent (por defecto)
- outline - Botón con borde y fondo transparente
- danger-outline - Botón para acciones destructivas con estilo outline

### Importación
``tsx
import { Button } from '@nutria/design-system';``r

### Ejemplos de uso
``tsx
<Button variant="primary">Editar afiliado</Button>
<Button variant="outline">Ver historial laboral</Button>
<Button variant="danger-outline">Desactivar</Button>``
## Badge

Componente Badge reutilizable para representar estados. Es presentacional: recibe `variant` y muestra el estado, no administra estado interno. Utiliza Design Tokens existentes.

### Variantes disponibles

- success - Estado correcto/activo (por defecto)
- pending - Estado en espera
- danger - Estado de error/inactivo

### Importación

```tsx
import { Badge } from '@nutria/design-system';
```

### Ejemplos de uso

```tsx
<Badge variant="success">Activo</Badge>
<Badge variant="pending">Pendiente</Badge>
<Badge variant="danger">Inactivo</Badge>
```

`variant` es opcional y su valor por defecto es `success`.

### Ejemplo interactivo con useState

Badge no administra su propio estado: quien lo consume decide qué `variant` enviar mediante props. Un showcase puede cambiar la variante en tiempo de ejecución con `useState`:

```tsx
import { useState } from 'react';
import { Badge, type BadgeVariant } from '@nutria/design-system';

export const StatusDemo = () => {
  const [status, setStatus] = useState<BadgeVariant>('success');

  return (
    <div>
      <button onClick={() => setStatus('success')}>Activo</button>
      <button onClick={() => setStatus('pending')}>Pendiente</button>
      <button onClick={() => setStatus('danger')}>Inactivo</button>

      <Badge variant={status}>Estado actual</Badge>
    </div>
  );
};
```

Flujo: interacción del usuario -> setStatus(...) -> React actualiza el estado -> el showcase vuelve a renderizar -> Badge recibe una nueva prop variant -> Badge cambia visualmente.

Ejemplo completo en src/examples/BadgeExample.tsx.
## Card

Componente Card reutilizable: un contenedor visual para agrupar información relacionada. Es presentacional y agnóstico del dominio: recibe `children` y no conoce ningún otro componente del Design System. Utiliza Design Tokens existentes.

### Props

| Prop        | Tipo                                 | Default | Descripcion                                                 |
| ----------- | ------------------------------------ | ------- | ----------------------------------------------------------- |
| `children`  | `React.ReactNode`                    | -       | Contenido a renderizar dentro de la Card                    |
| `className` | `string`                             | `''`    | Clases adicionales, se concatenan a `nutria-card`          |
| ...rest     | `React.HTMLAttributes<HTMLDivElement>` | -     | Atributos HTML del `<div>`: `id`, `role`, `aria-*`, `data-*`, `style`, ... |

No tiene variantes: es un componente base y sencillo.

### Importación

```tsx
import { Card } from '@nutria/design-system';
```

### Ejemplos de uso

```tsx
<Card>
  <h2>Información del afiliado</h2>
  <p>Datos del afiliado...</p>
</Card>
```

Composición con otros componentes del Design System. Card no depende de ellos, solo los contiene:

```tsx
<Card>
  <Heading level="h3">María Rodríguez</Heading>

  <Badge variant="success">Activo</Badge>

  <Button variant="outline">Ver detalle</Button>
</Card>
```

Ejemplo completo en src/examples/CardExample.tsx.
## Avatar

Componente Avatar reutilizable para representar visualmente a una persona o usuario. Muestra una imagen cuando se entrega `src` y, cuando no existe, muestra un fallback con las iniciales del `name`. Es presentacional, agnóstico del dominio y no realiza ninguna llamada HTTP. Utiliza Design Tokens existentes.

### Props

| Prop        | Tipo                                   | Default | Descripcion                                                          |
| ----------- | -------------------------------------- | ------- | -------------------------------------------------------------------- |
| `src`       | `string`                               | -       | URL de la imagen. Si no se entrega, se muestran las iniciales       |
| `alt`       | `string`                               | `name`  | Texto alternativo de la imagen. Si no se entrega se usa `name` o `''` |
| `name`      | `string`                               | -       | Nombre completo, usado para generar las iniciales y el `aria-label` |
| `size`      | `'sm' \| 'md' \| 'lg'`                 | `'md'`  | Tamaño del avatar                                                    |
| `className` | `string`                               | `''`    | Clases adicionales, se concatenan a `nutria-avatar`                  |
| ...rest     | `React.HTMLAttributes<HTMLSpanElement>` | -       | Atributos HTML del `<span>` contenedor: `id`, `role`, `aria-*`, `data-*`, ... |

Los atributos de accesibilidad del consumidor se aplican al contenedor y tienen prioridad sobre los valores por defecto.

### Tamaños

| Size | Dimensiones                  |
| ---- | ---------------------------- |
| `sm` | `--nutria-space-6` (1.5rem)  |
| `md` | `--nutria-space-8` (2rem)    |
| `lg` | `--nutria-space-12` (3rem)   |

### Fallback de iniciales

Cuando no se entrega `src`, el Avatar renderiza las iniciales del `name`: la primera letra de la primera palabra más la primera letra de la última palabra, en mayúsculas. Con una sola palabra se muestra un único carácter.

| `name`                      | Iniciales |
| --------------------------- | --------- |
| `Oscar Tovar`               | `OT`      |
| `Maria Rodriguez`           | `MR`      |
| `Pedro`                     | `P`       |
| `Maria Fernanda Rodriguez` | `MR`      |

La función `getInitials` también está exportada por si se requiere reutilizarla.

Accesibilidad del fallback: el contenedor usa `role="img"` y `aria-label` con el `name`, de modo que se anuncia el nombre y no las iniciales.

### Importación

```tsx
import { Avatar } from '@nutria/design-system';
```

### Ejemplos de uso

```tsx
<Avatar src="/avatar.jpg" alt="Oscar Tovar" name="Oscar Tovar" />

<Avatar name="Oscar Tovar" />
```

```tsx
<Avatar size="sm" name="Oscar Tovar" />
<Avatar size="md" name="Oscar Tovar" />
<Avatar size="lg" name="Oscar Tovar" />
```

Ejemplo completo en src/examples/AvatarExample.tsx.
## Progress

Componente Progress reutilizable para representar el avance de una tarea. Muestra una barra cuyo ancho es un **valor derivado** de las props `value` y `max`. Es presentacional, agnóstico del dominio y no contiene estado interno. Utiliza Design Tokens existentes.

### Props

| Prop        | Tipo                                   | Default | Descripcion                                                             |
| ----------- | -------------------------------------- | ------- | ----------------------------------------------------------------------- |
| `value`     | `number`                               | `0`     | Valor actual. Se limita visualmente al rango `0` - `max`                |
| `max`       | `number`                               | `100`   | Valor máximo de referencia. Si es `<= 0` se usa `100` para evitar dividir entre cero |
| `label`     | `string`                               | -       | Texto visible de la barra y nombre accesible del `progressbar`          |
| `showValue` | `boolean`                              | `false` | Muestra el porcentaje actual junto al label                             |
| `className` | `string`                               | `''`    | Clases adicionales, se concatenan a `nutria-progress`                   |
| ...rest     | `React.HTMLAttributes<HTMLDivElement>` | -       | Atributos HTML del `<div>` contenedor: `id`, `data-*`, `style`, ...     |

### Estado vs valor derivado

El porcentaje **no** se guarda en estado, se calcula a partir de las props:

```tsx
percentage = (value / max) * 100; // acotado entre 0 y 100
```

| `value` | `max` | Resultado       |
| ------- | ----- | --------------- |
| `0`     | `100` | `0%`            |
| `25`    | `100` | `25%`           |
| `50`    | `100` | `50%`           |
| `75`    | `100` | `75%`           |
| `100`   | `100` | `100%`          |
| `150`   | `100` | `100%` (acotado) |
| `-10`   | `100` | `0%` (acotado)  |

`value` es estado o prop. `percentage` es un valor derivado: no necesita estado propio porque siempre se recalcula en el render.

### Accesibilidad

La barra usa `role="progressbar"` con `aria-valuemin`, `aria-valuemax` y `aria-valuenow`, y toma `label` como nombre accesible. Cuando `showValue={false}` el porcentaje no se muestra visualmente pero sigue disponible para lectores de pantalla.

### Importación

```tsx
import { Progress } from '@nutria/design-system';
```

### Ejemplos de uso

```tsx
<Progress value={0} />
<Progress value={50} />
<Progress value={100} />

<Progress value={65} label="Progreso de afiliación" showValue />
```

### Ejemplo interactivo con useState

El estado vive en `ProgressExample`, no en `Progress`. `useState` guarda el valor actual y `Progress` recibe el cambio por props:

```tsx
const [value, setValue] = useState(60);

<Button variant="outline" onClick={() => setValue(prev => Math.max(0, prev - 10))}>
  -10
</Button>

<Button variant="outline" onClick={() => setValue(prev => Math.min(100, prev + 10))}>
  +10
</Button>

<Progress value={value} label="Progreso de afiliación" showValue />
```

Flujo: click -> `setValue(prev => ...)` con actualización funcional -> React actualiza el estado -> `ProgressExample` vuelve a renderizar -> `Progress` recibe un nuevo `value` por props -> recalcula el `percentage` -> la barra se actualiza.

Ejemplo completo en src/examples/ProgressExample.tsx.
## Table

Componente Table reutilizable para representar información tabular. Se compone con subcomponentes semánticos en lugar de una lista larga de props, de modo que el consumidor decide la estructura de filas y columnas. Utiliza Design Tokens existentes.

No incluye sorting, paginación, filtering ni selección de filas. Es un componente presentacional.

### Composición

| Subcomponente  | Elemento HTML | Propiedades HTML                                |
| -------------- | ------------- | ----------------------------------------------- |
| `Table`        | `<table>`     | `React.TableHTMLAttributes<HTMLTableElement>`   |
| `Table.Header` | `<thead>`     | `React.HTMLAttributes<HTMLTableSectionElement>` |
| `Table.Body`   | `<tbody>`     | `React.HTMLAttributes<HTMLTableSectionElement>` |
| `Table.Row`    | `<tr>`        | `React.HTMLAttributes<HTMLTableRowElement>`     |
| `Table.Head`   | `<th>`        | `React.ThHTMLAttributes<HTMLTableCellElement>`  |
| `Table.Cell`   | `<td>`        | `React.TdHTMLAttributes<HTMLTableCellElement>`  |

Todos aceptan `children`, `className` (se concatena a su clase base) y los atributos HTML correspondientes, incluidos `aria-*` y `data-*`.

`Table.Head` renderiza `<th>` con `scope="col"` por defecto, valor que puede ser sobrescrito por el consumidor.

### Importación

```tsx
import { Table } from '@nutria/design-system';
```

Los subcomponentes también están disponibles de forma individual (`TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`) por si se prefieren imports separados.

### Ejemplo de uso

```tsx
<Table aria-label="Afiliados">
  <Table.Header>
    <Table.Row>
      <Table.Head>Afiliado</Table.Head>
      <Table.Head>Estado</Table.Head>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.Cell>Oscar Tovar</Table.Cell>
      <Table.Cell>
        <Badge variant="success">Activo</Badge>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

Table es solo semántica y estilo: no conoce Badge, Typography ni ningún otro componente. La composición la define quien la usa.

Para pantallas angostas se puede envolver en un contenedor con overflow horizontal:

```tsx
<div style={{ overflowX: 'auto' }}>
  <Table>...</Table>
</div>
```

Ejemplo completo en src/examples/TableExample.tsx.
