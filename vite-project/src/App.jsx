import { useDispatch, useSelector } from "react-redux"
import {addTodo , deleteTodo  } from ".todoSlice";
import { useState } from "react";

const App = () => {
const  [ text , setText ] = useState("");
const todos = useSelector((state)  => state.todo);
const dispatch = useDispatch();
  return (
    <>
      <h3>Todo Lits</h3>  
    
    <input value={text}  onChange={(e) setText(e.target.value)} />
   <button   onClick={() => { dispatch(addTodo(text)); setText("");}} >Add</button>
     <ul>
       {
        todos.map((t) => {
          <li key={t.id}>
            {t.text}
            <button onClick={() =>  dispatch(deleteTodo (t.id))}>
              x
            </button>
          </li>
        })
       }
     </ul>
   </>
  )
}

export default App