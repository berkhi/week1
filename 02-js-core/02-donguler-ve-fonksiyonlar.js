/*
  ============================================================
  DERS 02 — JAVASCRIPT ÇEKİRDEĞİ  ·  Bölüm 2/3
  Döngüler · Fonksiyonlar · Arrow fonksiyonlar
  ============================================================

  Çalıştır:
      node 02-js-core/02-donguler-ve-fonksiyonlar.js
*/

console.log("=== 1) DÖNGÜLER ===");

/*
  DÖNGÜ = aynı işi TEKRAR TEKRAR yapmanın yolu.
  "1'den 5'e kadar yaz" demek için 5 satır console.log yazmak yerine
  döngü kurarız.

  --- for döngüsü --- (en sık kullanılan)
  Üç parça vardır, noktalı virgülle ayrılır:
      for (başlangıç; şart; her adımda) { ... }

      let i = 1   → sayaç 1'den başlasın
      i <= 5      → i, 5'ten küçük/eşit OLDUĞU SÜRECE devam et
      i++         → her turda i'yi 1 artır  (i = i + 1 demek)
*/
for (let i = 1; i <= 5; i++) {
  console.log("for turu, i =", i);
}

/*
  --- while döngüsü ---
  "şart doğru olduğu sürece tekrarla". Kaç kere döneceği baştan
  belli değilse kullanışlı.
*/
let sayac = 3;
while (sayac > 0) {
  console.log("while: kalan", sayac);
  sayac--;                 // her turda 1 azalt (yoksa SONSUZ döngü olur!)
}
console.log("Ateş! 🚀");

/*
  --- for...of ---
  Bir LİSTE (dizi) üzerinde tek tek gezmenin en temiz yolu.
  (Dizileri Bölüm 3'te detaylı göreceğiz; burada tadımlık.)
*/
const meyveler = ["elma", "armut", "muz"];
for (const meyve of meyveler) {
  console.log("Meyve:", meyve);
}


console.log("\n=== 2) FONKSİYONLAR ===");

/*
  FONKSİYON = bir işi yapan, isimlendirilmiş, YENİDEN KULLANILABİLİR kod parçası.
  Bir kez yaz, defalarca "çağır".

  Yapı:
      function isim(parametreler) {
        ...işlem...
        return sonuç;        // değeri geri verir
      }

  - parametre → fonksiyona giren bilgi (girdi)
  - return    → fonksiyondan çıkan bilgi (çıktı)
*/

function selamla(ad) {
  return "Merhaba, " + ad + "!";
}

// Fonksiyonu "çağırmak" = onu çalıştırmak. Sonucu bir değişkene alabiliriz.
const mesaj = selamla("Berk");
console.log(mesaj);                 // Merhaba, Berk!
console.log(selamla("Ayşe"));       // Merhaba, Ayşe!  (aynı fonksiyon, farklı girdi)

// Birden fazla parametre:
function topla(a, b) {
  return a + b;
}
console.log("topla(3, 4) =", topla(3, 4));   // 7

/*
  return OLMAYAN fonksiyon da olur: sadece bir iş yapar (örn. ekrana yazar),
  geriye değer döndürmez. Böyle bir fonksiyonun sonucu "undefined" olur.
*/
function duyuruYap(metin) {
  console.log("📢", metin);
  // return yok
}
duyuruYap("Ders devam ediyor");


console.log("\n=== 3) ARROW (ok) FONKSİYONLAR ===");

/*
  Arrow fonksiyon = fonksiyon yazmanın daha KISA yolu.
  React'te ÇOK göreceğin için alışmak önemli.

  Normal:
      function topla(a, b) { return a + b; }

  Arrow karşılığı:
      const topla = (a, b) => { return a + b; };

  Tek satırlık return ise süslü parantez ve "return" bile gerekmez:
      const topla = (a, b) => a + b;     // otomatik return eder
*/

const kareAl = (sayi) => sayi * sayi;   // tek parametre, tek satır
console.log("kareAl(5) =", kareAl(5));  // 25

const carp = (a, b) => a * b;
console.log("carp(6, 7) =", carp(6, 7)); // 42

// Parametresiz arrow → boş parantez:
const selamVer = () => "Selam!";
console.log(selamVer());

/*
  Hepsini birleştiren mini örnek:
  Bir sayının çift mi tek mi olduğunu söyleyen fonksiyon.
  (Bölüm 1'deki % ve ternary'yi hatırla.)
*/
const ciftMiTekMi = (n) => (n % 2 === 0 ? "çift" : "tek");

for (let i = 1; i <= 5; i++) {
  console.log(i, "→", ciftMiTekMi(i));
}

console.log("\n✅ Bölüm 2 bitti.");
