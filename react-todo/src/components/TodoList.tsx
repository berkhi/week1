/*
  ============================================================
  BİLEŞEN: TodoList  (görevleri listeler)
  ============================================================
  Görev dizisini alır, her birini bir <TodoItem />'a çevirir (Ders 03: map).
  Aldığı onToggle/onSil fonksiyonlarını olduğu gibi TodoItem'a geçirir
  (props "yukarıdan aşağıya" akar).
*/

import type { Todo } from "../types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onSil: (id: number) => void;
};

function TodoList({ todos, onToggle, onSil }: TodoListProps) {
  // Liste boşsa (koşullu render): farklı bir şey göster.
  if (todos.length === 0) {
    return <p className="bos">Burada görev yok 🎉</p>;
  }

  return (
    <ul className="todo-listesi">
      {/* map → her todo nesnesini bir TodoItem bileşenine çevir.
          key={todo.id} → React'in satırları ayırt etmesi için zorunlu. */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onSil={onSil}
        />
      ))}
    </ul>
  );
}

export default TodoList;
