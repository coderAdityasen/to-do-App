import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./components/context/TodoContext";

function App() {
  const [list, setList] = useState([
    { id: 1, TodoData: "todo 1", finished: false },
    { id: 2, TodoData: "todo 2", finished: false },
  ]);

  return (
    <TodoContext.Provider value={{list , setList}}>
      <AddTodo
        updateList={(todo) =>
          setList([
            ...list,
            { id: list.length + 1, TodoData: todo, finished: false },
          ])
        }
      />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
