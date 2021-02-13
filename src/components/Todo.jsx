import React, { useState, useReducer } from 'react';

const initialState = {
  todo: []
}

const elements = [
  {
    name: 'Task1',
    id: 1
  },
  {
    name: 'Task2',
    id: 2,
  },
  {
    name: 'Task3',
    id: 3
  }
]


const Todo = () => {
  const [data, setData] = useState([]);
  const [todos, dispatch] = useReducer(dataReducer, initialState);

  const handleClick = todo => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  }

  return (
    <div>
      <h1>Todo</h1>
      <div className="todos">
        {elements?.map(el => (
          <button key={`Elemnt-${el.id}`} onClick={() => handleClick(el)}>
            {el.name}
          </button>
        ))}
        <h2>TODOS</h2>
        {todos.todo?.map(todo => (
          <span>{todo.name}</span>
        ))}
      </div>
    </div>
  );
}

export default Todo;