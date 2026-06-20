/*
  ============================================================
  App — To-Do uygulamasının BEYNİ
  ============================================================
  REACT'İN KALBİ olan fikir burada:

    • DURUM (state) tek bir yerde yaşar → burada (App).
    • Veri AŞAĞI akar  → props ile alt bileşenlere (TodoForm, TodoList...).
    • Olaylar YUKARI çıkar → alt bileşenler, App'in verdiği fonksiyonları çağırır.

  Buna "state'i yukarı taşımak" (lifting state up) denir. Liste burada
  tutulur; ekleme/silme/işaretleme hep buradaki fonksiyonlarla yapılır.
*/

import { useState } from "react";
import "./App.css";
import type { Todo } from "./types";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

type Filtre = "hepsi" | "aktif" | "tamam";

function App() {
  // useState<Todo[]> → "state, Todo'lardan oluşan bir dizidir" (TS'e söylüyoruz).
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, metin: "React öğren", tamam: true },
    { id: 2, metin: "To-Do uygulaması yap", tamam: false },
    { id: 3, metin: "GitHub'a push'la", tamam: false },
  ]);

  const [filtre, setFiltre] = useState<Filtre>("hepsi");

  /*
    EKLE → Ders 04 (spread): eski listeyi KOPYALA, sonuna yeniyi ekle.
    Diziyi DEĞİŞTİRMEYİZ (push yok); YENİ dizi veririz. React bunu sever.
    id için Date.now() (o anki zaman) → basit benzersiz sayı.
  */
  function gorevEkle(metin: string) {
    const yeni: Todo = { id: Date.now(), metin, tamam: false };
    setTodos([...todos, yeni]);
  }

  /*
    İŞARETLE → Ders 03 (map) + Ders 04 (spread):
    Her görevi gez; eşleşeni {...t, tamam tersine} olarak yenile, diğerlerini olduğu gibi bırak.
  */
  function gorevToggle(id: number) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, tamam: !t.tamam } : t))
    );
  }

  /*
    SİL → Ders 03 (filter): id'si EŞLEŞMEYENLERİ tut → eşleşen düşer.
  */
  function gorevSil(id: number) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  // Filtreye göre ekranda gösterilecek liste (yine filter):
  const gosterilen = todos.filter((t) => {
    if (filtre === "aktif") return !t.tamam;   // yapılmamışlar
    if (filtre === "tamam") return t.tamam;    // yapılmışlar
    return true;                               // hepsi
  });

  // "Kaç görev kaldı" (yapılmamışların sayısı):
  const kalan = todos.filter((t) => !t.tamam).length;

  return (
    <div className="sayfa">
      <h1>📝 Yapılacaklar</h1>

      {/* TodoForm'a "ekle" fonksiyonunu prop olarak veriyoruz */}
      <TodoForm onEkle={gorevEkle} />

      <div className="filtre-bar">
        <div className="filtreler">
          {/* Üç filtre butonunu da map ile üretelim (kod tekrarı olmasın) */}
          {(["hepsi", "aktif", "tamam"] as Filtre[]).map((f) => (
            <button
              key={f}
              className={filtre === f ? "aktif" : ""}
              onClick={() => setFiltre(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <span className="kalan">{kalan} görev kaldı</span>
      </div>

      {/* Listeyi + olay fonksiyonlarını aşağı geçiriyoruz */}
      <TodoList todos={gosterilen} onToggle={gorevToggle} onSil={gorevSil} />
    </div>
  );
}

export default App;
