import './App.css';
import Screen from './components/Screen'
import Keypad from './components/Keypad'
import React from 'react';

class App extends React.Component {
  state = {
    equation: "",
    result: 0,
  }
  handleClick = (e) => {
    let equat = this.state.equation;
    let res = this.state.result
    const pressedButton = e.target.innerHTML;
    if (pressedButton === "C") {
      res = 0
      this.setState({ equation: "", result: res })
    }
    else if (["*", "/", "+", "-", "%", "."].indexOf(pressedButton) !== -1) {
      if (["*", "/", "+", "-", "%", "."].indexOf(equat.slice(-1)) > -1) {
        equat = equat.substring(0, equat.length - 1)
      }
      if (equat.length !== 0) {
        equat += pressedButton;
      }
      this.setState({ equation: equat })
    }
    else if (!isNaN(parseInt(pressedButton))) {
      equat += pressedButton;
      if ((["*", "/", "+", "-", "%"].indexOf(equat.slice(-1)) === -1)) {
        res = Number.isInteger(eval(equat)) ? eval(equat) : eval(equat).toFixed(2);
        this.setState({ result: res })
      }
      this.setState({ equation: equat })
    }
    else if (pressedButton === "=") {
      if ((["*", "/", "+", "-", "%"].indexOf(equat.slice(-1)) === -1)) {
        res = Number.isInteger(eval(equat)) ? eval(equat) : eval(equat).toFixed(2);
        equat = res.toString();
        this.setState({ equation: equat, result: res })
      }
    }
    else if (pressedButton === "←") {
      equat = equat.substring(0,equat.length-1)
      if ((["*", "/", "+", "-", "%"].indexOf(equat.slice(-1)) === -1)) {
        res = Number.isInteger(eval(equat)) ? eval(equat) : eval(equat).toFixed(2);
        this.setState({ equation: equat, result: res })
      }
    }
  }
  render() {
    return (
      <div className="app">
        <div className="calculator">
          <Screen result={this.state.equation} equation={this.state.result} />
          <Keypad buttonPress={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
