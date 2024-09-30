# AQ-T1-FRONT

Este es el frontend del proyecto AQ-T1 desarrollado utilizando **SvelteKit**, un framework moderno para construir aplicaciones web rápidas y escalables. En caso de que se quiera consultar el backend del proyecto, es posible consultarlo por medio del siguiente enlace: https://github.com/andres345gm/AQ-T1-back

### Carpetas y Archivos Principales

- **src/routes/**: Contiene las rutas de la aplicación, incluyendo componentes y páginas.
  - **components/**: Componentes compartidos entre distintas partes de la aplicación, como `Header.svelte` y `Counter.svelte`.
  - **compra/**: Ruta relacionada con el proceso de compra.
  - **registro/**: Ruta relacionada con el registro de usuarios.
  - **user-pokes/**: Ruta específica para interactuar con una funcionalidad de Pokémon.
  - **+layout.svelte**: El layout principal que envuelve las páginas.
  - **+page.svelte**: Página principal de la aplicación.
  - **+page.ts**: Script de TypeScript asociado a la página principal.

- **app.html**: Archivo HTML principal para la estructura base de la aplicación.
- **app.css**: Hoja de estilos global de la aplicación.
- **Dockerfile**: Configuración para contenerizar la aplicación.
- **docker-compose.yml**: Configuración para levantar la aplicación y otros servicios relacionados usando Docker.
- **package.json**: Contiene las dependencias del proyecto y los scripts de NPM para ejecutar el proyecto.
- **tsconfig.json**: Configuración de TypeScript para el proyecto.
- **vite.config.ts**: Configuración de Vite, el bundler de la aplicación.

## Requisitos

Antes de iniciar, asegúrate de tener instalado:

- **Docker**

## Instalación

Sigue estos pasos para instalar las dependencias del proyecto:

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd AQ-T1-FRONT/my-app

2. Ejecución con Docker:
    ```bash
    docker-compose up --build
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## Login de Prueba
Para realizar el login en la aplicación, puedes utilizar las siguientes credenciales:
* **Usuario**: `AshKetchum`
* **Contraseña**: `12345`
    


