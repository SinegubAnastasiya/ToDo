import { useRef, useState } from "react";

function Home() {
    const [task, setTask] = useState([
        {
        id: 1,
        todo: "Do something nice for someone you care about",
        completed: false,
        userId: 152
        },
        {
        id: 2,
        todo: "Memorize a poem",
        completed: true,
        userId: 13
        },
        {
        id: 3,
        todo: "Watch a classic movie",
        completed: true,
        userId: 68
        }])

    const inp = useRef(null)

    const deleteTask = (id: number) => setTask(task.filter((el) => el.id !== id))
    const addTask = () => setTask([...task, {id: Math.floor(Math.random() * 999), todo: inp.current.value, completed: false, userId: 152}])

    return <>
        {task.map((el, i) => <div key={i}>{el.todo} <button onClick={() => deleteTask(el.id)}>Delete</button></div>)}

        <input ref={inp}/>
        <button onClick={addTask}>Add Item</button>
    </> 
}

export default Home;