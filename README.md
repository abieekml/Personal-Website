🌐 Personal Portfolio Website - Abi Kamal

Selamat datang ke repositori kod bagi laman web portfolio peribadi saya. Laman web ini dibina menggunakan teknologi web moden dengan reka bentuk berasaskan struktur **Bento Grid Layout** yang responsif, minimalis, dan estetik.

🚀 **Live Website:** [https://abikamal.netlify.app/]

---

## 👤 Mengenai Saya

Saya merupakan seorang mahasiswa jurusan **Sistem Informasi** di Jakarta yang mempunyai minat mendalam dalam pembangunan web terutamanya dalam komponen *Frontend Development* serta rekaan antaramuka (UI/UX). Laman web ini berfungsi sebagai platform digital untuk memaparkan kepakaran, senarai projek yang telah disiapkan, serta cara untuk menghubungi saya untuk sebarang kolaborasi.

---

## 🛠️ Stack Teknologi

Laman web ini dibangunkan menggunakan beberapa teknologi utama berikut:

- **Framework & Library:** React (Vite)
- **Bahasa Pengaturcaraan:** TypeScript, JavaScript (ES6+)
- **Penggayaan (Styling):** Tailwind CSS v4 (menggunakan `@import "tailwindcss"` dan konfigurasi `@theme`)
- **Animasi:** Motion (Framer Motion)
- **Ikonografi:** Lucide React
- **Alatan Pembangunan:** Git, GitHub, VS Code

---

## 📁 Struktur Folder Utama
```text
├── src/
│   ├── components/
│   │   ├── About.tsx      # Seksyen profail ringkas & maklumat akademik
│   │   ├── Contact.tsx    # Borang pautan kolaborasi & media sosial
│   │   ├── Footer.tsx     # Hak cipta fail footer
│   │   ├── Hero.tsx       # Bahagian pengenalan utama (Header intro)
│   │   ├── Navbar.tsx     # Menu navigasi responsif dengan kesan kaca (glassmorphism)
│   │   ├── Projects.tsx   # Grid projek beserta overlay paparan Case Study
│   │   └── Skills.tsx     # Kad kepakaran teknologi (Expertise grid)
│   ├── App.tsx            # Komponen induk utama aplikasi
│   ├── index.css          # Tetapan font custom (Inter, Space Grotesk) & konfigurasi Tailwind
│   └── main.tsx           # Titik permulaan render aplikasi DOM
├── index.html             # Struktur asas HTML5
├── package.json           # Senarai dependencies projek
└── vite.config.ts         # Konfigurasi pembina aplikasi Vite