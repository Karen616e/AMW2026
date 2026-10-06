# Pagina para The Mexican Conference on Cybersecurity Research and Applications
## FI - UNAM - Departamento de Computación  
## Descripción General

Bienvenido al directorio `amw2026`. Esta carpeta contiene el código fuente de la página web oficial de **The Mexican Conference on Cybersecurity Research and Applications (MCyRA 2026)**. 

El proyecto fue realizado en **React** utilizando **Vite** como herramienta de desarrollo moderno, 

## Herramientas Utilizadas

- React
- Vite
- Node.js
- npm
- HTML5
- CSS3
- JavaScript (ES6+)

---

## Requisitos del Entorno (LINUX)
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
## Requisitos del Entorno (WINDOWS)

Para ejecutar el proyecto es necesario contar con:

- **Node.js** (versión LTS recomendada) — *Descargar el instalador `.msi` desde [nodejs.org](https://nodejs.org/)*
- **Git** — *Descargar desde [git-scm.com](https://git-scm.com/)*

Verificar instalación en **PowerShell**, **CMD** o **Git Bash**:

```bash
node -v
npm -v
git --version
```

---

## Clonación del Repositorio

Abre la terminal en la carpeta donde deseas guardar el proyecto y ejecuta:

```bash
git clone https://github.com/Karen616e/AMW2026.git
cd AMW2026
```

---

## Ejecución en Entorno Local (Desarrollo)

### 1. Acceder al proyecto React

```bash
cd AMW2026
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

```text
http://localhost:5173
```

---

## Visualización en Dispositivos Móviles

Para pruebas responsivas en teléfonos o tabletas:

1. Asegúrate de que el equipo y el dispositivo móvil estén conectados a la **misma red Wi-Fi**.
2. Verifica que el perfil de tu red en Windows esté configurado como **Privado** (en *Configuración > Red e Internet*) para evitar bloqueos del Firewall.
3. Ejecuta:

```bash
npm run dev -- --host
```

4. Si aparece una alerta del **Firewall de Windows**, selecciona **"Permitir acceso"**.
5. Accede desde el navegador del dispositivo móvil a la dirección IP local mostrada en la terminal (ejemplo: `http://192.168.X.X:5173`).

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
