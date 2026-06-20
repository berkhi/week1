/*
  ============================================================
  DERS 02 — JAVASCRIPT ÇEKİRDEĞİ  ·  Bölüm 3/3
  Diziler (array) · Nesneler (object)
  ============================================================

  Çalıştır:
      node 02-js-core/03-diziler-ve-nesneler.js

  Şimdiye kadar tek değerler tuttuk (isim, yaş...).
  Ama çoğu zaman BİRDEN ÇOK veriyi bir arada tutmamız gerekir:
    • DİZİ   → sıralı bir LİSTE  ["elma", "armut"]   → "şeylerin listesi"
    • NESNE  → etiketli bilgi paketi {ad: "Berk", yas: 26} → "tek bir şeyin özellikleri"
*/

console.log("=== 1) DİZİLER (array) ===");

/*
  DİZİ = köşeli parantez [] içinde, virgülle ayrılmış değerler listesi.
  Sıra önemlidir ve her elemanın bir SIRA NUMARASI (index) vardır.

  ⚠️ ÇOK ÖNEMLİ: index 0'DAN başlar! İlk eleman 0, ikinci 1, ...
*/
const meyveler = ["elma", "armut", "muz", "çilek"];
//                  0        1       2       3      ← index'ler

console.log("Tüm dizi:", meyveler);
console.log("İlk eleman  (index 0):", meyveler[0]);   // elma
console.log("Üçüncü      (index 2):", meyveler[2]);   // muz
console.log("Eleman sayısı (length):", meyveler.length); // 4

// Son elemana ulaşmanın klasik yolu: length - 1
console.log("Son eleman:", meyveler[meyveler.length - 1]); // çilek

// Bir elemanı DEĞİŞTİRME (yerine yazma):
meyveler[1] = "kiraz";
console.log("Değişti:", meyveler);   // armut → kiraz

/*
  Diziye ekleme / çıkarma (en sık kullanılanlar):
    push(x)   → SONA ekler
    pop()     → SONDAN çıkarır
    unshift(x)→ BAŞA ekler
    shift()   → BAŞTAN çıkarır
*/
meyveler.push("üzüm");        // sona ekle
console.log("push sonrası:", meyveler);

meyveler.pop();               // sondan çıkar (üzüm gitti)
console.log("pop sonrası:", meyveler);

// Dizide gezinme (Bölüm 2'deki for...of ile):
console.log("-- Listeyi tek tek yaz --");
for (const meyve of meyveler) {
  console.log("•", meyve);
}

// index de lazımsa klasik for:
for (let i = 0; i < meyveler.length; i++) {
  console.log(i, "→", meyveler[i]);
}


console.log("\n=== 2) NESNELER (object) ===");

/*
  NESNE = süslü parantez {} içinde, "anahtar: değer" çiftleri.
  Bir DİZİ "şeylerin listesi" ise, bir NESNE "TEK bir şeyin özellikleri"dir.

  Örnek: bir kişi → adı var, yaşı var, öğrenci mi bilgisi var...
*/
const kisi = {
  ad: "Berk",          // anahtar: ad   → değer: "Berk"
  yas: 26,
  sehir: "İstanbul",
  ogrenciMi: true,
};

// Özelliklere ulaşmanın 2 yolu:
console.log("Nokta ile  → kisi.ad   :", kisi.ad);       // en yaygın
console.log("Köşeli ile → kisi['yas']:", kisi["yas"]);  // anahtar değişkende tutuluyorsa işe yarar

// Özellik DEĞİŞTİRME ve YENİ özellik EKLEME:
kisi.yas = 27;                 // mevcut özelliği değiştir
kisi.meslek = "öğrenci";       // olmayan özelliği eklersek → eklenir
console.log("Güncellenmiş kisi:", kisi);

/*
  Nesnenin tüm anahtarlarını/değerlerini gezmek:
    Object.keys(nesne)   → anahtarların dizisi
    Object.values(nesne) → değerlerin dizisi
*/
console.log("Anahtarlar:", Object.keys(kisi));
console.log("Değerler  :", Object.values(kisi));


console.log("\n=== 3) İÇ İÇE: NESNELERDEN OLUŞAN DİZİ ===");

/*
  ⭐ EN ÖNEMLİ KISIM ⭐
  Gerçek uygulamalarda veri genelde "NESNELERDEN OLUŞAN BİR DİZİ" şeklindedir.
  Örnek: bir ürün listesi, bir kullanıcı listesi, bir görev (to-do) listesi...
  React'te ekrana liste basarken TAM OLARAK bu yapıyı kullanacaksın.
*/
const urunler = [
  { ad: "Klavye", fiyat: 450, stokta: true },
  { ad: "Mouse",  fiyat: 250, stokta: true },
  { ad: "Monitör", fiyat: 3200, stokta: false },
];

console.log("İkinci ürünün adı:", urunler[1].ad);          // önce index, sonra özellik → "Mouse"
console.log("İlk ürünün fiyatı:", urunler[0].fiyat);       // 450

console.log("-- Tüm ürünler --");
for (const urun of urunler) {
  // şablon yerine virgülle yazıyoruz (sade tutuyoruz)
  const durum = urun.stokta ? "✅ stokta" : "❌ tükendi";
  console.log("•", urun.ad, "—", urun.fiyat, "TL", "—", durum);
}

console.log("\n✅ Bölüm 3 bitti. Artık Ders 02 (JS çekirdeği) tamam!");
