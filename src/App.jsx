import './App.css'
import { useState } from 'react'
import Todo from './componente/Todo';
import TodoForm from './componente/TodoForm';
import Search from './componente/Search';
import Filter from './componente/Filter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PageInicial from './pages/PageInicial';
import Cadastro from './pages/Cadastro';




function Tarefas() {
  const [todos, setTodos] = useState([

    {
      id: 1,
      text: 'CN',
      category: 'Ciencias da Natureza',
      isCompleted: false,

    },
    {
      id: 2,
      text: 'Portugues',
      category: 'Portugues',
      isCompleted: false,

    },
    {
      id: 3,
      text: 'Math',
      category: 'Matematica',
      isCompleted: false,
    },
    {
      id: 4,
      text: 'CH',
      category: 'Ciencias Humanas',
      isCompleted: false,
    },
    {
      id: 5,
      text: 'Ed. fisica',
      category: 'Ed. fisica',
      isCompleted: false,
    },



  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");


  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ]

    setTodos(newTodos);

  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo =>
      todo.id !== id ? todo : null
    )
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ?
      todo.isCompleted = !todo.isCompleted : todo
    )
    setTodos(newTodos);

  }
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} />
      <div className='todo-list'>
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>


  )

}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PageInicial />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Tarefas />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </Router>
  )
}


export default App
