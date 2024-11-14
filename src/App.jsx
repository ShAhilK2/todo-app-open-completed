import React, { useEffect, useState } from "react";
import { Header } from "./componnets/Header";
import { Tabs } from "./componnets/Tabs";
import { TodoList } from "./componnets/TodoList";
import { TodoInput } from "./componnets/TodoInput";

function App() {
  const initialTodo = [
    { input: "Go to Gym", complete: true },
    { input: "Go to Office", complete: false },
    { input: "Go for Grocery", complete: true },
    { input: "Go for Movie", complete: false },
  ];

  const [todos, setTodos] = useState(initialTodo);
  const [selectedTab, setSelectedTab] = useState("Open");

  function handleSaveData(currTodo) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodo }));
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }
  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }
  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  });
  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
