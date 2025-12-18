# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Spotify Clone – Frontend

A Spotify-inspired frontend application built using React.  
This project replicates the core UI and player functionality of Spotify, using mock data for learning and portfolio purposes.

---

## 🚀 Features

- Home page with album listing
- Album-wise song listing
- Dynamic routing using React Router
- Fully functional audio player
  - Play / Pause
  - Next / Previous track
  - Seek bar
- Dynamic background based on album
- Responsive layout (desktop-first)
- Global player state using Context API

---

## 🛠️ Tech Stack

- React (Vite)
- React Router
- Context API
- Tailwind CSS
- HTML Audio API

---

## 📁 Data Source

All songs, albums, and metadata are sourced from a mock data file: src/assets/assets.js

This project does **not** use a backend or external APIs and is intended purely for learning and demonstration.

---

## 🧠 What I Learned

- Managing global audio state using React Context
- Working with refs for media control
- Route-based UI rendering
- Component-based UI architecture
- Dynamic styling based on route state

---

## ⚠️ Disclaimer

This project is a frontend clone created for educational purposes only.  
Spotify is a registered trademark of Spotify AB.

---

## 📸 Screenshots

<!-- Add screenshots here -->

---

## 📦 Setup Instructions

```bash
git clone https://github.com/<your-username>/spotify-clone-frontend.git
cd spotify-clone-frontend
npm install
npm run dev


This README is:
- Honest
- Clean
- Recruiter-safe
- Portfolio-appropriate.

---

```
