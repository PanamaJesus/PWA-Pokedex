# Pokédex PWA con React

## Descripción
Esta aplicación es una **Progressive Web App (PWA)** desarrollada con **React y Vite** que permite consultar información de Pokémon usando la API pública **[PokeAPI](https://pokeapi.co/)**.  
La app está diseñada para funcionar incluso sin conexión, mostrando la última búsqueda realizada gracias al **modo offline**.

El objetivo del proyecto es demostrar un flujo completo de desarrollo: **ideación → implementación → publicación**, integrando consumo de APIs reales, frontend moderno y despliegue en GitHub.

---

## Tecnologías utilizadas
- **React**: para el desarrollo de la interfaz y componentes.  
- **Vite**: como bundler rápido para desarrollo y build.  
- **JavaScript (ES6+)**: lógica de consumo de la API y manejo de estado.  
- **PWA**:  
  - **Service Worker**: para habilitar funcionalidad offline.  
  - **Manifest.json**: para permitir instalación en dispositivos.  
- **API pública**: [PokeAPI](https://pokeapi.co/), sin necesidad de autenticación.

---

## Funcionalidades
- Buscar Pokémon por nombre.
- Mostrar **imagen y estadísticas** (HP, Ataque, Defensa).  
- Guardar la **última búsqueda** para permitir uso offline.  
- Instalación como aplicación nativa (Add to Home Screen).  
- Modo offline básico con datos cacheados.  

---

## Flujo de desarrollo
1. **Ideación**: Se eligió la API de Pokémon como fuente gratuita y estable.  
2. **Implementación**: Desarrollo de la PWA en React, incluyendo service worker y manifest, consumo de API, y manejo offline con `localStorage`.  
3. **Publicación**: Subida del proyecto a GitHub con documentación profesional, pruebas de instalación y funcionamiento offline.

---

## Instalación y ejecución
1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/pwa-pokedex-react.git
