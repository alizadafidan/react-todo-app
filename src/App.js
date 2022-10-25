import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useeffect
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local
  const saveLocalTodos = () => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <Fragment>
      <div className="App">
        <header>
          <h1>To-Do List</h1>
        </header>{" "}
        <Form
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          inputText={inputText}
          setStatus={setStatus}
        ></Form>
        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
        ></TodoList>
      </div>
    </Fragment>
  );
}

export default App;
