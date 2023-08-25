import { useState } from "react";

function AddTodo({updateList}){
    const [inputText , setInputtext] = useState('')
    return(
        <>
        <div>
            <input 
            value={inputText}
            onChange={e => setInputtext(e.target.value)}
            type="text" placeholder="add todo's...." />
            <button onClick={() =>{ 
                updateList(inputText)
                setInputtext("")
                }} >Add</button>
        </div>
        </>
    )
}

export default AddTodo;