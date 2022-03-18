import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import FormTache from './FormTache';
import TodoList from './components/TodoList';
import TodoListFini from './components/TodoListFini';
import TodoListStart from './components/TodoListStart';


function App() {
  const [cards, setCards] = useState([

    {
      id: 1,
      titre: 'fdfddsfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      tache: 'fdfddsfgfffffs',
      complete: "true/false"
    },
    {
      id: 3,
      titre: 'fdfddsfs',
      tache: 'fdfddsfgfffffs',
      complete: false
    },
    {
      id: 10,
      titre: 'fdfddsfs',
      tache: 'fdfddsfgfffffs',
      complete: true
    }
    
  ]);

  function deleteTodo(id) {
    setCards(
      cards.map( card => {
        if(card.id ===id) {
          return {
            ...card,
          };
        }
        return card;
      })
    );

  }
  const [newCardsItems1, setCardsItems] = useState([...cards])
  function tacheFini(index,id) {
    const newCardsItems1 = [...cards];
    // eslint-disable-next-line no-unused-expressions
    newCardsItems1[index].complete ===false ? (newCardsItems1[index].complete === true) : (newCardsItems1[index].complete === false);
    setCardsItems(newCardsItems1);
    setCardsItems(
      cards.map( card => {
        if(card.complete === true) {
          return {
            ...card,
          };
        }
        return card;
      })
    );

  }
  // Suppresion des tâches
  function removeTodo(id) {
    setCards(cards.filter(card=> card.id !== id));
  }

  function changeStatusTodo(id) {
    setCards(
      cards.filter(card=> card.id !== id));
    
      setCards(
        cards.map( card => {
          if(card.id ===id) {
            card.complete = true
            return {
              ...card,
            };
          }
          return card;
        })
      )
  }
  // change status des tâches à faire
  function changeStatusTodoStart(id) {
    setCards(
      cards.filter(card=> card.id !== id));
    
      setCards(
        cards.map( card => {
          if(card.id ===id) {
            card.complete = "true/false"
            return {
              ...card,
            };
          }
          return card;
        })
      )
  }
  //Change status
  function changeStatusTodoFalse(id) {
    setCards(
      cards.filter(card=> card.id !== id));
    
      setCards(
        cards.map( card => {
          if(card.id ===id) {
            card.complete = false
            return {
              ...card,
            };
          }
          return card;
        })
      )
  }

  

  // function uptadeTodo(id) {
  //   const newCardsItems = [...cards];
  //   console.log(newCardsItems);
  //   setCards(
  //     newCardsItems
  //   );
  //   ;
  // }

  
  
  const completed = true;
  return (
    <div className="container my-3">
      <FormTache setCards={setCards} cards={cards}/>
      <h1>à faire</h1>
      <TodoListStart todos={cards} deleteTodo={deleteTodo} removeTodo={removeTodo} tacheFini={tacheFini} statue={completed} changeStatusTodo={changeStatusTodo} changeStatusTodoFalse={changeStatusTodoFalse} />

        <h1>En cours</h1>
        <TodoList todos={cards} deleteTodo={deleteTodo} removeTodo={removeTodo} tacheFini={tacheFini} statue={completed} changeStatusTodo={changeStatusTodo} changeStatusTodoStart={changeStatusTodoStart} />
        <h1>Fini</h1>
        <TodoListFini todos={cards} deleteTodo={deleteTodo} removeTodo={removeTodo} tacheFini={tacheFini} changeStatusTodoFalse={changeStatusTodoFalse} changeStatusTodoStart={changeStatusTodoStart} />
        
    </div>

  );
}

export default App;
