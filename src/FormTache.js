import React from "react";
import { v4 as uuid } from 'uuid';

export default class FormTache extends React.Component {
  setCards = this.props.setCards;

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
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
    const newItem = {
      id: uuid(),
      titre: this.state.title,
      tache: this.state.content,
      complete: false
    };

    this.setCards(prev => [...prev, newItem]);
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
