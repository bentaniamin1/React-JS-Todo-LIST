import React from "react";
import TodoFini from "./TacheFini";

export default function TodoListFini({todos , deleteTodo, removeTodo1, uptadeTodo, tacheFini, }) {
    return (
        <div className="row">
            {todos.filter(e => e.complete === true).map(todo => (
                <TodoFini key={todo.id} todo={todo} titre={todo.titre} tache={todo.tache} deleteTodo={deleteTodo} removeTodo1={removeTodo1} uptadeTodo={uptadeTodo} tacheFini={tacheFini}  />
            ))}

        </div>
    );
}