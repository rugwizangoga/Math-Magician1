import React from 'react';

const Calculator = () => (
  <div className="calc">
    <ul className="calclines">
      <li className="firstrow"> 0 </li>
      <li className="row">
        <button type="button" className="number">AC</button>
        <button type="button" className="number">+/-</button>
        <button type="button" className="number">%</button>
        <button type="button" className="number end">&divide;</button>
      </li>
      <li className="row">
        <button type="button" className="number">7</button>
        <button type="button" className="number">8</button>
        <button type="button" className="number">9</button>
        <button type="button" className="number end">&times;</button>
      </li>
      <li className="row">
        <button type="button" className="number">4</button>
        <button type="button" className="number">5</button>
        <button type="button" className="number">6</button>
        <button type="button" className="number end">-</button>
      </li>
      <li className="row">
        <button type="button" className="number">1</button>
        <button type="button" className="number">2</button>
        <button type="button" className="number">3</button>
        <button type="button" className="number end">+</button>
      </li>
      <li className="lastrow">
        <button type="button" className="number">0</button>
        <button type="button" className="number">.</button>
        <button type="button" className="number end">=</button>
      </li>
    </ul>
  </div>
);

export default Calculator;
