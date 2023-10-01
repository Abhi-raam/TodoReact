import { useState } from "react";
import Footer from "./Components/Footer";
import Completed from "./Components/Completed";
import Active from "./Components/Active";
import AllTodo from "./Components/AllTodo";

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  function addTodos() {
    setTodos([...todos, { id: Date.now(), text: todo, status: false }])
    setTodo("")
  }
  return (
    <div className="bg-slate-700 sm:h-[100vh] relative min-h-screen">
      <div className="  py-20 text-3xl text-slate-200 text-center  font-semibold">
        <div className=" cursor-pointer flex justify-center">
          <h1 className="  mr-6">TODO LIST</h1>
          <i className="animate-bounce delay-1000 transition duration-1000 fa-sharp py-5 fa-lg fa-solid fa-list-check"></i>
        </div>
      </div>
      <div className=" text-center">
        <input value={todo} onChange={(e) => { setTodo(e.target.value) }} onKeyUp={((event => {
          if (event.keyCode === 13) {
            event.preventDefault();
            setTodos([...todos, { id: Date.now(), text: todo, status: false }])
            setTodo("");
          }
        }))} type="text" placeholder=" Add Todos. . . " className="rounded pl-1 sm:w-96 w-72 h-9 outline-none" />
        <button onClick={addTodos} className="bg-sky-600 rounded h-9 w-9"><i className="fa-sharp fa-solid fa-check"></i></button>
      </div>


      {todos.length > 0 ?
        <div className="sm:py-15 py-20 sm:justify-around text-center  sm:flex">
          <AllTodo todos={todos} setTodos={setTodos} />
          <Active todos={todos} setTodos={setTodos} />
          <Completed todos={todos} setTodos={setTodos} />
        </div>
        : null}
      <Footer />
    </div>
  );
}

export default App;
