import React, {useEffect} from 'react';
import {getTodos, createTodo, updateTodo, deleteTodo} from '../../../../logics/ajax_todos';

import './TodosContainer.css';

const TodosContainer = (props) => {
  useEffect(getTodos, [])

  return (
    <div>
      <div className="inputContainer">
        <input className="form-control" type="text" 
          placeholder="Add a task" maxLength="50" 
          onKeyPress={(e) => createTodo(e)} 
        />
      </div>
      <div className="listWrapper">
        <ul className="taskList">
          {props.todos.map((todo) => {
            return (
              <li className="task" key={todo.id}>
                <input className="form-control taskCheckbox" type="checkbox" 
                  checked={todo.done}
                  onChange={(e) => updateTodo(e, todo.id)} />              
                <label className="taskLabel">{todo.title}</label>
                <span className="deleteTaskBtn" 
                  onClick={() => deleteTodo(todo.id)}>
                  x
                </span>
              </li>
            );       
          })}        
        </ul>
      </div>
    </div>
  );
}

export default TodosContainer
