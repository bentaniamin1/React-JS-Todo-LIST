import React from "react";

export default function TodoListFini({todo, titre, tache, deleteTodo, removeTodo, uptadeTodo, tacheFini, statue, changeStatusTodoFalse, changeStatusTodoStart}) {
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
    function handlechangeStatusTodoFalseClick() {
        changeStatusTodoFalse(todo.id);
    }

    function handlechangeStatusTodoStartClick() {
        changeStatusTodoStart(todo.id);
    }
    return(

        <div className=" col">
        <div className="card-body">
        <input type="checkbox"onClick={handlechangeStatusTodoFalseClick} id='checkbox'></input>
        <label for='checkbox'> mettre en cours</label><br></br>
        <input type="checkbox"onClick={handlechangeStatusTodoStartClick} id='checkbox'></input>
        <label for='checkbox'> mettre à faire</label>
            <h5 className="card-title">{titre}</h5>
            <p className="card-text">{tache}</p>
            <button onClick={handleRemoveClick}  className="hoverBtnDelete btn btn-warning">Supprimer</button>
        </div>
    </div>

    )
}