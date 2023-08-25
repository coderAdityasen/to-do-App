import { useState } from "react"

function Todo( {TodoData , isfinished , changefinished , ondelete , onedit}){

    const [editText , setEdittext] = useState(TodoData)
    const [isediting , setIsediting] = useState(true)
    const [finished , setFinished] = useState(isfinished)
    return(
        <>
        <input type="checkbox" checked={finished}  onChange={(e) => {
            setFinished(e.target.checked)
            changefinished(e.target.checked)
            onedit(editText)
        }}
         />
        {(!isediting) ? <input type="text" value={editText} onChange={(e) => setEdittext(e.target.value)} /> : <span>{TodoData}</span> }
        <button onClick={() => setIsediting(!isediting) }>{(isediting ? "edit" : "save")}</button>
        <button onClick={ondelete}>delete</button>
        </>
    )
}

export default Todo

