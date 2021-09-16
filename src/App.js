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
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
