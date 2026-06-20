/*
  ============================================================
  App — ANA BİLEŞEN (her şeyi birleştirir)
  ============================================================
  Burada Ders 02'nin örneklerini React bileşenleriyle gösteriyoruz.
  Diğer bileşenleri "import" edip, JSX içinde <Etiket /> gibi kullanıyoruz.
  Bir bileşene veri vermek = ona prop geçmek: <UrunListesi urunler={...} />
*/

import "./App.css";
import Kart from "./components/Kart";
import UrunListesi from "./components/UrunListesi";
import CiftTekKontrol from "./components/CiftTekKontrol";

// Ders 02'deki "nesnelerden oluşan dizi" — bileşene prop olarak vereceğiz.
const urunler = [
  { ad: "Klavye", fiyat: 450, stokta: true },
  { ad: "Mouse", fiyat: 250, stokta: true },
  { ad: "Monitör", fiyat: 3200, stokta: false },
];

function App() {
  // ---- Buradakiler SIRADAN JavaScript: Ders 02'den tanıdık ----
  const isim = "Berk";                       // const
  const yas = 26;                            // const
  const meyveler = ["elma", "armut", "muz"]; // dizi
  const not = 75;                            // koşul örneği için

  // koşul (if/else) — sonucu bir değişkende tutuyoruz
  let harf = "FF";
  if (not >= 90) harf = "AA";
  else if (not >= 70) harf = "BB";
  else if (not >= 50) harf = "CC";

  const durum = yas >= 18 ? "yetişkin" : "çocuk"; // ternary

  return (
    <div className="sayfa">
      <header className="baslik">
        <span className="rozet">HAFTA 1 · DERS 02 · React sürümü</span>
        <h1>JavaScript Çekirdeği — React ile</h1>
        <p>Aynı Ders 02 örnekleri; bu kez component + props + useState ile.</p>
      </header>

      <div className="kart-listesi">

        {/*
          Kart bileşenini kullanıyoruz. baslik/aciklama = prop.
          Etiketler ARASINA yazdığımız her şey "children" olur.
          { } içinde JS değeri gömüyoruz: {isim}, {yas} ...
        */}
        <Kart baslik="1) Değişkenler" aciklama="const (sabit) ve let (değişebilir)">
          <div className="cikti">
            <div className="satir">isim = {isim}</div>
            <div className="satir">yas = {yas}</div>
            <div className="satir">tip(isim) = {typeof isim}</div>
          </div>
        </Kart>

        <Kart baslik="2) Operatörler" aciklama="Matematik ve karşılaştırma">
          <div className="cikti">
            <div className="satir">10 + 3 = {10 + 3}</div>
            <div className="satir">10 % 3 = {10 % 3} (kalan)</div>
            <div className="satir">5 === 5 → {String(5 === 5)}</div>
          </div>
        </Kart>

        <Kart baslik="3) Koşullar" aciklama="if / else + ternary">
          <div className="cikti">
            <div className="satir">Not {not} → Harf {harf}</div>
            <div className="satir">Yaş {yas} → {durum}</div>
          </div>
        </Kart>

        <Kart baslik="4) Diziler" aciklama="Sıralı liste; index 0'dan başlar">
          <div className="cikti">
            <div className="satir">meyveler = {meyveler.join(", ")}</div>
            <div className="satir">İlk eleman [0] = {meyveler[0]}</div>
            <div className="satir">Eleman sayısı = {meyveler.length}</div>
          </div>
        </Kart>

        {/*
          ⭐ Nesnelerden oluşan diziyi UrunListesi bileşenine PROP olarak veriyoruz.
          Veri App'te, görünüm UrunListesi'nde → sorumluluklar ayrı, temiz.
        */}
        <Kart
          baslik="⭐ 5) Nesnelerden oluşan dizi"
          aciklama="React'te liste .map() ile basılır"
          vurgu
        >
          <UrunListesi urunler={urunler} />
        </Kart>

        {/* Bonus interaktif bileşen: useState burada iş başında */}
        <Kart baslik="🎮 Bonus: Çift / Tek (useState)" aciklama="State değişince ekran kendiliğinden tazelenir">
          <CiftTekKontrol />
        </Kart>

      </div>

      <footer className="footer">
        <p>Kaynağı görmek için src/ klasöründeki .tsx dosyalarını aç.</p>
      </footer>
    </div>
  );
}

export default App;
