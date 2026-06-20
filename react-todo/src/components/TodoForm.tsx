/*
  ============================================================
  BİLEŞEN: TodoForm  (yeni görev ekleme formu)
  ============================================================
  Bu bileşenin KENDİ küçük state'i var: input'a yazılan metin.
  Ama görevi gerçekten LİSTEYE eklemek App'in işi (liste orada).
  O yüzden App'ten "onEkle" adında bir FONKSİYON prop'u alıyoruz
  ve ekleme anında onu çağırıyoruz → "olay yukarı çıkar".
*/

import { useState, type FormEvent } from "react";

// Prop tipi: onEkle, bir metin alıp hiçbir şey döndürmeyen bir fonksiyon.
type TodoFormProps = {
  onEkle: (metin: string) => void;
};

function TodoForm({ onEkle }: TodoFormProps) {
  // input'taki metni tutan state (kontrollü input)
  const [metin, setMetin] = useState("");

  // Form gönderilince (Ekle butonu VEYA Enter):
  function gonder(e: FormEvent) {
    e.preventDefault();            // formun sayfayı YENİLEMESİNİ engelle (önemli!)
    const temiz = metin.trim();    // baş/son boşlukları at
    if (temiz === "") return;      // boş görev ekleme
    onEkle(temiz);                 // App'e haber ver: "şu görevi ekle"
    setMetin("");                  // kutuyu temizle
  }

  return (
    // <form onSubmit> sayesinde Enter'a basınca da gonder() çalışır.
    <form className="todo-form" onSubmit={gonder}>
      <input
        value={metin}
        onChange={(e) => setMetin(e.target.value)}
        placeholder="Yeni görev yaz..."
      />
      <button type="submit">Ekle</button>
    </form>
  );
}

export default TodoForm;
