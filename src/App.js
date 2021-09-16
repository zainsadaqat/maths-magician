import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digitObj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  render() {
    const { digitObj } = this.state;
    console.log(digitObj);
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
