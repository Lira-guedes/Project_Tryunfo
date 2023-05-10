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
    cardTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const valueField = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((prev) => ({
      ...prev,
      [name]: valueField,
    }));
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
  };

  isSaveButtonDisabled = () => {

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
    } = this.state;

    return (
      <div>
        <div className="title">
          <h1>Tryunfo</h1>
        </div>
        <div className="cards">
          <div className="left">
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
              isSaveButtonDisabled={ this.isSaveButtonDisabled }
            />
          </div>
          <div className="right">
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
        </div>
      </div>
    );
  }
}

export default App;
