import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../context/TodoContext";

function TodoList() {
  const { list, setList } = useContext(TodoContext);
  return (
    <ul>
      {list.length > 0 &&
        list.map((todo) => (
          <li key={todo.id}>
            <Todo
              TodoData={todo.TodoData}
              id={todo.id}
              isfinished={todo.finished}
              changefinished={(isfinished) => {
                const updatedList = list.map((t) => {
                  if (t.id === todo.id) {
                    todo.finished = isfinished;
                  }
                  return t;
                });
                setList(updatedList);
              }}
              ondelete={() => {
                const updatedList = list.filter((t) => t.id != todo.id);
                setList(updatedList);
              }}
              onedit={(todoText) => {
                const updatedList = list.map((t) => {
                  if (t.id === todo.id) {
                    t.TodoData = todoText;
                  }
                  return t;
                });
                setList(updatedList);
              }}
            />
          </li>
        ))}
    </ul>
  );
}

export default TodoList;
