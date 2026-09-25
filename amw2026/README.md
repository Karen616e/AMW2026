# Pagina para The Mexican Conference on Cybersecurity Research and Applications
## FI - UNAM - Departamento de Computación  
## Descripción General

Bienvenido al directorio `amw2026`. Esta carpeta contiene el código fuente de la página web oficial de **The Mexican Conference on Cybersecurity Research and Applications (MCyRA 2026)**. 

MCyRA 2026 - UNAM es un foro principal para la colaboración en el panorama de la seguridad digital (*the premier forum for collaboration in the digital security landscape*), reuniendo a investigadores, profesionales y estudiantes para discutir los últimos avances y desafíos en ciberseguridad por parte de la UNAM.

El proyecto fue realizado en **React** utilizando **Vite** como herramienta de desarrollo moderno, 

> ⚠️ IMPORTANTE  
> La versión oficial y activa del sistema se encuentra dentro de la carpeta:
>
> ```
> amw2026
> ```
>
---

## Tecnologías Utilizadas

- React
- Vite
- Node.js
- npm
- HTML5
- CSS3
- JavaScript (ES6+)

---

## Requisitos del Entorno

Para ejecutar el proyecto es necesario contar con:

- Node.js (versión LTS recomendada)
- npm

Verificar instalación:

```bash
node -v
npm -v
````

---

## Clonación del Repositorio

```bash
git clone <https://github.com/Karen616e/AMW2026.git>
cd amw2026
```

---

## Ejecución en Entorno Local (Desarrollo)

### 1. Acceder al proyecto React

```bash
cd amw2026
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

Por defecto, Vite ejecutará la aplicación en:

```
http://localhost:5173
```

---

## Visualización en Dispositivos Móviles

Para pruebas responsivas en teléfonos o tabletas:

1. Asegurar que el dispositivo esté conectado a la misma red que el equipo de desarrollo.
2. Ejecutar:

```bash
npm run dev -- --host
```

3. Acceder desde el navegador móvil a la dirección IP local mostrada en la terminal.

---

## Estructura del Proyecto
---

```text
amw2026/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/          
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```
---

## Contacto y Soporte

Si tienes dudas sobre el código, la configuración o la propia conferencia MCyRA 2026, por favor abre un *Issue* en este repositorio para que el equipo de desarrollo pueda ayudarte.