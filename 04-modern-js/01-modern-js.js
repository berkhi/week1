/*
  ============================================================
  DERS 04 — MODERN JS  (Bölüm 1/2)
  Template literals · Destructuring · Spread / Rest
  ============================================================

  Çalıştır:
      node 04-modern-js/01-modern-js.js

  Bunlar yeni "yetenek" değil; aynı işleri DAHA KISA ve DAHA OKUNAKLI
  yazmanın modern yolları. React kodunun her yerinde görürsün.
*/

console.log("=== 1) TEMPLATE LITERALS (şablon metinler) ===");
/*
  Şimdiye kadar metinleri + ile birleştiriyorduk:
      "Merhaba " + isim + ", yaşın " + yas
  Bu hem yorucu hem hataya açık (boşlukları unutmak kolay).

  TEMPLATE LITERAL: düz tırnak yerine TERS TIRNAK (`) kullan,
  içine ${ } ile değişken/ifade göm. Çok daha temiz.
  (Ters tırnak: Türkçe klavyede genelde sol üstte, Alt+, veya Shift ile.)
*/
const isim = "Berk";
const yas = 26;

// Eski yol (concatenation):
console.log("Eski:", "Merhaba " + isim + ", yaşın " + yas);

// Yeni yol (template literal):
console.log("Yeni:", `Merhaba ${isim}, yaşın ${yas}`);

// ${ } içine HER TÜRLÜ ifade konur (hesap da yapabilir):
console.log(`Gelecek yıl ${yas + 1} olacaksın.`);

// Çok satırlı metin: ters tırnak satır sonlarını korur.
const kart = `
  Ad   : ${isim}
  Yaş  : ${yas}
  Durum: ${yas >= 18 ? "yetişkin" : "çocuk"}`;
console.log("Çok satırlı:", kart);


console.log("\n=== 2) DESTRUCTURING (sökme/ayrıştırma) ===");
/*
  DESTRUCTURING = bir dizinin/nesnenin içindekileri tek tek
  değişkenlere "çıkarmak".

  --- Diziden ---
  Eskiden: const a = dizi[0]; const b = dizi[1];
*/
const renkler = ["kırmızı", "yeşil", "mavi"];

const [birinci, ikinci, ucuncu] = renkler;  // sırayla çıkar
console.log("Diziden:", birinci, ikinci, ucuncu);

// Bazılarını atlayabilirsin (virgülle boş geç):
const [, ikinciRenk] = renkler;
console.log("Sadece ikinci:", ikinciRenk);

/*
  --- Nesneden --- (en sık kullanılan!)
  Eskiden: const ad = kisi.ad; const sehir = kisi.sehir;
  Nesnede SIRA değil, ANAHTAR İSMİ önemlidir.
*/
const kisi = { ad: "Ayşe", yas: 30, sehir: "İzmir" };

const { ad, sehir } = kisi;                 // ad ve sehir'i çıkar
console.log("Nesneden:", ad, sehir);

// Farklı isim vermek (ad → kisiAdi) ve olmayan için varsayılan değer:
const { ad: kisiAdi, meslek = "belirtilmemiş" } = kisi;
console.log("Yeniden adlandırma + varsayılan:", kisiAdi, "/", meslek);

/*
  ⭐ FONKSİYON PARAMETRESİNDE destructuring (React'te HER YERDE):
  Bir nesne alıp içinden gerekenleri doğrudan parametrede çıkarırız.
  (Ders 02 React'teki  function Kart({ baslik, aciklama }) {...}  hatırla!)
*/
function selamla({ ad, sehir }) {
  return `Merhaba ${ad}, ${sehir}'den selamlar!`;
}
console.log(selamla(kisi));


console.log("\n=== 3) SPREAD ( ... ) — açmak / kopyalamak ===");
/*
  SPREAD (...) bir dizinin/nesnenin içindekileri "DÖKER".

  --- Dizilerde ---
*/
const a = [1, 2, 3];
const b = [4, 5, 6];

const birlesik = [...a, ...b];          // iki diziyi birleştir
console.log("Birleştir:", birlesik);    // [1,2,3,4,5,6]

const kopya = [...a];                    // KOPYA al (orijinali bozmadan)
kopya.push(99);
console.log("Kopya:", kopya, "| Orijinal değişmedi:", a);

/*
  --- Nesnelerde --- (React state güncellemede KRİTİK)
  Eski nesnenin tüm alanlarını al, bazılarını değiştir → YENİ nesne üret.
*/
const kullanici = { ad: "Berk", yas: 26, sehir: "İstanbul" };
const guncel = { ...kullanici, yas: 27 };  // yaş hariç hepsini kopyala, yaşı değiştir
console.log("Spread ile güncelleme:", guncel);
console.log("Orijinal bozulmadı:", kullanici);


console.log("\n=== 4) REST ( ... ) — toplamak ===");
/*
  REST de (...) ama spread'in TERSİ: dağıtmak yerine TOPLAR.
  Konumuna göre anlamı değişir:

  --- Destructuring'de: "geri kalanını bir diziye/nesneye topla" ---
*/
const sayilar = [10, 20, 30, 40, 50];
const [ilk, ...digerleri] = sayilar;     // ilkini al, gerisini topla
console.log("İlk:", ilk, "| Diğerleri:", digerleri);

const { ad: kAd, ...kalanBilgiler } = kullanici;
console.log("Ad:", kAd, "| Kalanlar:", kalanBilgiler);

/*
  --- Fonksiyon parametresinde: "kaç tane gelirse hepsini topla" ---
  Önceden topla(a, b) iki sayı topluyordu. Şimdi KAÇ tane olursa olsun:
*/
function topla(...gelenler) {            // gelenler bir dizi olur
  return gelenler.reduce((toplam, n) => toplam + n, 0);  // Ders 03: reduce!
}
console.log("topla(1,2,3):", topla(1, 2, 3));
console.log("topla(5,5,5,5,5):", topla(5, 5, 5, 5, 5));

console.log("\n✅ Bölüm 1 bitti. Özet:");
console.log("`${}` → metne değer göm | {a,b}=nesne → sök | ...→ aç(spread)/topla(rest)");
