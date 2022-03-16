import React from "react";
import TodoNotStart from "./TacheNotStart";

export default function TodoList({todos , deleteTodo, removeTodo, uptadeTodo, tacheFini, changeStatusTodo, changeStatusTodoStart, changeStatusTodoFalse}) {
    return (
        <div className="row">
            {todos.filter(e => e.complete === "true/false").map(todo => (
                <TodoNotStart key={todo.id} todo={todo} titre={todo.titre} tache={todo.tache} deleteTodo={deleteTodo} removeTodo={removeTodo} uptadeTodo={uptadeTodo} tacheFini={tacheFini} changeStatusTodo={changeStatusTodo} changeStatusTodoFalse={changeStatusTodoFalse}  />
            ))}

        </div>
    );
}