import React from 'react'

function Completed({ todos, setTodos }) {
    return (
        <div>
            <div className="py-8 sm:py-0">
                <h1 className="text-white text-xl">Completed Todos</h1>
                {todos.map((obj) => {
                    if (obj.status) {
                        return (
                            <div className="flex justify-between  bg-stone-200 m-2 rounded w-auto p-1">
                                <input defaultChecked  type="checkbox" className="mr-3 flex cursor-pointer justify-start" name="" id="" />
                                <del><p className="text-stone-900 font-semibold">{obj.text}</p></del>
                                <i onClick={() => {
                                    setTodos(todos.filter(obj2 => {
                                        return obj2.id !== obj.id
                                    }))
                                }} className="fa-sharp p-1.5 mx-5 cursor-pointer hover:bg-gray-600 hover:text-white rounded fa-solid fa-xmark"></i>
                            </div>
                        )
                    }
                })}

            </div>
        </div>
    )
}

export default Completed