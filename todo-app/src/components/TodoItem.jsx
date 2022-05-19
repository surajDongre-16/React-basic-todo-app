import React, {useState} from "react"
import styles from "./todo.module.css"

const TodoItem=({todo})=>{

    const [isCompleted,setIsCompleted] = useState(todo.isCompleted)
   

    return (
                <div className={styles.todo} key={todo.id}>
                    <label className={isCompleted ? styles.striked : ""}>{todo.value}</label>
                    <input className={styles.checkbox} type="checkbox" checked={isCompleted} onChange={(e)=>{
                        setIsCompleted(e.target.checked)                   
                    }}/>
                    
                </div>
    )
}

export default TodoItem