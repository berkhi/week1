/*
  ============================================================
  MODÜL: matematik.mjs
  ============================================================
  Bir "modül" = kendi içinde iş gören, parçalarını DIŞA AÇAN bir dosya.
  "export" dediğin şeyleri başka dosyalar "import" edip kullanabilir.
  Açmadığın (export'lamadığın) şeyler bu dosyaya ÖZELdir, dışarı sızmaz.

  Not: Bu dosyaların uzantısı .mjs — bu, Node'a "ben ES modülüyüm,
  import/export kullanıyorum" der. (Projelerde bunu package.json'daki
  "type": "module" ayarı hallediyor; React/Vite'ta da otomatik açık.)

  İki tür export var:

  1) NAMED export (isimli): bir dosyadan İSTEDİĞİN KADAR olabilir.
     İçe alırken { süslü parantez } ve AYNI ismi kullanırsın.
*/
export const PI = 3.14159;

export function topla(a, b) {
  return a + b;
}

export const carp = (a, b) => a * b;

// Bu dışa açılmadı → sadece bu dosyanın içinde kullanılabilir (gizli).
const gizliNot = "bunu kimse göremez";

/*
  2) DEFAULT export (varsayılan): bir dosyada EN FAZLA BİR tane olur.
     Dosyanın "ana ürünü" gibidir. İçe alırken süslü parantez YOK ve
     istediğin ismi verebilirsin.
*/
export default function selamla(ad) {
  return `Merhaba ${ad}! (matematik modülünden selam)`;
}
