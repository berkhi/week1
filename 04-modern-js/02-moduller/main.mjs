/*
  ============================================================
  ANA DOSYA: main.mjs  (modülleri BİRLEŞTİRİP kullanır)
  ============================================================

  Çalıştır:
      node 04-modern-js/02-moduller/main.mjs

  "import" = başka bir modülün dışa açtığı (export) şeyleri içeri al.
  Yol (path) "./" ile başlar → "bu klasörden" demek. Uzantı (.mjs) yazılır.
*/

// DEFAULT export'u istediğimiz isimle alırız (süslü parantez YOK).
// NAMED export'ları { süslü parantez } içinde, AYNI isimle alırız.
import selamla, { PI, topla, carp } from "./matematik.mjs";

// Başka bir modülden veriyi alıyoruz:
import { urunler } from "./veri.mjs";

console.log("=== matematik.mjs'den gelenler ===");
console.log("selamla('Berk') →", selamla("Berk"));   // default export
console.log("PI →", PI);                               // named
console.log("topla(3, 4) →", topla(3, 4));            // named
console.log("carp(6, 7) →", carp(6, 7));              // named

console.log("\n=== veri.mjs'den gelen ürünler ===");
// Ders 03'ten map + reduce ile küçük bir iş yapalım:
const isimler = urunler.map((u) => u.ad);
const toplam = urunler.reduce((t, u) => t + u.fiyat, 0);

console.log("Ürünler:", isimler.join(", "));
console.log("Toplam fiyat:", toplam, "TL");

console.log("\n✅ Modüller: kodu parçalara böl, import/export ile birleştir.");
