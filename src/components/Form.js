import React from 'react';
import '../form.css';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div className="form_container">
        <h1>Adicione Nova Carta</h1>
        <form>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              name="cardName"
              id="nome"
              maxLength="50"
              value={ cardName }
              data-testid="name-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="textarea"
              name="cardDescription"
              id="description"
              maxLength="100"
              value={ cardDescription }
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              id="attr1"
              minLength="0"
              value={ cardAttr1 }
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2">
            Attr02
            <input
              type="number"
              name="cardAttr2"
              id="attr2"
              minLength="0"
              value={ cardAttr2 }
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3">
            Attr03
            <input
              type="number"
              name="cardAttr3"
              id="attr3"
              minLength="0"
              value={ cardAttr3 }
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              name="cardImage"
              id="image"
              value={ cardImage }
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare">
            Raridade
            <select
              name="cardRare"
              id="rare"
              value={ cardRare }
              data-testid="rare-input"
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trunfo
            <input
              type="checkbox"
              name="cardTrunfo"
              id="trunfo"
              checked={ cardTrunfo }
              data-testid="trunfo-input"
              onChange={ onInputChange }
            />
          </label>
          <button
            type="submit"
            name="save"
            id="save"
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

// Form.defaultProps = {
//   onInputChange: () => {},
//   onSaveButtonClick: () => {},
// };

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
