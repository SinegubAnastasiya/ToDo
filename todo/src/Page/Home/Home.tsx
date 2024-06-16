import { useState } from "react";

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

    const deleteTask = (id: number) => setTask(task.filter((el) => el.id !== id))

    return <>
        {task.map((el, i) => <div key={i}>{el.todo} <button onClick={() => deleteTask(el.id)}>Delete</button></div>)}
    </> 
}

export default Home;