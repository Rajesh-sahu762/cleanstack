# CleanStack

Clean and setup React + Vite projects in seconds.

CleanStack helps developers instantly transform a fresh React + Vite project into a clean, production-ready structure with modern best practices.

---

## Features

### 🧹 Clean React Boilerplate

Removes unnecessary starter code and replaces it with a clean foundation.

### 🎨 Tailwind CSS Setup

Automatically installs and configures Tailwind CSS for Vite projects.

### 🛣 React Router Setup

Installs React Router and prepares your project for scalable routing.

### 📁 Production Folder Structure

Creates commonly used folders:

```text
src/
├── assets
├── components
├── hooks
├── layouts
├── pages
├── routes
└── utils
```

### 🔗 Path Aliases

Configures `@` alias support.

Example:

```js
import Button from '@/components/Button';
```

### ✨ Prettier Configuration

Installs and configures Prettier with sensible defaults.

---

## Supported Projects

Currently supported:

* React
* React + Vite
* React + TypeScript + Vite

---

## VS Code Extension Usage

1. Open a React + Vite project.
2. Press:

```text
Ctrl + Shift + P
```

3. Run:

```text
CleanStack: Start
```

4. CleanStack will automatically:

* Clean boilerplate
* Setup Tailwind CSS
* Install React Router
* Create production folders
* Configure aliases
* Configure Prettier

---

## CLI Usage

Install globally:

```bash
npm install -g cleanstack
```

Run:

```bash
cleanstack setup
```

---

## Example Workflow

Fresh Vite Project:

```bash
npm create vite@latest my-app
```

Navigate to project:

```bash
cd my-app
```

Run CleanStack:

```bash
cleanstack setup
```

Your project is now production-ready.

---

## Requirements

* Node.js 18+
* npm
* React + Vite project

---

## Roadmap

Future support planned:

* Next.js
* Vue.js
* Angular
* Custom templates
* Team presets

---

## Author

Rajesh Sahu

Frontend Developer & Creator of CleanStack

GitHub:
https://github.com/Rajesh-sahu762

LinkedIn:
https://www.linkedin.com/

---

## License

MIT License
