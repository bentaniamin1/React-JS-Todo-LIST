import React from "react";

export default function TodoListFini({todo, titre, tache, deleteTodo, removeTodo1, uptadeTodo, tacheFini, statue}) {
    function handleButtonDelete() {
        deleteTodo(todo.id);
    }

    function handleRemoveClick() {
        removeTodo1(todo.id);
    }

    function handleUptadeClick() {
        uptadeTodo(todo.id);
    }

    function handleTacheFiniClick() {
        tacheFini(todo.id);
    }
    return(

        <div className=" col">
        <div className="card-body">
        <input type="checkbox"onClick={handleTacheFiniClick}></input>
            <h5 className="card-title">{titre}</h5>
            <p className="card-text">{tache}</p>
            <button onClick={handleRemoveClick}  className="hoverBtnDelete btn btn-warning">Supprimer</button>
        </div>
    </div>

    )
}