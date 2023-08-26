import { useState } from "react";

function Todo({ TodoData, isfinished, changefinished, ondelete, onedit }) {
  const [finished, setFinished] = useState(isfinished);
  const [isediting, setIsediting] = useState(false);
  const [editText, setEdittext] = useState(TodoData);

  return (
    <>
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changefinished(e.target.checked);
        }}
      />
      {isediting ? 
        <input
          type="text"
          value={editText}
          onChange={e => setEdittext(e.target.value)}
        />
       : 
        <span>{TodoData}</span>
      }
      <button
        onClick={() => {
          setIsediting(!isediting);
          onedit(editText);
        }}
      >
        {(!isediting) ? "Edit" : "Save"}
      </button>
      <button onClick={ondelete}>delete</button>
    </>
  );
}

export default Todo;
