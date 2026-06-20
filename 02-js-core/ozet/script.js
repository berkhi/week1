/*
  ============================================================
  DERS 02 — ÖZET PROJESİ (mantık / JavaScript)
  ============================================================
  Ders 02'de "console.log(...)" ile TERMİNALE yazıyorduk.
  Burada sonuçları SAYFAYA yazacağız. Mantık birebir aynı —
  sadece çıktının gittiği yer değişiyor.

  Bunun için küçük bir yardımcı yazıyoruz: yaz(...).
  (Sayfaya yazma işine "DOM" deniyor; detayını Ders 05'te göreceğiz.
   Şimdilik şu kadarını bil: aşağıdaki 3 satır, HTML'deki bir kutuyu
   bulup içine yeni bir yazı satırı ekliyor.)
*/

function yaz(kutuId, ...parcalar) {
  const kutu = document.getElementById(kutuId);   // HTML'deki ilgili kutuyu bul
  const satir = document.createElement("div");     // yeni bir <div> oluştur
  satir.className = "satir";
  satir.textContent = parcalar.join(" ");          // parçaları boşlukla birleştir
  kutu.appendChild(satir);                          // kutunun içine ekle
}

// Koyu mavi alt başlık satırı (sadece görsel düzen için):
function baslikYaz(kutuId, metin) {
  const kutu = document.getElementById(kutuId);
  const satir = document.createElement("div");
  satir.className = "satir baslik";
  satir.textContent = metin;
  kutu.appendChild(satir);
}

/* ============ 1) DEĞİŞKENLER & TİPLER ============ */
const isim = "Berk";       // const → sabit
let yas = 25;             // let → değişebilir
yas = 26;                 // değiştirdik

yaz("cikti-degiskenler", "isim =", isim, "(const → sabit)");
yaz("cikti-degiskenler", "yas  =", yas, "(let → 25'ten 26'ya değişti)");

baslikYaz("cikti-degiskenler", "typeof ile tipler:");
yaz("cikti-degiskenler", '"merhaba" →', typeof "merhaba"); // string
yaz("cikti-degiskenler", "3.14 →", typeof 3.14);            // number
yaz("cikti-degiskenler", "true →", typeof true);            // boolean

/* ============ 2) OPERATÖRLER ============ */
baslikYaz("cikti-operatorler", "Matematik:");
yaz("cikti-operatorler", "10 + 3 =", 10 + 3);
yaz("cikti-operatorler", "10 % 3 =", 10 % 3, "(kalan)");

baslikYaz("cikti-operatorler", "Karşılaştırma (=== her zaman):");
yaz("cikti-operatorler", "5 === 5  →", 5 === 5);
yaz("cikti-operatorler", "5 === '5' →", 5 === "5", "(sayı ≠ metin)");

baslikYaz("cikti-operatorler", "Mantık:");
yaz("cikti-operatorler", "true && false →", true && false);
yaz("cikti-operatorler", "true || false →", true || false);

/* ============ 3) KOŞULLAR ============ */
const not = 75;
let harf;
if (not >= 90) harf = "AA";
else if (not >= 70) harf = "BB";
else if (not >= 50) harf = "CC";
else harf = "FF";

yaz("cikti-kosullar", "Not:", not, "→ Harf:", harf);
const durum = yas >= 18 ? "yetişkin" : "çocuk";   // ternary
yaz("cikti-kosullar", "Yaş:", yas, "→", durum, "(ternary)");

/* ============ 4) DÖNGÜLER ============ */
baslikYaz("cikti-donguler", "for ile 1'den 5'e:");
for (let i = 1; i <= 5; i++) {
  yaz("cikti-donguler", "i =", i);
}

/* ============ 5) FONKSİYONLAR & ARROW ============ */
function topla(a, b) {          // klasik fonksiyon
  return a + b;
}
const kareAl = (sayi) => sayi * sayi;   // arrow fonksiyon

yaz("cikti-fonksiyonlar", "topla(3, 4) =", topla(3, 4));
yaz("cikti-fonksiyonlar", "kareAl(5) =", kareAl(5), "(arrow)");

/* ============ 6) DİZİLER ============ */
const meyveler = ["elma", "armut", "muz", "çilek"];
yaz("cikti-diziler", "Dizi:", meyveler.join(", "));
yaz("cikti-diziler", "İlk eleman [0]:", meyveler[0]);
yaz("cikti-diziler", "Eleman sayısı (length):", meyveler.length);
meyveler.push("üzüm");          // sona ekle
yaz("cikti-diziler", "push('üzüm') →", meyveler.join(", "));

/* ============ 7) NESNELER ============ */
const kisi = { ad: "Berk", yas: 26, sehir: "İstanbul" };
yaz("cikti-nesneler", "kisi.ad →", kisi.ad);
yaz("cikti-nesneler", "kisi.sehir →", kisi.sehir);
kisi.meslek = "öğrenci";        // yeni özellik ekle
yaz("cikti-nesneler", "Anahtarlar:", Object.keys(kisi).join(", "));

/* ============ ⭐ 8) NESNELERDEN OLUŞAN DİZİ ============ */
const urunler = [
  { ad: "Klavye", fiyat: 450, stokta: true },
  { ad: "Mouse", fiyat: 250, stokta: true },
  { ad: "Monitör", fiyat: 3200, stokta: false },
];

// Listeyi tek tek gez, her ürün için bir satır yaz:
for (const urun of urunler) {
  const kutu = document.getElementById("cikti-urunler");
  const satir = document.createElement("div");
  satir.className = "satir";
  // stok durumuna göre renkli bir parça (HTML) ekliyoruz:
  const durumYazi = urun.stokta
    ? '<span class="stokta-evet">✅ stokta</span>'
    : '<span class="stokta-hayir">❌ tükendi</span>';
  satir.innerHTML = "• " + urun.ad + " — " + urun.fiyat + " TL — " + durumYazi;
  kutu.appendChild(satir);
}

/* ============ 🎮 BONUS: interaktif çift/tek ============ */
/*
  Burada YENİ bir şey var: kullanıcı etkileşimi (event).
  "Butona tıklanınca şu fonksiyonu çalıştır" diyoruz.
  Bu, Ders 05'in (DOM & event) ön gösterimi.
*/
const ciftMiTekMi = (n) => (n % 2 === 0 ? "ÇİFT" : "TEK");

const buton = document.getElementById("kontrol-btn");
const girdi = document.getElementById("sayi-girdi");
const bonusKutu = document.getElementById("cikti-bonus");

// "click" = tıklama olayı. Tıklanınca içerideki fonksiyon çalışır.
buton.addEventListener("click", () => {
  const deger = Number(girdi.value);   // input'tan gelen metni sayıya çevir
  if (girdi.value === "") {
    bonusKutu.textContent = "Önce bir sayı yaz 🙂";
    return;                            // boşsa dur
  }
  bonusKutu.textContent = deger + " sayısı → " + ciftMiTekMi(deger);
});

console.log("Sayfa hazır ✅ (kaynak için script.js'e bak)");
