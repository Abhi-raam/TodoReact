import React from 'react'
import { FaXmark } from 'react-icons/fa6'

function Completed({ todos, setTodos }) {
    return (
        <div>
            <div className="py-8 sm:py-0">
                <h1 className="text-white text-xl">Completed Todos</h1>
                {todos.map((obj) => {
                    if (obj.status) {
                        return (
                            <div className=''>
                                <div className="flex justify-between  bg-stone-200 m-5 rounded  p-1">
                                    <input defaultChecked onChange={(e) => {
                                        setTodos(todos.filter(obj2 => {
                                            if (obj2.id === obj.id) {
                                                obj2.status = e.target.checked
                                                console.log(obj.status);
                                            }
                                            return obj2
                                        }))
                                    }} value={obj.status} type="checkbox" className="mr-3 cursor-pointer flex justify-start " name="" id="" />
                                    <del><p className="text-stone-900 font-semibold">{obj.text}</p></del>
                                    <FaXmark onClick={() => {
                                        setTodos(todos.filter(obj2 => {
                                            return obj2.id !== obj.id
                                        }))
                                    }} className=" mx-5 text-lg m-1  cursor-pointer hover:bg-gray-600 hover:text-white rounded " />
                                </div>
                            </div>
                        )
                    }
                })}

            </div>
        </div>
    )
}

export default Completed