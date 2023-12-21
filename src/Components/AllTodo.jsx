import React from 'react'
import { FaXmark } from "react-icons/fa6";

function AllTodo({ todos, setTodos }) {
    return (
        <div>
            <div>
                <h1 className="text-white text-xl">All Todos</h1>
                {todos.map((obj) => {
                    return (
                        <div className="flex justify-between  bg-stone-200 m-5 rounded w-auto p-1">
                            <input  onChange={(e) => {
                                setTodos(todos.filter(obj2 => {
                                    if (obj2.id === obj.id) {
                                        obj2.status = e.target.checked
                                        console.log(obj.status);
                                    }
                                    return obj2
                                }))
                            }}  checked={obj.status} type="checkbox" className="mr-3 cursor-pointer flex justify-start" name="" id="" />
                            {obj.status ? <del><p className="text-stone-900 font-semibold">{obj.text}</p></del> : <p className="text-stone-900 font-semibold">{obj.text}</p>}
                            <FaXmark onClick={() => {
                                setTodos(todos.filter(obj2 => {
                                    return obj2.id !== obj.id
                                }))
                            }} className=" mx-5 text-lg m-1  cursor-pointer hover:bg-gray-600 hover:text-white rounded " />
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllTodo