# Overlay Pattern: Dark Image, Bright Text

Gunakan pattern ini saat ingin gambar tetap gelap tapi teks tidak ikut gelap.

## Kenapa bukan opacity di parent?
Jika kamu pakai `opacity` di container parent, semua anak ikut redup termasuk teks.

## Pattern yang benar
1. Buat container `relative` dengan background image.
2. Tambahkan layer overlay gelap `absolute inset-0 bg-black/50`.
3. Letakkan teks di layer `relative z-10`.

Contoh:

```html
<div class="relative h-80 bg-[url('/image.png')] bg-cover bg-center">
  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative z-10 flex h-full items-end p-6 text-white">
    <div class="space-y-2">
      <h2 class="text-3xl font-bold">Judul</h2>
      <p>Deskripsi tetap terang.</p>
    </div>
  </div>
</div>
```

## Tips cepat
- Overlay ringan: `bg-black/35`
- Overlay medium: `bg-black/50`
- Overlay kuat: `bg-black/65`
- Tambah keterbacaan: `drop-shadow` atau `font-semibold`

## Implementasi di project ini
- Dipakai di `src/components/GameProjectSection.js` untuk slide project game.
