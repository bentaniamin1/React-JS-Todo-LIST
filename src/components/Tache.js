import React from "react";

export default function Todo({todo, titre, tache, deleteTodo, removeTodo, uptadeTodo, tacheFini, statue, changeStatusTodo}) {
    function handleButtonDelete() {
        deleteTodo(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    function handleUptadeClick() {
        uptadeTodo(todo.id);
    }

    function handleTacheFiniClick() {
        tacheFini(todo.id);
    }
    function handlechangeStatusTodoClick() {
        changeStatusTodo(todo.id);
    }
    return(

        <div className=" col">
        <div className="card-body">
        <input type="checkbox"onClick={handlechangeStatusTodoClick}></input>
            <h5 className="card-title">{titre}</h5>
            <p className="card-text">{tache}</p>
            <button onClick={handleRemoveClick}  className="hoverBtnDelete btn btn-warning">Supprimer</button>
        </div>
    </div>

    )
}