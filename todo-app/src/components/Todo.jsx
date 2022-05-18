import React, {useState} from "react"
import TodoList from "./TodoList"
import styles from "./todo.module.css"
import TodoItem from "./TodoItem"
const Todo=()=>{

    const [value,setValue]=useState("")
    const [todos,setTodo] = useState([])

    return (
        <div>
            <h1>Todo App</h1>
            <input className={styles.input} type="text" value={value} placeholder="enter your todo" onChange={(e)=>{
                setValue(e.target.value)
            }}/>
            <button className={styles.btn} onClick={()=>{
                setTodo([...todos,{
                    id: Date.now(), value: value, isCompleted:false
                }])
                setValue("")
            }}>Add</button>
            <br />
            <TodoList/>
            <div className={styles.todolist}>
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo}/>
            ))}
            </div>
            
        </div>
    )
}

export default Todo