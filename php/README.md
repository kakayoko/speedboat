# rajaampatspeedboat.com — PHP / HTML / CSS Source Package

Struktur file PHP siap upload untuk hosting PHP 8.1+ (Apache/Nginx):

- `index.php` — Template utama HTML5 dwibahasa (`?lang=id` / `?lang=en`) dengan proteksi XSS `htmlspecialchars()`
- `includes/translations.php` — Kamus konten ID/EN, konfigurasi 5 foto armada, dan dua kontak WhatsApp resmi (`0823-9858-1997` & `+62 823-9739-2047`)
- `assets/css/styles.css` — Stylesheet CSS terpisah dengan desain responsif, 60-30-10 color palette, dan tipografi tabular
- `assets/js/main.js` — Interaksi galeri 5 foto dan generator tautan `wa.me` otomatis untuk formulir rute kustom

> Catatan: Saat mengunggah ke root web hosting (`public_html`), pastikan folder foto kapal disalin ke jalur gambar yang sesuai atau sesuaikan `$fleet_photos` di `includes/translations.php`.
