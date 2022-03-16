import React from "react";
import Todo from "./Tache";

export default function TodoList({todos , deleteTodo, removeTodo, uptadeTodo, tacheFini, changeStatusTodo}) {
    return (
        <div className="row">
            {todos.filter(e => e.complete === false).map(todo => (
                <Todo key={todo.id} todo={todo} titre={todo.titre} tache={todo.tache} deleteTodo={deleteTodo} removeTodo={removeTodo} uptadeTodo={uptadeTodo} tacheFini={tacheFini} changeStatusTodo={changeStatusTodo} />
            ))}

        </div>
    );
}
