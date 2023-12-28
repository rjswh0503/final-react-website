import React, {useState, useEffect } from 'react';
import Button from '@mui/material/Button';



  
  function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [count, setCount] = useState(0);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editTodo, setEditTodo] = useState(''); 
  
    const addTodo = () => {
      setTodos([...todos, newTodo]);
      setNewTodo('');
      setCount((count) => count + 1);
    };
  
    const removeTodo = (index) => {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
      setCount((count) => count - 1);
    };
  
    const startEditing = (index, todo) => {
      setEditingIndex(index);
      setEditTodo(todo);
    };
  
    const saveEdit = () => {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = editTodo;
      setTodos(updatedTodos);
      setEditingIndex(null);
    };
  
    const cancelEdit = () => {
      setEditingIndex(null);
      setEditTodo('');
    };
  
    useEffect(() => {
      document.title = `WebPage`;
    }, [count]);
  
    return (
      <div>
        <h2>To do List</h2>
        <div>
        <div className='list'>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button variant="contained" onClick={addTodo}>추가하기</Button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                  />
                  <Button variant="contained" onClick={saveEdit}>저장</Button>
                  <Button variant="contained" onClick={cancelEdit}>취소</Button>
                </div>
              ) : (
                <div>
                  {todo}
                  <Button variant="contained" onClick={() => startEditing(index, todo)}>
                    수정하기
                  </Button>
                  <Button variant="contained" onClick={() => removeTodo(index)}>삭제하기</Button>
                </div>
              )}
            </li>
          ))}
        </ul>
        </div>
      </div>
    );
  }
  
  function MiniApp() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
  
  export default MiniApp;