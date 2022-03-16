import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import FormTache from './FormTache';
import TodoList from './components/TodoList';
import TodoListFini from './components/TodoListFini';


function App() {
  const [cards, setCards] = useState([

    {
      id: 1,
      titre: 'fdfddsfs',
      tache: 'fdfddsfgfffffs',
      complete: true
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
      complete: false
    },
    {
      id: 11,
      titre: 'fdfddsfs',
      tache: 'fdfddsfgfffffs',
      complete: false
    },
    {
      id: 12,
      titre: 'fdfddsfs',
      tache: 'fdfddsfgfffffs',
      complete: true
    },
    {
      id:2,
      titre: 'fdfddsddddddddddddddfsTrue',
      tache: 'fdfddsfgfffffs',
      complete: true
    },
    
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

  function removeTodo(id) {
    setCards(cards.filter(card=> card.id !== id));
  }

  function changeStatusTodo(id) {
    setCards(cards.filter(card=> card.id !== id));
    cards.complete=true;
  }

  function removeTodo1(id) {
    setCardsItems(newCardsItems1.filter(card=> card.id !== id));
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
      <FormTache setCards={setCards}/>
        <h1>En cours</h1>
        <TodoList todos={cards} deleteTodo={deleteTodo} removeTodo={removeTodo} tacheFini={tacheFini} statue={completed} changeStatusTodo={changeStatusTodo} />
        <h1>Finiiiiii</h1>
        <TodoListFini todos={newCardsItems1} deleteTodo={deleteTodo} removeTodo1={removeTodo1} tacheFini={tacheFini} />
        
    </div>

  );
}

export default App;
