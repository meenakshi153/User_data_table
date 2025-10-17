import React, { useEffect, useState } from 'react'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const Onemoretimelearningtodolist = () => {

    const[task, setTask] = useState("")
    const[todo, setTodo] = useState([])
    const[editing, setEditing] = useState(false)
    const[currentindex, setCurrentindex] = useState(null)


    const handleSubmit = (e)=>{
        e.preventDefault()

        if(task.trim() === ""){
            toast.warning("Todo Will be Empty Add a task!")
            return
        }
            
            if(editing){
                const upadatedtodo = [...todo]
                upadatedtodo[currentindex] = task
                setTodo(upadatedtodo)
                setEditing(false)
                setCurrentindex(null)
                toast.success("Task Edited!")
            }else{
                setTodo([...todo, task])
                toast.success("New task Added!")
            }
            setTask("")
        } 

        
    


    const deletetask = (index)=> {
        setTodo(todo.filter((_, i)=> i !== index))
        toast.error("Task Will be Deleted!")
    }

    const editingtask = (index)=> {
        setTask(todo[index])
        setEditing(true)
        setCurrentindex(index)
    }


    useEffect(()=> {
        const saved_task = JSON.parse(localStorage.getItem("todo"))
        if(saved_task){
            setTodo(saved_task)
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem("New Task Wiill be Added", JSON.stringify(todo))
    }, [todo])
    


  return (
    <div>
        <h1>Todo List</h1>

        <form onSubmit={handleSubmit}>

        <input 
            type='text'
            placeholder='Enter Your Task'
            value={task}
            onChange={(e)=> setTask(e.target.value)}
        />

        <button type='submit' className='ext-lg bg-green-500 border-r-3 p-2'>Add Task</button>

        </form>

        <ul>
            {todo.map((item, index)=> (
                <li key={index}>

                    <button onClick={()=> editingtask(index)} className='text-lg bg-green-500 border-r-3 p-2 mr-5'>Edit Task</button>

                    {item}

                    <button onClick={()=> deletetask(index)} className='text-lg bg-red-500 border-r-3 p-2 ml-5'>Delete Task</button>

                </li>
            ))}
        </ul>

        <ToastContainer />

    </div>
  )
}

export default Onemoretimelearningtodolist