import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodoList([
        ...todoList,
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">ViTask</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
