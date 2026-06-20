/*
  ============================================================
  DERS 05 — DOM & EVENT (mantık)
  ============================================================
  Üç temel adım her demoda tekrar eder:
    1. ELEMANI BUL    → document.getElementById("...") veya querySelector("...")
    2. OLAY DİNLE     → eleman.addEventListener("olay", fonksiyon)
    3. İÇERİĞİ DEĞİŞTİR → .textContent / .classList / .appendChild ...
*/


/* ====== DEMO 1: Metni değiştir (click event) ====== */

// 1. BUL
const mesaj = document.getElementById("mesaj");
const degistirBtn = document.getElementById("degistir-btn");

// Aralarında geçiş yapacağımız iki mesaj:
const mesajlar = ["Merhaba! 👋", "DOM'a hoş geldin! 🎉", "Tıklamaya devam 🚀"];
let sira = 0;

// 2. OLAY DİNLE: butona "click" gelince fonksiyon çalışır.
degistirBtn.addEventListener("click", () => {
  sira = (sira + 1) % mesajlar.length;   // sıradaki mesaja geç (Ders 02: % ile döngü)
  // 3. DEĞİŞTİR: elemanın yazısını güncelle
  mesaj.textContent = mesajlar[sira];
});


/* ====== DEMO 2: Tema değiştir (classList.toggle) ====== */

const kutu = document.getElementById("kutu");
const temaBtn = document.getElementById("tema-btn");

/*
  classList.toggle("koyu") → "koyu" sınıfı VARSA kaldırır, YOKSA ekler.
  CSS'te .tema-kutu.koyu için koyu renkler tanımlı; gerisini CSS halleder.
  Hem butona hem kutunun kendisine bağlayalım (ikisi de çalışsın).
*/
function temayiDegistir() {
  kutu.classList.toggle("koyu");
}
temaBtn.addEventListener("click", temayiDegistir);
kutu.addEventListener("click", temayiDegistir);


/* ====== DEMO 3: Canlı yansıma (input event) ====== */

const yansimaGirdi = document.getElementById("yansima-girdi");
const yansimaCikti = document.getElementById("yansima-cikti");

/*
  "input" olayı, kullanıcı HER tuşa bastığında tetiklenir.
  e.target → olayın olduğu eleman (burada input). .value → içindeki metin.
*/
yansimaGirdi.addEventListener("input", (e) => {
  const metin = e.target.value;
  // Boşsa "—" göster, doluysa metni göster:
  yansimaCikti.textContent = metin === "" ? "—" : metin;
});


/* ====== DEMO 4: Yapılacaklar listesi (createElement + appendChild) ====== */

const gorevGirdi = document.getElementById("gorev-girdi");
const ekleBtn = document.getElementById("ekle-btn");
const gorevListesi = document.getElementById("gorev-listesi");

function gorevEkle() {
  const metin = gorevGirdi.value.trim();   // trim → baştaki/sondaki boşlukları at
  if (metin === "") return;                // boşsa ekleme

  // 1. YENİ eleman oluştur (henüz sayfada değil, hafızada):
  const li = document.createElement("li");

  // İçine görev metnini + bir "Sil" butonu koyalım:
  const yazi = document.createElement("span");
  yazi.textContent = metin;

  const silBtn = document.createElement("button");
  silBtn.textContent = "Sil";
  silBtn.className = "sil-btn";
  // Bu butona tıklanınca KENDİ satırını (li) kaldır:
  silBtn.addEventListener("click", () => li.remove());

  // Parçaları li'ye, li'yi listeye EKLE (appendChild = "çocuk olarak ekle"):
  li.appendChild(yazi);
  li.appendChild(silBtn);
  gorevListesi.appendChild(li);

  // Girdiyi temizle ki sıradakini yazabilelim:
  gorevGirdi.value = "";
  gorevGirdi.focus();
}

ekleBtn.addEventListener("click", gorevEkle);

// Bonus: input'ta Enter'a basınca da eklensin (keydown olayı).
gorevGirdi.addEventListener("keydown", (e) => {
  if (e.key === "Enter") gorevEkle();
});

/* ====== DEMO 5: Olay Kâşifi (birçok farklı olay tek yerde) ====== */

const kasifKutu = document.getElementById("kasif-kutu");
const kasifGirdi = document.getElementById("kasif-girdi");
const kasifLog = document.getElementById("kasif-log");

// Başlangıçta boş mesaj göster
kasifLog.innerHTML = `<li class="bos">Henüz olay yok — kutuyla etkileş.</li>`;

/*
  Yardımcı: bir olay olunca kayda EN ÜSTE yeni satır ekler.
  saat = olayın olduğu an (kullanıcı sırayı görsün diye).
*/
function olayKaydet(metin) {
  // İlk gerçek olayda "boş" mesajını temizle
  const bos = kasifLog.querySelector(".bos");
  if (bos) bos.remove();

  const saat = new Date().toLocaleTimeString("tr-TR");
  const li = document.createElement("li");
  li.textContent = `[${saat}]  ${metin}`;

  // prepend = listenin BAŞINA ekle (appendChild sona eklerdi)
  kasifLog.prepend(li);

  // Kayıt çok uzarsa en eskileri sil (en fazla 10 satır)
  while (kasifLog.children.length > 10) {
    kasifLog.lastElementChild.remove();
  }
}

/*
  AYNI kutuya FARKLI olaylar bağlıyoruz. Her biri ayrı bir dinleyici.
  Amaç: "olay = sayfada olan bir şey" fikrini canlı görmek.
*/
kasifKutu.addEventListener("click", () => olayKaydet("🖱️ click — tek tıklama"));
kasifKutu.addEventListener("dblclick", () => olayKaydet("🖱️🖱️ dblclick — çift tıklama"));
kasifKutu.addEventListener("mouseenter", () => olayKaydet("➡️ mouseenter — fare girdi"));
kasifKutu.addEventListener("mouseleave", () => olayKaydet("⬅️ mouseleave — fare çıktı"));

// Girdiye yazınca: hangi tuşa basıldığını da olaydan okuyoruz (e.key)
kasifGirdi.addEventListener("keydown", (e) => {
  olayKaydet(`⌨️ keydown — '${e.key}' tuşu`);
});

console.log("DOM oyun alanı hazır ✅");
