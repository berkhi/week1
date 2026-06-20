/*
  ============================================================
  BİLEŞEN (COMPONENT): Kart
  ============================================================
  REACT'İN 1. TEMEL FİKRİ: BİLEŞEN.
  Bir bileşen = JSX döndüren bir FONKSİYONDUR. Yani sayfanın
  yeniden kullanılabilir bir parçasını üreten fonksiyon.
  Ders 02'deki fonksiyonları hatırla — bu da öyle, ama "arayüz" üretiyor.

  JSX = JavaScript içine yazılan HTML benzeri kod (return içindeki kısım).
  Küçük 2 fark:
    • class yerine className yazılır.
    • { } içine JavaScript değeri gömülür → {baslik}

  REACT'İN 2. TEMEL FİKRİ: PROPS.
  Props = bileşene DIŞARIDAN verilen girdiler (fonksiyon parametresi gibi).
  Bu Kart bileşeni 3 prop alıyor: baslik, aciklama, children.
  children = bileşenin AÇILIŞ/KAPANIŞ etiketleri ARASINA yazılan içerik.
*/

import type { ReactNode } from "react";

// TypeScript: prop'ların tiplerini önceden söylüyoruz (yazım hatasını yakalar).
// "?" işareti → o prop İSTEĞE BAĞLI (verilmese de olur).
type KartProps = {
  baslik: string;
  aciklama?: string;
  children: ReactNode;   // ReactNode = "içine her türlü JSX gelebilir" demek
  vurgu?: boolean;       // mavi vurgulu kart mı?
};

// Props'u { } ile "söküyoruz" (destructuring) → doğrudan baslik, aciklama... kullanırız.
function Kart({ baslik, aciklama, children, vurgu }: KartProps) {
  return (
    // className'i koşullu veriyoruz: vurgu true ise "kart vurgu", değilse "kart"
    <section className={vurgu ? "kart vurgu" : "kart"}>
      <h2>{baslik}</h2>

      {/* aciklama VERİLDİYSE göster. "&&" → soldaki doğruysa sağdakini bas. */}
      {aciklama && <p className="aciklama">{aciklama}</p>}

      {/* children = etiketler arasına konan içerik buraya yerleşir */}
      {children}
    </section>
  );
}

export default Kart;   // başka dosyalardan kullanabilmek için "dışa aktar"
