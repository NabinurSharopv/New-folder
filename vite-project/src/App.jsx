import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>To-Do List</h3>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Add
      </button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => dispatch(deleteTodo(t.id))}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
