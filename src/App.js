import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './form.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1>Tryunfo</h1>
        </div>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
