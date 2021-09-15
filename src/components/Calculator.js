import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="returnSection">
          0
        </div>
        <div className="digits">
          <div className="digits-elts">AC</div>
          <div className="digits-elts">+/-</div>
          <div className="digits-elts">%</div>
          <div className="digits-elts operator">÷</div>
          <div className="digits-elts">7</div>
          <div className="digits-elts">8</div>
          <div className="digits-elts">9</div>
          <div className="digits-elts operator">x</div>
          <div className="digits-elts">4</div>
          <div className="digits-elts">5</div>
          <div className="digits-elts">6</div>
          <div className="digits-elts operator">-</div>
          <div className="digits-elts">1</div>
          <div className="digits-elts">2</div>
          <div className="digits-elts">3</div>
          <div className="digits-elts operator">+</div>
        </div>
        <span className="end">
          <div className="digits-elts">0</div>
          <div className="digits-elts ">.</div>
          <div className="digits-elts operator">=</div>
        </span>
      </section>
    );
  }
}

export default Calculator;
