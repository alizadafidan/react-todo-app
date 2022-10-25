import React, { Fragment } from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <Fragment>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => {
            return (
              <Todo
                setTodos={setTodos}
                todos={todos}
                todo={todo}
                key={todo.id}
                text={todo.text}
              ></Todo>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}

export default TodoList;
