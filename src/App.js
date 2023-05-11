import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './form.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    hasTrunfo: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    onSaveButtonClick: '',
    savedCards: [],
  };

  buttonValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const max = 90;
    const total = 210;
    const validationCard = cardName !== '' && cardDescription !== '' && cardImage !== '';
    const validationAttr = Number(cardAttr1) <= max
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) <= max
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) <= max
      && Number(cardAttr3) >= 0
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= total;
    console.log(Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
    console.log(validationCard, validationAttr);
    if (validationCard && validationAttr) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const valueField = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        // ...prev,
        [name]: valueField,
        // savedCards: [...prev.savedCards, saveCards],
      },
      () => this.buttonValidation(),
    );
  };

  hasTrunfo = () => {
    const { savedCards } = this.state;
    return savedCards.some((elem) => elem.cardTrunfo);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const cards = { ...this.state };
    delete cards.savedCards;
    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: false,
      savedCards: [...prev.savedCards, cards],
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      savedCards,
    } = this.state;

    return (
      <div>
        <div className="title">
          <h1>Tryunfo</h1>
        </div>
        <div className="cards">
          <div className="left">
            <h1>Adicione Nova Carta</h1>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              hasTrunfo={ this.hasTrunfo() }
            />
          </div>
          <div className="right">
            <h1>Pré-visualização</h1>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              // onInputChange={ this.onInputChange }
              // onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="newCards">
            <ul>
              {
                savedCards.map((elem) => (
                  <li key={ elem.cardName }><Card { ...elem } /></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
