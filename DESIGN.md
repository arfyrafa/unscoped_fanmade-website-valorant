# DESIGN.md — UNSCOPED (Valorant Fan Showcase)

> Panduan visual dan arah desain untuk proyek showcase UNSCOPED (Lomba Web Development 2026 IT FEST).
> Stack: Astro. Token warna ada di `src/styles/style.css`, tambahan di `src/styles/extra.css`.

## 1. Identitas & Arah Desain (Concept)

- **Tema**: **Tactical HUD (Heads-Up Display)**
- **Karakter**: Presisi, militeristik-futuristik, clean, tajam, dan responsif.
- **Inspirasi**: UI telemetri taktis, antarmuka in-game Valorant, dan sudut chamfered (*cut corners*).

---

## 2. Dials (Tingkat Gaya)

- **ENERGY: 2 (Balanced)**
  - Berkarakter kuat tanpa visual clutter. Fokus pada tipografi tajam, kontras tinggi, dan hierarki konten yang jelas.
- **RHYTHM: 2 (Consistent with Structural Variety)**
  - Kartu HUD terstruktur, tapi **tidak ada dua section berurutan yang memakai pola layout sama** (lihat §6).
- **MOTION: 2 (Functional Motion & Transitions)**
  - Micro-interaction saat hover, *scroll-reveal* (IntersectionObserver), dan *View Transitions* antar halaman.
  - Variasi dicapai lewat **layout**, bukan dengan menambah efek.
  - Mematuhi preferensi pengguna (`prefers-reduced-motion`).

---

## 3. Sistem Warna (Color Palette)

- **Background & Struktur**:
  - Ink (`#0A0E12`): Warna dasar background gelap pekat.
  - Ink Raised (`#121820`): Panel kontainer dan kartu elevasi.
  - Ink Line (`#232C35`): Garis batas (*border*) dan pemisah struktural tipis.
- **Tipografi**:
  - Paper (`#ECEAE4`): Teks utama, kontras tinggi (>14:1 terhadap ink).
  - Paper Dim (`#9AA3AC`): Teks sekunder dan meta info (±7.5:1 terhadap ink, lolos WCAG AA).
- **Aksen**:
  - Signal Red (`#E8433D`): Aksen aksi utama (tombol CTA, indikator aktif).
  - Cyan (`#5EEAD4`): Aksen telemetri, fokus keyboard (`:focus-visible`), dan hover indikator.
- **Warna Role** (hanya untuk badge/garis role, bukan background besar):
  - Duelist `#FF5473` · Initiator `#3BA2FF` · Controller `#16EFB1` · Sentinel `#AF75FF`

---

## 4. Tipografi

- **Display / Heading**: `Chakra Petch` (500, 600, 700)
- **Body / Konten**: `Inter` (400, 500, 600)
- **Skala**:
  - H1 halaman: `clamp(2.6rem, 6vw, 4.5rem)`
  - H2 section: `clamp(1.8rem, 3.5vw, 2.6rem)`
  - Judul di dalam kartu grid: `clamp(1.05rem, 1.4vw, 1.3rem)`, line-height 1.2. **Jangan** pakai ukuran H2 di dalam kartu.
- Panjang baris paragraf maksimal ±70 karakter (`max-width: 65ch`).

---

## 5. Bentuk & Komponen Khas

- **Chamfered Cut**: Tombol dan kartu menggunakan sudut terpotong diagonal khas HUD (`clip-path: polygon(...)`).
- **HUD Borders**: Aksen sudut `::before` / `::after` tipis pada panel kartu.
- **Status Dot**: Indikator status live berwarna hijau/merah berkedip pada badge header.

### 5.1 Agent Tile (halaman `/agents/`)
- Potret rasio **3:4**, `object-fit: cover`, `object-position: center 15%` (wajah tidak terpotong).
- Nama + badge role **di bawah** potret, bukan menimpa wajah.
- Deskripsi singkat tersembunyi; muncul saat `:hover` **dan** `:focus-visible` (overlay gradient dari bawah).
- Grid: 6 kolom ≥1280px, 4 kolom ≥900px, 3 kolom ≥600px, 2 kolom di HP.
- Garis bawah 2px warna role; saat hover tile naik 4px dan border berubah warna role.

### 5.2 Featured News (halaman `/news/`)
- Berita **pertama** di `news.ts` tampil sebagai kartu besar: gambar 16:9 di kiri (±60%), teks di kanan.
- Di HP (<900px) kembali menjadi kartu biasa bertumpuk.
- Sisa berita memakai grid 3 kolom biasa. Filter kategori tetap berlaku untuk semua kartu termasuk featured.

---

## 6. Layout & Ritme (anti-monoton)

- Pola yang tersedia: **grid kartu**, **split 2 kolom**, **featured + grid**, **full-bleed scene**, **stat strip**.
- Aturan: dua section yang bersebelahan **tidak boleh** memakai pola yang sama.
- Selang-seling background section: `ink` → `ink-raised` → `ink`.
- Hero Home: teks di kiri, visual agent di kanan (jangan biarkan separuh kanan kosong di desktop).

---

## 7. Aturan Gambar

| Konteks | Rasio | Fit | Catatan |
|---|---|---|---|
| Kartu berita | 16:9 | cover | full-bleed ke tepi kartu, border-bottom `ink-line` |
| Agent tile | 3:4 | cover | `object-position: center 15%` |
| Kartu role (Home) | 4:3 | cover | `object-position: center 20%` |
| Peta | 16:10 | cover | |
| Senjata | 16:9 | cover | gambar sumber berlatar krem, jadi harus full-bleed |
| Hero berita | 46vh | cover | overlay gradient gelap dari bawah |

- Selalu pakai `<Image>` dari `astro:assets` dengan `width` yang wajar (≤ 2× lebar tampil).
- Wrapper gambar wajib punya `aspect-ratio`; gambar di dalamnya `width:100%; height:100%`.
- Nama file: huruf kecil, tanpa spasi (hosting Linux case-sensitive).

---

## 8. Grid

- Semua grid pakai `repeat(n, minmax(0, 1fr))`, **bukan** `1fr` polos (gambar lebar akan mendorong kartu keluar layar).
- `.grid-3` = 3 kolom → 2 kolom (<900px) → 1 kolom (<600px).
- Uji: `document.documentElement.scrollWidth` harus sama dengan lebar viewport di setiap halaman.

---

## 9. Aksesibilitas (wajib)

- Setiap elemen interaktif punya `:focus-visible` cyan.
- Konten yang muncul saat hover juga muncul saat focus.
- Filter chip memakai `aria-pressed`; hasil filter diumumkan lewat `aria-live`.
- `prefers-reduced-motion`: matikan reveal, transisi, dan animasi hover transform.