import React, {useState} from "react"
import styles from "./todo.module.css"

const TodoItem=({todo})=>{

    const [isCompleted,setIsCompleted] = useState(todo.isCompleted)

    return (
                <div className={styles.todo} key={todo.id}>
                    <input type="checkbox" checked={isCompleted} onChange={(e)=>{
                        setIsCompleted(e.target.checked)                   
                    }}/>
                    <div >{todo.value}</div>
                </div>
    )
}

export default TodoItem