import React from 'react';
import './Calculator.css';
// import operate from '../logic/operate';
// import calculate from '../logic/calculate';

class Calculator extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="returnSection">
          0
        </div>
        <div className="digits">
          <button type="button" className="digits-elts">AC</button>
          <button type="button" className="digits-elts">+/-</button>
          <button type="button" className="digits-elts">%</button>
          <button type="button" className="digits-elts operator">÷</button>
          <button type="button" className="digits-elts">7</button>
          <button type="button" className="digits-elts">8</button>
          <button type="button" className="digits-elts">9</button>
          <button type="button" className="digits-elts operator">x</button>
          <button type="button" className="digits-elts">4</button>
          <button type="button" className="digits-elts">5</button>
          <button type="button" className="digits-elts">6</button>
          <button type="button" className="digits-elts operator">-</button>
          <button type="button" className="digits-elts">1</button>
          <button type="button" className="digits-elts">2</button>
          <button type="button" className="digits-elts">3</button>
          <button type="button" className="digits-elts operator">+</button>
        </div>
        <span className="end">
          <button type="button" className="digits-elts">0</button>
          <button type="button" className="digits-elts ">.</button>
          <button type="button" className="digits-elts operator">=</button>
        </span>
      </section>
    );
  }
}

export default Calculator;
