import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

export default class FormTache extends React.Component {
  setCards = this.props.setCards;
  //Formulaire
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      content: '',
      cardsItemsCount: 0,
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount(){
    // this.setState({cardsItemsCount : this.state.cardsItemsCount ++}) 

  }

  componentDidUpdate() {
    document.title = `${this.state.cardsItemsCount} tâches crée à faire`
    if(this.state.cardsItemsCount === 4) {
      document.title = `${this.state.cardsItemsCount} numero`;
      alert("Il y a trop de tache à faire encore, veuillez finir les tâches ")

    }
  }

  getTitle = (e) => {
    this.setState({ title: e.target.value });
  }
  getContent = (e) => {
    this.setState({ content: e.target.value });
    //alert('Le contenu de la tâche a été soumise : ' + this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.cardsItemsCount <= 3) {

      const newItem = {
        id: uuid(),
        titre: this.state.title,
        tache: this.state.content,
        complete: "true/false",
      };
      this.setCards(prev => [...prev, newItem]);
      this.setState({cardsItemsCount : this.state.cardsItemsCount +1}) 
    }
  };

  removeItem(index) {
    const taches = this.state.taches.filter((tache, tacheIndex) => {
      return tacheIndex !== index
    })
    this.setState({taches})
    
  }


  handleDeleteClick(event) {
    event.preventDefault();
    const arrayItem = this.state.items;
    const index = arrayItem.ndexOf(event.target.value);
    arrayItem.splice(index, 1);
    this.setCards(prev => [...prev, arrayItem ]);

  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>  
            <input type="text" className="form-control mb-3" placeholder="Titre de la tâche" onChange={this.getTitle} />
            <textarea rows="4" className="form-control mb-3" placeholder="Contenu de la tâche" onChange={this.getContent}/>
          <input type={"submit"} className="btn btn-success" value="Ajouter une tâche" />
        </form>
    );
  }
}
