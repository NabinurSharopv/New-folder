import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./features/todo/todoSlice";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(addTodo(text))}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => dispatch(deleteTodo(t.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
