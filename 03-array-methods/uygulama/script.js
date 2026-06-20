/*
  ============================================================
  DERS 03 — ÜRÜN PANOSU (mantık)
  ============================================================
  Fikir: Elimizde sabit bir ürün listesi var. Kullanıcı arama yazıp
  filtre/sıralama seçtikçe, bu listeyi ARRAY METOTLARIYLA işleyip
  ekranı yeniden çiziyoruz.

  Bu, React'in mantığının vanilla hali:
    "durum (state) değişti → ekranı yeniden çiz (render)".
*/

// ---- VERİ: değişmeyen ana liste ----
const URUNLER = [
  { ad: "Klavye", fiyat: 450, stokta: true },
  { ad: "Mouse", fiyat: 250, stokta: true },
  { ad: "Monitör", fiyat: 3200, stokta: false },
  { ad: "Kulaklık", fiyat: 800, stokta: true },
  { ad: "Webcam", fiyat: 600, stokta: false },
  { ad: "Mikrofon", fiyat: 1500, stokta: true },
];

// ---- DURUM (state): kullanıcının o anki seçimleri ----
let aktifFiltre = "tumu";   // "tumu" | "stokta" | "ucuz"
let aramaMetni = "";        // arama kutusundaki yazı
let siralama = "yok";       // "yok" | "artan" | "azalan"

// HTML'deki ihtiyaç duyacağımız parçaları bir kez bulalım:
const listeKutu = document.getElementById("urun-listesi");
const istatKutu = document.getElementById("istatistik");
const aramaInput = document.getElementById("arama");
const filtreKutu = document.getElementById("filtreler");
const siralamaSelect = document.getElementById("siralama");


/*
  ============ ANA FONKSİYON: render() ============
  Her şeyi sıfırdan hesaplayıp ekranı çizer.
  Kullanıcı bir şey değiştirdiğinde bunu tekrar çağırırız.
*/
function render() {
  // 1) ARAMA → filter: adı, yazılan metni İÇEREN ürünler.
  //    toLowerCase() ile büyük/küçük harf farkını yok sayıyoruz.
  let gosterilen = URUNLER.filter((urun) =>
    urun.ad.toLowerCase().includes(aramaMetni.toLowerCase())
  );

  // 2) FİLTRE BUTONU → filter: aktif filtreye göre süz.
  if (aktifFiltre === "stokta") {
    gosterilen = gosterilen.filter((urun) => urun.stokta);
  } else if (aktifFiltre === "ucuz") {
    gosterilen = gosterilen.filter((urun) => urun.fiyat < 1000);
  }
  // "tumu" ise süzme yok.

  // 3) SIRALAMA → sort: fiyata göre.
  //    [...gosterilen] = diziyi KOPYALA (spread). Orijinali bozmamak için.
  //    (spread'i Ders 04'te detaylı göreceğiz; burada "kopya al" diye düşün.)
  if (siralama === "artan") {
    gosterilen = [...gosterilen].sort((a, b) => a.fiyat - b.fiyat);
  } else if (siralama === "azalan") {
    gosterilen = [...gosterilen].sort((a, b) => b.fiyat - a.fiyat);
  }

  // 4) İSTATİSTİK çiz + 5) LİSTE çiz
  istatistikleriCiz(gosterilen);
  listeyiCiz(gosterilen);
}


/*
  ============ İSTATİSTİK: map + reduce + find ============
*/
function istatistikleriCiz(liste) {
  const adet = liste.length;

  // map → sadece fiyatlar, reduce → topla.
  const toplam = liste
    .map((urun) => urun.fiyat)
    .reduce((toplam, fiyat) => toplam + fiyat, 0);

  const ortalama = adet === 0 ? 0 : Math.round(toplam / adet);

  // find ile değil, reduce ile "en pahalı" ürünü bulalım (karşılaştırarak):
  const enPahali =
    adet === 0
      ? null
      : liste.reduce((enYuksek, urun) =>
          urun.fiyat > enYuksek.fiyat ? urun : enYuksek
        );

  istatKutu.innerHTML = `
    <div class="istat-kutu">
      <div class="deger">${adet}</div>
      <div class="etiket">ürün (filter)</div>
    </div>
    <div class="istat-kutu">
      <div class="deger">${toplam} TL</div>
      <div class="etiket">toplam (map+reduce)</div>
    </div>
    <div class="istat-kutu">
      <div class="deger">${enPahali ? enPahali.ad : "—"}</div>
      <div class="etiket">en pahalı · ort. ${ortalama} TL</div>
    </div>
  `;
}


/*
  ============ LİSTE: map ile her ürünü bir satıra çevir ============
  Bu, React'teki urunler.map(...) ile AYNI fikir — orada JSX, burada HTML metni.
*/
function listeyiCiz(liste) {
  // Hiç ürün yoksa mesaj göster, çık.
  if (liste.length === 0) {
    listeKutu.innerHTML = `<li class="bos-mesaj">Sonuç yok 🤷 (aramayı/filtreyi değiştir)</li>`;
    return;
  }

  // map → her ürün nesnesini bir <li> METNİNE dönüştür, join ile birleştir.
  listeKutu.innerHTML = liste
    .map((urun) => {
      const rozet = urun.stokta
        ? `<span class="rozet evet">✅ stokta</span>`
        : `<span class="rozet hayir">❌ tükendi</span>`;
      return `
        <li class="urun-satiri">
          <span class="ad">${urun.ad}</span>
          <span class="fiyat">${urun.fiyat} TL</span>
          ${rozet}
        </li>`;
    })
    .join("");
}


/*
  ============ OLAYLAR (event): kullanıcı etkileşimi ============
  Her etkileşim: durumu (state) güncelle → render() ile ekranı tazele.
  (Olaylar = Ders 05 konusu; burada metotları canlı görmek için kullanıyoruz.)
*/

// Arama kutusuna her yazışta:
aramaInput.addEventListener("input", () => {
  aramaMetni = aramaInput.value;
  render();
});

// Filtre butonlarından birine tıklayınca:
filtreKutu.addEventListener("click", (e) => {
  // Sadece bir butona tıklandıysa ilgilen:
  if (e.target.tagName !== "BUTTON") return;

  aktifFiltre = e.target.dataset.filtre;   // data-filtre değerini oku

  // "aktif" sınıfını tüm butonlardan kaldırıp tıklanana ver:
  filtreKutu.querySelectorAll("button").forEach((btn) => btn.classList.remove("aktif"));
  e.target.classList.add("aktif");

  render();
});

// Sıralama seçilince:
siralamaSelect.addEventListener("change", () => {
  siralama = siralamaSelect.value;
  render();
});

// ---- İlk açılışta bir kez çiz ----
render();
