# Grok Bot Mastery — Landing Page

Landing page satu halaman untuk kelas **Grok Bot Mastery** oleh **KomuniTech**, ditujukan untuk anggota komunitas OpenClaw Indonesia. Bahasa: Indonesia.

Stack: HTML, CSS, JavaScript, dengan [Vite](https://vitejs.dev/) hanya sebagai dev server (tanpa framework).

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka [http://127.0.0.1:43123](http://127.0.0.1:43123).

Tanpa Node.js, Anda bisa membuka `index.html` langsung di browser, tetapi modul ES (`import`) mungkin tidak berjalan dari `file://`. Gunakan Vite atau server statis sederhana:

```bash
npx serve -l 43123 .
```

## Build statis (opsional)

```bash
npm run build
npm run preview
```

Output ada di folder `dist/`.

## Mengedit konten & placeholder

| Apa | Di mana |
| --- | --- |
| **Logo** | Ganti file `assets/logo.svg` (atau PNG di path yang sama). Di `index.html`, atribut `src` pada `.brand-logo` menunjuk ke `/assets/logo.svg`. Aktifkan gambar dengan `logo.useLogoImage: true` di `js/config.js` — wordmark teks disembunyikan otomatis. |
| **Tanggal, durasi, harga** | `js/config.js` → `classFormat.date`, `duration`, `price`. Nilai default: `[Tanggal]`, `[Durasi]`, `[Harga]`. Anda juga bisa mengedit langsung di `index.html` (elemen `.placeholder` di bagian Format kelas). |
| **Tautan pendaftaran** | `js/config.js` → `registrationUrl` (tombol di `#daftar` dan bisa diselaraskan dengan hero). Alternatif: atribut `href` pada `#register-link` di `index.html`. |
| **Gaya & warna** | `css/styles.css` (hitam, putih, biru `#2563eb`). |
| **Copy & FAQ** | `index.html`. |

## Struktur file

```
index.html          Halaman utama
css/styles.css      Gaya mobile-first
js/config.js        Placeholder terpusat
js/main.js          Terapkan config + tahun footer
assets/logo.svg     Placeholder logo (ganti file ini)
vite.config.js      Konfigurasi Vite
```

## Lisensi

Konten halaman milik KomuniTech. Font Inter via Google Fonts.
