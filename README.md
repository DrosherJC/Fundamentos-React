# Fundamentos de React

**Laboratorio 5 – Introducción a React**
Asignatura: Desarrollo de Aplicaciones Web
Profesor: Ing. Byron Loarte
Escuela de Formación de Tecnólogos (ESFOT) – Escuela Politécnica Nacional

## Descripción

Aplicación web desarrollada como **Tarea Desafío grupal** del laboratorio. A partir de la aplicación base "Fundamentos de React", cada tema visto en clase fue modificado y adaptado a un caso propio de la vida real, usando nombres, datos y escenarios distintos a los del ejemplo original.

## Demo

- Aplicación desplegada: _(https://drosherjc.github.io/Fundamentos-React/)_

## Temas y ejemplos implementados

| Ruta | Tema | Ejemplo implementado |
|------|------|----------------------|
| `/fundamentos` | Variables, Fragment, JSX, condicionales y eventos | Ficha de una película con botón "Detalles" que muestra director, estudio, estreno y duración |
| `/usestate` | `useState` | Control de temperatura con botones Subir, Bajar y Resetear |
| `/useffect` | `useEffect` | Consulta de la hora actual a una API externa y saludo según la hora del día (con estados de carga y error) |
| `/customhook` | Custom Hook | Hook `useConversion` reutilizable para convertir temperatura, distancia y peso |
| `/props` | Props | Componente padre que envía título, autor y año de un libro a un componente hijo |
| `/zustand` | Zustand (estado global) | Control de volumen de música compartido entre un componente padre y uno hijo |
| `/rederizado` | Renderizado condicional y de listas | Catálogo de productos con indicador de disponible/agotado según el stock |
| `/localstorage` | `localStorage` | Preferencia de idioma (Español/English) que persiste al recargar la página |

## Tecnologías

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router 7](https://reactrouter.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Estructura del proyecto

```
src/
├── customHook/
│   ├── useConversion.js   # Hook de conversión de unidades
│   └── useFecth.js        # Hook para peticiones fetch
├── context/
│   ├── storeVolumen.js    # Store de Zustand (volumen)
│   └── storeGalleta.jsx   # Store de Zustand (galleta)
├── pages/                 # Una página por tema (Primero … Decimo) y LandingPage
├── App.jsx                # Definición de rutas
├── index.jsx              # Punto de entrada
└── index.css
```

## Ejecución local

Requisitos: [Node.js](https://nodejs.org/) 18 o superior.

```bash
git clone https://github.com/DrosherJC/Fundamentos-React.git
cd Fundamentos-React
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## Grupo

| Integrantes | Link del repositorio |
|-------------|----------------------|
| José Buñay | https://github.com/DrosherJC/Fundamentos-React |
| Fernanda Rodríguez| |
| Erick Patiño | |
