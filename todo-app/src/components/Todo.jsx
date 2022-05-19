import React, {useState} from "react"
import TodoList from "./TodoList"
import styles from "./todo.module.css"
import TodoItem from "./TodoItem"
const Todo=()=>{

    const [value,setValue]=useState("")
    const [todos,setTodo] = useState([])

    return (
        <>
            <h1>Todo App</h1>
            <input className={styles.input} type="text" value={value} placeholder="Write Something" onChange={(e)=>{
                setValue(e.target.value)
            }}/>
            <button className={styles.btn} onClick={()=>{
                setTodo([...todos,{
                    id: Date.now(), value: value, isCompleted:false
                }])
                setValue("")
            }}>+</button>
            <br />
            <TodoList>
                <div className={styles.todolist}>
                {todos.map((todo)=>(
                    <TodoItem key={todo.id} todo={todo}/>
                ))}
                </div>
            </TodoList>
            
        </>
    )
}

export default Todo