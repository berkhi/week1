/*
  ============================================================
  DERS 02 — JAVASCRIPT ÇEKİRDEĞİ  ·  Bölüm 1/3
  Değişkenler · Tipler · Operatörler · Koşullar
  ============================================================

  Bu dosyayı ÇALIŞTIRMAK için terminalde şunu yaz:
      node 02-js-core/01-degiskenler-ve-tipler.js

  console.log(...) = ekrana (terminale) yazı bastırır.
  Programcının "ne oluyor?" diye bakmasını sağlayan en temel araç.
  Birden çok şeyi virgülle yazabilirsin: console.log("Yaş:", yas)
*/

console.log("=== 1) DEĞİŞKENLER ===");

/*
  DEĞİŞKEN = bir değeri sakladığımız "etiketli kutu".
  İki şekilde tanımlarız:

    const → değeri SABİT, sonradan DEĞİŞTİRİLEMEZ. (varsayılan tercihin bu olsun)
    let   → değeri sonradan DEĞİŞEBİLİR.

  (Eski "var" da var ama artık kullanma — let/const daha güvenli.)
  Kural: önce const dene; "bu değişecek" diyorsan let kullan.
*/

const isim = "Berk";       // metin değer → sabit
let yas = 25;              // sayı değer → değişebilir

console.log("İsim:", isim);
console.log("Yaş:", yas);

yas = 26;                  // let olduğu için değiştirebiliriz
console.log("Yeni yaş:", yas);

// const'u değiştirmeye çalışsak HATA verirdi:
// isim = "Ali";   // ❌ TypeError: Assignment to constant variable.


console.log("\n=== 2) TİPLER (veri türleri) ===");

/*
  Her değerin bir TİPİ vardır. Başlıca tipler:

    string   → metin. Tırnak içinde: "merhaba" veya 'merhaba'
    number   → sayı. Tam veya ondalık: 25, 3.14, -7
    boolean  → mantıksal: sadece true (doğru) ya da false (yanlış)
    undefined→ "henüz değer atanmadı"
    null     → "bilerek boş bırakıldı"

  Bir değerin tipini "typeof" ile öğrenirsin.
*/

const metin = "merhaba";        // string
const sayi = 3.14;              // number
const aktifMi = true;           // boolean
let bosKutu;                    // değer vermedik → undefined
const bilerekBos = null;        // null

console.log("metin     →", metin, "| tipi:", typeof metin);
console.log("sayi      →", sayi, "| tipi:", typeof sayi);
console.log("aktifMi   →", aktifMi, "| tipi:", typeof aktifMi);
console.log("bosKutu   →", bosKutu, "| tipi:", typeof bosKutu);
console.log("bilerekBos→", bilerekBos, "| tipi:", typeof bilerekBos);


console.log("\n=== 3) OPERATÖRLER ===");

/*
  ARİTMETİK (matematik):  +  -  *  /  %(kalan)
*/
console.log("10 + 3 =", 10 + 3);   // toplama  → 13
console.log("10 - 3 =", 10 - 3);   // çıkarma  → 7
console.log("10 * 3 =", 10 * 3);   // çarpma   → 30
console.log("10 / 3 =", 10 / 3);   // bölme    → 3.333...
console.log("10 % 3 =", 10 % 3);   // KALAN    → 1  (10'u 3'e bölünce kalan)

/*
  % (mod) çok işe yarar: bir sayı çift mi tek mi?
  Çift sayının 2'ye bölümünden kalan 0'dır.
*/
console.log("8 çift mi? (8 % 2 === 0):", 8 % 2 === 0);   // true
console.log("7 çift mi? (7 % 2 === 0):", 7 % 2 === 0);   // false

/*
  KARŞILAŞTIRMA → sonucu boolean (true/false):
    ===  eşit mi?      (TİP DAHİL tam eşitlik — HER ZAMAN bunu kullan)
    !==  eşit değil mi?
    >  <  >=  <=       büyük/küçük

  NOT: == (iki eşittir) de var ama tipleri zorlar, sürpriz hatalar yapar.
       Sen daima === (üç eşittir) kullan.
*/
console.log("5 === 5 :", 5 === 5);     // true
console.log("5 === '5':", 5 === "5");  // false (biri sayı, biri metin)
console.log("8 > 3 :", 8 > 3);         // true

/*
  MANTIKSAL operatörler:
    &&  (VE)   → İKİSİ de doğruysa true
    ||  (VEYA) → EN AZ BİRİ doğruysa true
    !   (DEĞİL)→ tersine çevirir
*/
console.log("true && false :", true && false);  // false
console.log("true || false :", true || false);  // true
console.log("!true :", !true);                   // false


console.log("\n=== 4) KOŞULLAR (if / else) ===");

/*
  KOŞUL = "eğer ... ise şunu yap, değilse bunu yap".
  Parantez içindeki şart true ise süslü parantez {} içindeki kod çalışır.
*/

const not = 75;

if (not >= 90) {
  console.log("Not", not, "→ AA (mükemmel)");
} else if (not >= 70) {              // ilk şart false ise buraya bakar
  console.log("Not", not, "→ BB (iyi)");
} else if (not >= 50) {
  console.log("Not", not, "→ CC (geçer)");
} else {                            // hiçbiri tutmazsa
  console.log("Not", not, "→ FF (kaldı)");
}

/*
  TERNARY (üçlü operatör) = kısa if/else. Yapısı:
      şart ? doğruysa_değer : yanlışsa_değer
  Tek satırlık basit seçimlerde pratiktir.
*/
const sonuc = yas >= 18 ? "yetişkin" : "çocuk";
console.log("Yaş", yas, "→", sonuc);

console.log("\n✅ Bölüm 1 bitti. Çıktıyı yukarıdan satır satır oku.");
