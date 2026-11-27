# Portfolio — Muhammad Fakhri Umam

Website portofolio (Astro + Tailwind CSS), gaya minimalis editorial.

## Menjalankan
```bash
npm install
npm run dev       # buka http://localhost:4321
npm run build     # hasil siap upload ada di folder dist/
```

## Mengubah isi website
Semua teks ada di **`src/data/profile.ts`**. Cukup edit file itu saja.

| Yang mau diubah | Caranya |
|---|---|
| Foto profil | Foto siap pakai ada di `public/images/profile.jpg` (rasio 4:5, ±800×1000). File asli/mentah simpan di `design/photos/` (tidak ikut dipublikasikan) |
| LinkedIn / GitHub | Isi `contact.linkedin` dan `contact.github` dengan URL lengkap |
| CV (PDF, format ATS) | Edit sumbernya di `design/cv/cv.html`, lalu ekspor ulang ke `public/cv.pdf`:<br>`"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --no-pdf-header-footer --print-to-pdf=public\cv.pdf design\cv\cv.html` |
| Galeri | Simpan foto di `public/gallery/`, lalu isi `src: '/gallery/nama-foto.jpg'` di array `gallery` |
| Formulir kontak | Daftar gratis di https://formspree.io, buat form, lalu salin ID-nya ke `formspreeId`. Jika belum diisi, form akan membuka aplikasi email pengunjung |

Tips foto: pakai JPG dengan lebar sekitar 1200px agar website tetap ringan.

## Deploy (gratis)
- **Netlify / Vercel:** import folder/repo ini; build command `npm run build`, output `dist`.
- Setelah dapat domain, ganti `site` di `astro.config.mjs`.
