import React from "react";
import TodoFini from "./TacheFini";

export default function TodoListFini({todos , deleteTodo, removeTodo, uptadeTodo, tacheFini, changeStatusTodoFalse, changeStatusTodoStart }) {
    return (
        <div className="row">
            {todos.filter(e => e.complete === true).map(todo => (
                <TodoFini key={todo.id} todo={todo} titre={todo.titre} tache={todo.tache} complete={todo.complete}  deleteTodo={deleteTodo} removeTodo={removeTodo} uptadeTodo={uptadeTodo} tacheFini={tacheFini} changeStatusTodoFalse={changeStatusTodoFalse} changeStatusTodoStart={changeStatusTodoStart}  />
            ))}

        </div>
    );
}