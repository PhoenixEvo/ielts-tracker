# 🎓 IELTS 7.5 Personal Study Tracker (Band 6.0 → 7.5)

A modern, mobile-responsive, persistent personal IELTS study application built with **React**, **Vite**, **TailwindCSS**, **Recharts**, and a dual-storage engine (**Firebase Firestore** + **LocalStorage** fallback).

---

## 🌟 Key Features

1. **Countdown & Timeline Dashboard**: Live exam countdown timer to **March 31, 2027** with a visual 4-phase prep roadmap (Aug 2026 – Mar 2027).
2. **Skill-Specific Weakness Focus**: Automated gap analysis identifying priority skills furthest from target (Speaking 5.5, Writing/Reading 6.0) with customized study recommendations.
3. **Official IELTS Overall Calculator & Chart**: Auto-calculates official rounded Overall Band score using official IELTS rounding rules. Interactive multi-line chart using **Recharts** with a **Target 7.5 Line**.
4. **Spaced Repetition (SRS) Flashcards**: Interactive SM-2 spaced repetition algorithm for vocabulary, collocations, idioms, and listening/reading error logs.
5. **Band 7.5 Templates & Checklists**: Structure templates and self-review checklists for Writing Task 1, Task 2, and Speaking Parts 1-3.
6. **Study Streak & Task Checklist**: Interactive daily task checklist per study day with custom notes, weekly progress percentage, and streak counter.
7. **Dual Data Persistence**: Real-time cloud sync with Firebase Firestore + Anonymous Auth, with instant fallback to `localStorage` when offline or unconfigured.
8. **JSON Export & Import**: Backup or transfer all data across devices with a single click.
9. **Dark Mode & Responsive UI**: Theme toggle with dark mode support.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ☁️ Firebase Cloud Setup (Optional)

If you want cross-device cloud synchronization via Firebase:

1. Create a free project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Firestore Database** in test mode or with security rules:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /ielts_trackers/{document} {
         allow read, write: if true; // Or restrict to request.auth != null
       }
     }
   }
   ```
3. Enable **Authentication** -> **Anonymous** provider.
4. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
5. Fill in your Firebase API Keys in `.env.local`:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

*Note: If `.env.local` is omitted, the app operates 100% locally in `localStorage` mode without errors.*

---

## 📦 GitHub Pages Deployment (Free Hosting)

The project is configured with relative base pathing (`base: './'` in `vite.config.js`) for static deployment.

### Option 1: Manual Static Build
```bash
npm run build
```
This generates a static bundle in the `dist/` directory, which can be uploaded directly to GitHub Pages, Netlify, Vercel, or any static web host.

### Option 2: Deploy with `gh-pages` CLI
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
3. Run deploy:
   ```bash
   npm run deploy
   ```

---

## 💾 Backup & Data Restoration

- Click the **Backup** button in the top navbar.
- Click **Tải Xuất File Backup (.JSON)** to download your complete data.
- To restore on a new browser or device, click **Tải Nhập File Backup JSON (.JSON)** and select your file.
