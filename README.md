# Pokédex PWA con React

## Descripción
Esta aplicación es una **Progressive Web App (PWA)** desarrollada con **React y Vite** que permite consultar información de Pokémon usando la API pública **PokeAPI**.  
La app está diseñada para funcionar incluso sin conexión, mostrando la última búsqueda realizada gracias al **modo offline**.

El objetivo del proyecto es demostrar un flujo completo de desarrollo: **ideación → implementación → publicación**, integrando consumo de APIs reales, desarrollo frontend moderno y despliegue en un repositorio público en GitHub.

---

## Tecnologías utilizadas
- **React**: para el desarrollo de la interfaz y componentes.
- **Vite**: como entorno de desarrollo y construcción del proyecto.
- **JavaScript (ES6+)**: para la lógica de la aplicación y consumo de la API.
- **PWA (Progressive Web App)**:
  - **Service Worker**: para habilitar el funcionamiento offline.
  - **Manifest.json**: para permitir la instalación de la aplicación.
- **API pública**: PokeAPI (https://pokeapi.co/), sin necesidad de autenticación.

---

## Funcionalidades
- Búsqueda de Pokémon por nombre.
- Visualización de imagen y estadísticas (HP, Ataque y Defensa).
- Almacenamiento de la última búsqueda para su uso sin conexión.
- Instalación como aplicación (PWA).
- Funcionamiento offline básico mediante datos cacheados.

---

## Funcionamiento del modo offline

La aplicación utiliza un **Service Worker** para almacenar en caché los archivos principales (HTML, CSS y JavaScript) y los datos del último Pokémon consultado.

El proceso funciona de la siguiente manera:

1. Cuando el usuario realiza una búsqueda con conexión a internet, los datos obtenidos desde la API se guardan localmente en el navegador.
2. Si el usuario pierde la conexión:
   - La aplicación sigue cargando gracias a los archivos almacenados en caché.
   - Se muestra automáticamente el **último Pokémon buscado**.
3. Si no existe una búsqueda previa y no hay conexión a internet, se muestra un mensaje indicando que no hay datos disponibles en modo offline.

Este comportamiento cumple con el requisito de **modo offline básico** solicitado en la actividad.

---

## Instalación y ejecución del proyecto

### 1. Clonar el repositorio
  ```bash
git clone https://github.com/tuusuario/PWA-Pokedex.git
  ```
---

### 2. Entrar a la carpeta del proyecto
```bash
cd PWA-Pokedex
 ```

### 3. Instalar Dependencias
```bash
npm install
 ```

### 4. Ejecuitar en modo desarrollador
```bash
npm run dev
 ```

### 5. La aplicación se abrirá en el navegador en una dirección similar a:
```bash
http://localhost:5173
 ```


## Instalación de la aplicación (PWA)
1. Abrir la aplicación en el navegador.
2. En la barra de direcciones aparecerá un ícono de **instalar aplicación**.
3. Hacer clic en **Instalar**.
4. La aplicación se agregará al sistema como si fuera una aplicación nativa.

### Una vez instalada:
- La aplicación se abre en **modo standalone** (sin barra del navegador).
- Puede ejecutarse **sin conexión a internet**.
- Se comporta como una aplicación de **escritorio normal**.






