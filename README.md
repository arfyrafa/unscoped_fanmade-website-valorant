# UNSCOPED // Tactical VALORANT Fan Showcase

[![Astro 5](https://img.shields.io/badge/Astro-5.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla_HUD_Design-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![i18n](https://img.shields.io/badge/i18n-ID_%2F_EN_Bilingual-00E5FF?style=for-the-badge)](https://github.com/arfyrafa/unscoped_fanmade-website-valorant)

> **UNSCOPED** adalah showcase web interaktif bertema Tactical HUD untuk para penggemar VALORANT. Menampilkan database lengkap 29 Agent, galeri persenjataan beserta simulator perbandingan intel head-to-head, peta pertempuran kompetitif, feed berita terkini, dan transmisi pendaftaran komunitas dwi-bahasa (ID / EN).

---

## ⚡ Fitur Utama

- **🎮 29 Agent Roster Database**: Eksplorasi seluruh agent dengan filter per Role (Duelist, Initiator, Controller, Sentinel), kartu interaktif dengan hover preview deskripsi taktis, serta halaman profil detail lengkap dengan tab kemampuan Q/E/C/X yang responsif.
- **🔫 Tactical Arsenal & Head-to-Head Comparison Studio**: Direktori lengkap 20 persenjataan dengan anatomi damage per peluru (Head, Body, Leg), spesifikasi operasional, serta simulator perbandingan metrik head-to-head interaktif dengan indikator keunggulan visual.
- **🗺️ Peta Pertempuran Kompetitif**: Showcase 13 arena pertempuran lengkap dengan visual satelit dan analisis tata letak medan laga.
- **🌐 Sistem Dwi-Bahasa Instan (i18n ID / EN)**: Dukungan bilingual penuh (Bahasa Indonesia & English) tanpa reload halaman, mencakup seluruh antarmuka, deskripsi hover, modal inspeksi, hingga pesan validasi formulir.
- **📰 News & Intel Feed**: Pusat informasi update game, patch notes, esports, dan bundle skin yang dilengkapi modal lightbox galeri foto interaktif.
- **📡 Terminal Pendaftaran Transmisi Komunitas**: Formulir interaktif dengan validasi format client-side, visualisasi status pengiriman real-time, dan kartu konfirmasi transmisi operatif.
- **🎨 Pure Tactical HUD Design System**: Dibangun murni menggunakan Vanilla CSS Variables, scanlines keyframes, polygon clip-paths, glassmorphism, dan aksen neon tanpa ketergantungan framework CSS pihak ketiga.

---

## 🛠️ Tech Stack & Arsitektur

| Lapisan | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Framework** | [Astro 5](https://astro.build/) | Static Site Generation (SSG) dengan Islands Architecture dan View Transitions API bawaan |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Skema data statis bertipe ketat untuk agen, senjata, peta, berita, dan modul i18n |
| **Styling** | Vanilla CSS3 | Custom HUD design system, CSS Custom Properties, layout CSS Grid & Flexbox |
| **Icons & Media** | AVIF / WebP Optimized | Kompresi aset gambar modern otomatis untuk performa skor Lighthouse optimal |
| **State & i18n** | Client JS & `localStorage` | Sistem reaktif tanpa framework berat untuk perpindahan bahasa dan interaktivitas modal |

---

## 📁 Struktur Direktori

```
unscoped/
├── public/                # Favicon, robots.txt, dan manifest publik
├── src/
│   ├── assets/            # Aset grafis teroptimasi (agents, maps, weapons, news)
│   ├── components/        # Komponen UI modular (Nav, Footer, links)
│   ├── data/              # Sumber data TypeScript (agents.ts, weapons.ts, maps.ts, news.ts)
│   ├── layouts/           # Template layout induk (Base.astro)
│   ├── lib/               # Utility modules (i18n.ts, filter.ts, img.ts)
│   ├── pages/             # File-based routing Astro
│   │   ├── index.astro            # Halaman Beranda (Hero, Roster preview, Trailer)
│   │   ├── gameplay.astro         # Mode permainan, Alur Ronde, Arsenal & Peta
│   │   ├── play.astro             # Persyaratan sistem, Panduan, Transmisi formulir
│   │   ├── about.astro            # Dossier proyek, Spesifikasi arsitektur teknologi
│   │   ├── 404.astro              # Halaman error darurat bertema Sector Breach
│   │   ├── agents/
│   │   │   ├── index.astro        # Roster lengkap 29 Agent & pencarian instan
│   │   │   └── [slug].astro       # Halaman profil spesifik & tab kemampuan
│   │   └── news/
│   │       ├── index.astro        # Arsip berita & filter kategori
│   │       └── [slug].astro       # Detail artikel & galeri foto lightbox
│   └── styles/            # Tactical stylesheet modular (style.css, reset, HUD theme)
├── astro.config.mjs       # Konfigurasi Astro
└── package.json           # Dependensi dan script build
```

---

## 🚀 Memulai (Local Development)

### Prasyarat
- [Node.js](https://nodejs.org/) v18.17.1 atau lebih tinggi (disarankan Node.js v20+)
- npm, pnpm, atau yarn

### Instalasi & Menjalankan

1. **Clone repositori**:
   ```bash
   git clone https://github.com/arfyrafa/unscoped_fanmade-website-valorant.git
   cd unscoped_fanmade-website-valorant
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Aplikasi dapat diakses di browser melalui `http://localhost:4321`.

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```
   Output statis siap saji akan dibuat di direktori `dist/`.

5. **Pratinjau hasil build lokal**:
   ```bash
   npm run preview
   ```

---

## ⚖️ Disclaimer & Legal

**UNSCOPED** adalah proyek web buatan penggemar non-komersial yang dibuat untuk tujuan akademik dan kompetisi. 

Seluruh aset visual, karakter, senjata, peta, dan lore VALORANT merupakan hak cipta dan merek dagang milik **Riot Games, Inc.** Proyek ini dibuat dengan mematuhi kebijakan [Riot Games "Legal Jibber Jabber"](https://www.riotgames.com/en/legal). Proyek ini tidak didukung, disponsori, atau berafiliasi secara resmi dengan Riot Games.
