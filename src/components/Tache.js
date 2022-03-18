import React, { useEffect } from "react";

export default function Todo({todo, titre, complete, tache, deleteTodo, removeTodo, uptadeTodo, tacheFini, statue, changeStatusTodo, changeStatusTodoStart}) {
    
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

    function handlechangeStatusTodoStartClick() {
        changeStatusTodoStart(todo.id);
    }
    return(

        <div className=" col">
        <div className="card-body">
        <input type="checkbox"onClick={handlechangeStatusTodoClick} id="checkbox"></input>
        <label for='checkbox'> mettre en fini</label><br></br>
        <input type="checkbox"onClick={handlechangeStatusTodoStartClick} id='checkbox'></input>
        <label for='checkbox'> mettre à faire</label>
            <h5 className="card-title">{titre}</h5>
            <p className="card-text">{tache}</p>
            <button onClick={handleRemoveClick}  className="hoverBtnDelete btn btn-warning">Supprimer</button>
        </div>
    </div>

    )
}