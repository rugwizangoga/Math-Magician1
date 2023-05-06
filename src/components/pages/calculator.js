import React, { useState } from 'react';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const handleClick = (event) => {
    const value = event.target.innerText;
    const answer = calculate(state, value);
    setState(answer);
  };

  return (
    <div className="container">
      <h2>
        Let&apos;s some math!
      </h2>
      <div className="calc">
        <ul className="calclines">
          <li className="firstrow">
            {state.total}
            {state.operation}
            {state.next}
          </li>
          <li className="row">
            <button type="button" className="number" onClick={handleClick}>AC</button>
            <button type="button" className="number" onClick={handleClick}>+/-</button>
            <button type="button" className="number" onClick={handleClick}>%</button>
            <button type="button" className="number end" onClick={handleClick}>&divide;</button>
          </li>
          <li className="row">
            <button type="button" className="number" onClick={handleClick}>7</button>
            <button type="button" className="number" onClick={handleClick}>8</button>
            <button type="button" className="number" onClick={handleClick}>9</button>
            <button type="button" className="number end" onClick={handleClick}>x</button>
          </li>
          <li className="row">
            <button type="button" className="number" onClick={handleClick}>4</button>
            <button type="button" className="number" onClick={handleClick}>5</button>
            <button type="button" className="number" onClick={handleClick}>6</button>
            <button type="button" className="number end" onClick={handleClick}>-</button>
          </li>
          <li className="row">
            <button type="button" className="number" onClick={handleClick}>1</button>
            <button type="button" className="number" onClick={handleClick}>2</button>
            <button type="button" className="number" onClick={handleClick}>3</button>
            <button type="button" className="number end" onClick={handleClick}>+</button>
          </li>
          <li className="lastrow">
            <button type="button" className="number" onClick={handleClick}>0</button>
            <button type="button" className="number" onClick={handleClick}>.</button>
            <button type="button" className="number end" onClick={handleClick}>=</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
