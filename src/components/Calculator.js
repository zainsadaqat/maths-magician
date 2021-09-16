/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculator = this.calculator.bind(this);
    this.returnResults = this.returnResults.bind(this);
  }

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
          <button type="button" className="digits-elts" value="AC">AC</button>
          <button type="button" className="digits-elts" value="+/-">+/-</button>
          <button type="button" className="digits-elts" value="%">%</button>
          <button type="button" className="digits-elts operator" value="÷">÷</button>
          <button type="button" className="digits-elts" value="7">7</button>
          <button type="button" className="digits-elts" value="8">8</button>
          <button type="button" className="digits-elts" value="9">9</button>
          <button type="button" className="digits-elts operator" value="x">x</button>
          <button type="button" className="digits-elts" value="4">4</button>
          <button type="button" className="digits-elts" value="5">5</button>
          <button type="button" className="digits-elts" value="6">6</button>
          <button type="button" className="digits-elts operator" value="-">-</button>
          <button type="button" className="digits-elts" value="1">1</button>
          <button type="button" className="digits-elts" value="2">2</button>
          <button type="button" className="digits-elts" value="3">3</button>
          <button type="button" className="digits-elts operator" value="+">+</button>
        </div>
        <span className="end">
          <button type="button" className="digits-elts" value="0">0</button>
          <button type="button" className="digits-elts " value=".">.</button>
          <button type="button" className="digits-elts operator" value="=">=</button>
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
