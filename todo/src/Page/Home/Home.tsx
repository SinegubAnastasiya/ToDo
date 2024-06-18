import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { iTask } from "../../interfaces";

function Home() {
    const [task, setTask] = useState<iTask[]>([])

    const inp = useRef<HTMLInputElement>(null)

    const deleteTask = (id: number) => setTask(task.filter((el) => el.id !== id))
    const addTask = () => setTask([...task, {id: Math.floor(Math.random() * 999), todo: inp.current?.value, completed: false, userId: 152}])

    const getTask = async () => {
        const response = await axios.get('https://dummyjson.com/todos')
        setTask(response.data.todos)
    }

    useEffect(() => {
        getTask()
    }, [])

    return <>
        {task.map((el: iTask, i: number) => <div key={i}>{el.todo} <button onClick={() => deleteTask(el.id)}>Delete</button></div>)}

        <input ref={inp}/>
        <button onClick={addTask}>Add Item</button>
    </> 
}

export default Home;