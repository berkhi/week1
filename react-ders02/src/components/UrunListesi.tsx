/*
  ============================================================
  BİLEŞEN: UrunListesi
  ============================================================
  Ders 02'deki "nesnelerden oluşan dizi"yi (urunler) ekrana basıyoruz.

  ⭐ ÖNEMLİ: React'te bir listeyi ekrana basmak için ".map()" kullanılır.
  .map() = "dizideki her elemanı al, başka bir şeye DÖNÜŞTÜR".
  Burada her ürün NESNESİNİ bir <li> JSX'ine dönüştürüyoruz.
  (.map'i Ders 03'te detaylı işleyeceğiz; React'in liste basma yolu budur.)

  Veriyi (urunler) DIŞARIDAN prop olarak alıyoruz → bileşen yeniden kullanılabilir.
*/

// Tek bir ürünün tipi:
type Urun = {
  ad: string;
  fiyat: number;
  stokta: boolean;
};

// Bu bileşenin aldığı prop'lar: bir Urun dizisi.
type UrunListesiProps = {
  urunler: Urun[];   // Urun[] = "Urun'lardan oluşan dizi"
};

function UrunListesi({ urunler }: UrunListesiProps) {
  return (
    <ul className="urun-listesi">
      {/*
        urunler.map(...) her ürünü bir <li>'ye çevirir.
        key={...} → React'in her satırı birbirinden ayırt etmesi için ZORUNLU.
                    (Benzersiz bir değer ver; burada ürün adı yeterli.)
      */}
      {urunler.map((urun) => (
        <li key={urun.ad}>
          <span className="urun-ad">{urun.ad}</span>
          <span>{urun.fiyat} TL</span>

          {/* stok durumuna göre renkli yazı (Ders 02'deki ternary) */}
          <span className={urun.stokta ? "stokta-evet" : "stokta-hayir"}>
            {urun.stokta ? "✅ stokta" : "❌ tükendi"}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default UrunListesi;
