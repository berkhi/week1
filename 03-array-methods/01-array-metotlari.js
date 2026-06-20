/*
  ============================================================
  DERS 03 — ARRAY METOTLARI
  forEach · map · filter · find · reduce
  ============================================================

  Çalıştır:
      node 03-array-methods/01-array-metotlari.js

  Ders 02'de dizilerde gezmek için "for" döngüsü yazıyorduk:
      for (let i = 0; i < dizi.length; i++) { ... }

  Array metotları bu işi DAHA KISA, DAHA OKUNAKLI yapar.
  Hepsinin ortak mantığı: diziye bir FONKSİYON verirsin, o fonksiyon
  dizideki HER eleman için bir kez çalışır.

  Bu fonksiyona "callback" (geri-çağrı) denir. Genelde arrow yazılır:
      dizi.metot( (eleman) => { ... } )
                  └────── her eleman için çalışır ──────┘
*/

// Boyunca kullanacağımız iki veri:
const sayilar = [5, 12, 8, 130, 44];

const urunler = [
  { ad: "Klavye", fiyat: 450, stokta: true },
  { ad: "Mouse", fiyat: 250, stokta: true },
  { ad: "Monitör", fiyat: 3200, stokta: false },
  { ad: "Kulaklık", fiyat: 800, stokta: true },
];


console.log("=== 1) forEach — her eleman için BİR İŞ yap ===");
/*
  forEach: diziyi gez, her eleman için callback'i çalıştır.
  Geriye DEĞER DÖNDÜRMEZ (yeni dizi üretmez). Sadece "iş yapar":
  ekrana yazmak, saymak, vb. → "for döngüsünün şık hali".
*/
sayilar.forEach((sayi) => {
  console.log("Sayı:", sayi);
});

// İstersen sıra numarası (index) de alabilirsin (2. parametre):
urunler.forEach((urun, index) => {
  console.log(index, "→", urun.ad);
});


console.log("\n=== 2) map — her elemanı DÖNÜŞTÜR, YENİ dizi üret ===");
/*
  map: her elemanı başka bir şeye çevirir ve AYNI UZUNLUKTA yeni dizi döndürür.
  Orijinal diziye DOKUNMAZ.
  ⭐ React'te listeyi ekrana basarken tam olarak bunu kullanıyorsun.
*/

// Her sayının iki katı:
const katlari = sayilar.map((sayi) => sayi * 2);
console.log("Orijinal:", sayilar);
console.log("map → 2 katı:", katlari);   // [10, 24, 16, 260, 88]

// Nesne dizisinden sadece İSİMLERİ çek (çok yaygın):
const isimler = urunler.map((urun) => urun.ad);
console.log("Ürün isimleri:", isimler);  // ["Klavye", "Mouse", ...]

// Her üründen yeni biçimli bir metin üret:
const etiketler = urunler.map((urun) => urun.ad + ": " + urun.fiyat + " TL");
console.log("Etiketler:", etiketler);


console.log("\n=== 3) filter — KOŞULU sağlayanları SÜZ ===");
/*
  filter: callback'in TRUE döndürdüğü elemanları tutar, diğerlerini atar.
  Sonuç: ESİT veya DAHA KISA yeni bir dizi.
*/

// Sadece 10'dan büyük sayılar:
const buyukler = sayilar.filter((sayi) => sayi > 10);
console.log("10'dan büyükler:", buyukler);   // [12, 130, 44]

// Sadece stokta olan ürünler:
const stoktakiler = urunler.filter((urun) => urun.stokta);
console.log("Stoktakiler:", stoktakiler.map((u) => u.ad));

// Fiyatı 1000'den düşük ürünler:
const ucuzlar = urunler.filter((urun) => urun.fiyat < 1000);
console.log("1000 TL altı:", ucuzlar.map((u) => u.ad));


console.log("\n=== 4) find — koşulu sağlayan İLK elemanı bul ===");
/*
  find: callback'in TRUE döndürdüğü İLK elemanı verir (tek bir eleman).
  Bulamazsa "undefined" döner.
  (filter TÜM eşleşmeleri verir; find sadece İLKİNİ.)
*/

const ilkBuyuk = sayilar.find((sayi) => sayi > 10);
console.log("10'dan büyük ilk sayı:", ilkBuyuk);   // 12

// Belirli bir ürünü ada göre bul:
const monitor = urunler.find((urun) => urun.ad === "Monitör");
console.log("Bulunan ürün:", monitor);

const yok = urunler.find((urun) => urun.ad === "Webcam");
console.log("Olmayan ürün:", yok);   // undefined


console.log("\n=== 5) reduce — diziyi TEK BİR DEĞERE indir ===");
/*
  reduce: en güçlü ama en kafa karıştırıcı olanı.
  Tüm diziyi gezip TEK bir sonuç biriktirir (toplam, ortalama, sayım...).

  Yapısı:
      dizi.reduce( (toplam, eleman) => yeniToplam , başlangıç )
                    └ biriken değer  └ o anki eleman          └ başlangıç değeri

  Adım adım (sayıları toplama, başlangıç 0):
      tur 1: toplam=0,   eleman=5    → 0 + 5   = 5
      tur 2: toplam=5,   eleman=12   → 5 + 12  = 17
      tur 3: toplam=17,  eleman=8    → 17 + 8  = 25
      tur 4: toplam=25,  eleman=130  → 25 + 130= 155
      tur 5: toplam=155, eleman=44   → 155 + 44= 199  ← sonuç
*/

const toplam = sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
console.log("Sayıların toplamı:", toplam);   // 199

// Ortalama: toplam / eleman sayısı
console.log("Ortalama:", toplam / sayilar.length);

// Sepetteki TÜM ürünlerin toplam fiyatı (gerçek hayat örneği):
const sepetToplami = urunler.reduce((toplam, urun) => toplam + urun.fiyat, 0);
console.log("Sepet toplamı:", sepetToplami, "TL");   // 4700


console.log("\n=== 6) ZİNCİRLEME (chaining) — metotları arka arkaya ===");
/*
  Bu metotların çoğu YENİ dizi döndürdüğü için arka arkaya bağlanabilir.
  Çok yaygın örnek: önce SÜZ (filter), sonra DÖNÜŞTÜR (map), sonra TOPLA (reduce).

  Soru: "Stoktaki ürünlerin toplam fiyatı kaç?"
*/
const stokToplami = urunler
  .filter((urun) => urun.stokta)        // 1) sadece stoktakiler
  .map((urun) => urun.fiyat)            // 2) onların fiyatları
  .reduce((toplam, fiyat) => toplam + fiyat, 0); // 3) topla

console.log("Stoktaki ürünlerin toplamı:", stokToplami, "TL");

console.log("\n✅ Ders 03 bitti. Özet:");
console.log("forEach → iş yap (dönmez) | map → dönüştür | filter → süz");
console.log("find → ilk eşleşme        | reduce → tek değere indir");
