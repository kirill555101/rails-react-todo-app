import React from 'react';

import './TodosPage.css';
import TodosContainer from './TodosContainer/TodosConatainer';

const TodosPage = (props) => {
  return (
    <div>
      <div className="header">
        <h2>Todo List</h2>
      </div>
      <TodosContainer 
        todos={props.todos} dispatch={props.dispatch}
      />
    </div>
  );
}

export default TodosPage;