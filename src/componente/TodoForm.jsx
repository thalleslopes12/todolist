import { useState }  from 'react'

const TodoForm = ({addTodo}) => {
  const  [value, setValue] = useState("");
  const  [category, setCategory] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value || !category) return;
      addTodo(value, category);
      setValue("");
      setCategory("");
    }
    
        
  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
          <form onSubmit={handleSubmit}>
            <input type='text' 
            placeholder='Digite o titulo' 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Selecione uma categoria</option>
              <option value="Ciencias da Natureza">Ciencias da Natureza</option>
              <option value="Matematica">Matematica</option>
              <option value="Portugues">Portugues</option>
              <option value="Ciencias Humanas">Ciencias Humanas</option>
              <option value="Ed. física">Educação física</option>
            </select>
            <button>Criar tarefa</button>
          </form>
            
    </div>

  )
}
  


export default TodoForm