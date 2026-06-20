/*
  ============================================================
  BİLEŞEN: CiftTekKontrol  (interaktif)
  ============================================================
  REACT'İN 3. TEMEL FİKRİ: useState (STATE = durum).

  Vanilla JS'te (ozet/script.js) şunu yapıyorduk:
    1. document.getElementById ile kutuyu bul
    2. .textContent = ... ile elle güncelle

  React'te ELLE DOM güncellemiyoruz. Bunun yerine:
    - Değişebilen veriyi "state" olarak tutarız.
    - State değişince React ekranı KENDİSİ yeniden çizer.

  useState kullanımı:
      const [deger, setDeger] = useState(başlangıçDeğeri);
            ↑ okuma     ↑ değiştirme fonksiyonu

  setDeger(...) çağırınca → React bu bileşeni baştan çalıştırıp ekranı tazeler.
*/

import { useState } from "react";

function CiftTekKontrol() {
  // 1) input'a yazılan sayıyı tutan state (başlangıçta boş metin)
  const [sayi, setSayi] = useState("");

  // 2) ekranda gösterilecek sonucu tutan state
  const [sonuc, setSonuc] = useState("");

  // Butona tıklanınca çalışacak fonksiyon
  const kontrolEt = () => {
    if (sayi === "") {
      setSonuc("Önce bir sayı yaz 🙂");
      return;
    }
    const n = Number(sayi);                       // metni sayıya çevir
    const tip = n % 2 === 0 ? "ÇİFT" : "TEK";    // Ders 02: mod + ternary
    setSonuc(n + " sayısı → " + tip);             // state'i güncelle → ekran tazelenir
  };

  return (
    <div>
      <div className="form-satiri">
        {/*
          input'u state'e BAĞLIYORUZ:
            value={sayi}                → kutuda her zaman state'teki değer görünür
            onChange={...}              → kullanıcı yazınca state'i güncelle
          Buna "kontrollü input" denir: tek doğru kaynak state'tir.
        */}
        <input
          type="number"
          value={sayi}
          onChange={(e) => setSayi(e.target.value)}
          placeholder="örn. 7"
        />
        {/* onClick → tıklanınca kontrolEt fonksiyonunu çalıştır */}
        <button onClick={kontrolEt}>Kontrol et</button>
      </div>

      {/* sonuc doluysa göster (boşken hiçbir şey çıkmasın) */}
      {sonuc && <div className="cikti">{sonuc}</div>}
    </div>
  );
}

export default CiftTekKontrol;
