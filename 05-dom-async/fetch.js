/*
  ============================================================
  DERS 05 — ASYNC & FETCH (mantık)
  ============================================================

  ASENKRON (async) nedir?
  Çoğu kod ANINDA biter. Ama internetten veri çekmek ZAMAN ALIR
  (yarım saniye, belki saniyeler). JavaScript bu sırada donup beklemez;
  "işi başlatır, gelince haber ver" der. İşte bu "asenkron"dur.

  PROMISE (söz) nedir?
  fetch(...) hemen veriyi vermez; bir "PROMISE" (söz) döndürür:
  "veri ileride gelecek, söz veriyorum". Üç hali olur:
    • pending  (bekliyor)
    • fulfilled (geldi ✅)
    • rejected (hata ❌)

  async / await:
  Promise'leri okunaklı yazmanın yolu. "await" → "bu söz yerine gelene
  kadar BEKLE, sonucu al, sonra devam et" demek.
  await SADECE "async" işaretli bir fonksiyon içinde kullanılabilir.

  Eski yol (.then) şuna benzerdi — karşılaştırman için:
      fetch(url).then(res => res.json()).then(data => ...).catch(...)
  async/await ile aynı şey çok daha düz okunur (aşağıda).
*/

// Elemanları bul:
const urunlerKutu = document.getElementById("urunler");
const durum = document.getElementById("durum");
const yukleBtn = document.getElementById("yukle-btn");

const API = "https://dummyjson.com/products?limit=12";

// async → bu fonksiyon "asenkron"; içinde await kullanabiliriz.
async function urunleriGetir() {
  // --- Yükleniyor durumu ---
  durum.textContent = "Yükleniyor...";
  durum.classList.remove("hata");
  yukleBtn.disabled = true;                 // iki kez basmayı engelle
  iskeletGoster();                          // gri "yükleniyor" kutuları

  // try / catch: ağ hatası olursa program çökmesin, yakalayalım.
  try {
    // 1) İsteği gönder, CEVABI bekle (await).
    const cevap = await fetch(API);

    // 2) HTTP başarılı mı? (404, 500 gibi durumlarda ok = false olur)
    if (!cevap.ok) {
      throw new Error("Sunucu hatası: " + cevap.status);
    }

    // 3) Cevabın gövdesini JSON'a çevir (bu da bir Promise → await).
    const veri = await cevap.json();

    // dummyjson cevabı { products: [...] } şeklinde → ürünleri al.
    const urunler = veri.products;

    // 4) Ekrana bas (Ders 03: map ile her ürünü bir karta çevir).
    kartlariCiz(urunler);
    durum.textContent = urunler.length + " ürün yüklendi ✅";

  } catch (hata) {
    // Buraya ağ koparsa / API patlarsa düşeriz.
    urunlerKutu.innerHTML = "";
    durum.textContent = "Bir şeyler ters gitti: " + hata.message;
    durum.classList.add("hata");
    console.error(hata);

  } finally {
    // finally: başarı da olsa hata da olsa HER ZAMAN çalışır.
    yukleBtn.disabled = false;              // butonu tekrar aç
  }
}

// Ürün kartlarını çiz (map → her ürün bir kart HTML'i)
function kartlariCiz(urunler) {
  urunlerKutu.innerHTML = urunler
    .map(
      (u) => `
      <article class="urun-kart">
        <img src="${u.thumbnail}" alt="${u.title}" loading="lazy" />
        <div class="govde">
          <span class="baslik">${u.title}</span>
          <span class="kategori">${u.category}</span>
          <div class="alt">
            <span class="fiyat">$${u.price}</span>
            <span class="puan">⭐ ${u.rating}</span>
          </div>
        </div>
      </article>`
    )
    .join("");
}

// Yükleniyor sırasında 8 adet gri iskelet kutu göster
function iskeletGoster() {
  let html = "";
  for (let i = 0; i < 8; i++) html += `<div class="iskelet"></div>`;
  urunlerKutu.innerHTML = html;
}

// "Yeniden yükle" butonuna bağla:
yukleBtn.addEventListener("click", urunleriGetir);

// Sayfa açılır açılmaz bir kez otomatik yükle:
urunleriGetir();
