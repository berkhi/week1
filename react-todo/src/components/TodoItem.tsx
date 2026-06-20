/*
  ============================================================
  BİLEŞEN: TodoItem  (TEK bir görev satırı)
  ============================================================
  Bu bileşen sadece "gösterir" + "haber verir". Kendi state'i YOK.
  - todo     → gösterilecek görev (prop)
  - onToggle → kutucuk değişince App'e "şunu işaretle" der (prop fonksiyon)
  - onSil    → Sil'e basınca App'e "şunu sil" der (prop fonksiyon)
*/

import type { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onSil: (id: number) => void;
};

function TodoItem({ todo, onToggle, onSil }: TodoItemProps) {
  return (
    // tamamlanmışsa "tamam" sınıfını da ekle (CSS üstünü çizecek)
    <li className={todo.tamam ? "todo-item tamam" : "todo-item"}>
      <label className="todo-sol">
        {/*
          Kontrollü checkbox: işaretli olup olmadığı todo.tamam'a bağlı.
          Değişince onToggle(id) ile App'e haber ver.
        */}
        <input
          type="checkbox"
          checked={todo.tamam}
          onChange={() => onToggle(todo.id)}
        />
        <span className="todo-metin">{todo.metin}</span>
      </label>

      <button className="sil-btn" onClick={() => onSil(todo.id)}>
        Sil
      </button>
    </li>
  );
}

export default TodoItem;
