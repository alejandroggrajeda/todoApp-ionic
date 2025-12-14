# TodoApp

Aplicación móvil de gestión de tareas desarrollada con Ionic React.

## Requisitos

- Node.js (versión 14 o superior)
- npm o yarn

## Instalación

1. Clonar o descargar el proyecto

2. Instalar dependencias:

```bash
npm install
```

## Ejecutar la aplicación

### En el navegador web:

```bash
npm start
```

La aplicación se abrirá en `http://localhost:5173`

### En dispositivo móvil (Android/iOS):

1. Compilar el proyecto:

```bash
npm run build
```

2. Sincronizar con Capacitor:

```bash
npx cap sync
```

3. Abrir en Android Studio o Xcode:

```bash
npx cap open android
```

o

```bash
npx cap open ios
```

## Funcionalidades

- Crear tareas con título, descripción y categoría (Trabajo, Casa, Negocios)
- Marcar tareas como completadas
- Ver tareas pendientes y completadas
- Eliminar tareas
- Ver detalles de cada tarea
- Dashboard con resumen y progreso

## Estructura del proyecto

```
src/
  ├── components/      # Componentes reutilizables
  ├── context/         # Context API (TaskContext)
  ├── pages/           # Páginas de la app
  │   ├── Home.tsx     # Página principal con dashboard
  │   ├── TaskList.tsx # Lista de tareas
  │   └── TaskDetail.tsx # Detalle de tarea
  └── theme/           # Estilos y variables
```

## Tecnologías

- **Ionic Framework** - UI Components
- **React** - Frontend framework
- **TypeScript** - Lenguaje de programación
- **Capacitor** - Para funcionalidad nativa
- **Vite** - Build tool
