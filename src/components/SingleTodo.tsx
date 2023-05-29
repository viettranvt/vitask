import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface Props {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todoList, setTodoList }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              todo: editTodo,
            }
          : todo
      )
    );

    setEdit(false);
  };

  //   const inputRef = useRef<HTMLInputElement>(null);

  //   useEffect(() => {
  //     inputRef.current?.focus();
  //   }, [edit]);

  return (
    <form className="todo__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          //   ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todo__single--text"
        />
      ) : todo.isDone ? (
        <s className="todo__single--text">{todo.todo}</s>
      ) : (
        <span className="todo__single--text">{todo.todo}</span>
      )}

      <div>
        {/* <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span> */}
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
