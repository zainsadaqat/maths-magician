/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  // constructor(props) {
  //   super(props);
  //   this.calculator = this.calculator.bind(this);
  //   this.returnResults = this.returnResults.bind(this);
  //   // this.state = {
  //   //   digitObj: {
  //   //     total: null,
  //   //     next: null,
  //   //     operation: null,
  //   //   },
  //   // };
  // }

  calculator(obj, button) {
    const { updateState } = this.props;
    const newObj = calculate(obj, button);

    this.digitObj = newObj;
    updateState(newObj);
  }

  returnResults() {
    const { digitObj } = this.props;
    const { total, next, operation } = digitObj;

    if (total === null && next === null) {
      return 0;
    } if (next !== null && total === null) {
      return next;
    } if (total !== null && next !== null) {
      if (operation !== null && operation !== undefined) {
        return `${total} ${operation} ${next}`;
      }
      return total;
    }
    return total;
  }

  render() {
    const { digitObj } = this.props;

    return (
      <section className="container">
        <div className="returnSection">
          {(this.returnResults())}
        </div>
        <div className="digits">
          <button type="button" className="digits-elts" value="AC" onClick={() => { this.calculator(digitObj, 'AC'); }}>AC</button>
          <button type="button" className="digits-elts" value="+/-" onClick={() => { this.calculator(digitObj, '+/-'); }}>+/-</button>
          <button type="button" className="digits-elts" value="%" onClick={() => { this.calculator(digitObj, '%'); }}>%</button>
          <button type="button" className="digits-elts operator" value="÷" onClick={() => { this.calculator(digitObj, '÷'); }}>÷</button>
          <button type="button" className="digits-elts" value="7" onClick={() => { this.calculator(digitObj, '7'); }}>7</button>
          <button type="button" className="digits-elts" value="8" onClick={() => { this.calculator(digitObj, '8'); }}>8</button>
          <button type="button" className="digits-elts" value="9" onClick={() => { this.calculator(digitObj, '9'); }}>9</button>
          <button type="button" className="digits-elts operator" value="x" onClick={() => { this.calculator(digitObj, 'x'); }}>x</button>
          <button type="button" className="digits-elts" value="4" onClick={() => { this.calculator(digitObj, '4'); }}>4</button>
          <button type="button" className="digits-elts" value="5" onClick={() => { this.calculator(digitObj, '5'); }}>5</button>
          <button type="button" className="digits-elts" value="6" onClick={() => { this.calculator(digitObj, '6'); }}>6</button>
          <button type="button" className="digits-elts operator" value="-" onClick={() => { this.calculator(digitObj, '-'); }}>-</button>
          <button type="button" className="digits-elts" value="1" onClick={() => { this.calculator(digitObj, '1'); }}>1</button>
          <button type="button" className="digits-elts" value="2" onClick={() => { this.calculator(digitObj, '2'); }}>2</button>
          <button type="button" className="digits-elts" value="3" onClick={() => { this.calculator(digitObj, '3'); }}>3</button>
          <button type="button" className="digits-elts operator" value="+" onClick={() => { this.calculator(digitObj, '+'); }}>+</button>
        </div>
        <span className="end">
          <button type="button" className="digits-elts" value="0" onClick={() => { this.calculator(digitObj, '0'); }}>0</button>
          <button type="button" className="digits-elts " value="." onClick={() => { this.calculator(digitObj, '.'); }}>.</button>
          <button type="button" className="digits-elts operator" value="=" onClick={() => { this.calculator(digitObj, '='); }}>=</button>
        </span>
      </section>
    );
  }
}

Calculator.propTypes = {
  updateState: PropTypes.func.isRequired,
  digitObj: PropTypes.object.isRequired,
};

export default Calculator;
