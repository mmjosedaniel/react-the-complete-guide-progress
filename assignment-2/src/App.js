import React, { Component } from 'react';
import TextLength from './TextLength/TextLength';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'

import './App.css';

class App extends Component {
  state = {
    textLength: 0,
    text: ""
  }
  getTextLengthHandler = (event) => {
    this.setTextHandler(event)
    const textLength = event.target.value.length;
    this.setState({textLength: textLength});
  };

  setTextHandler = (event) => {
    const textValue = event.target.value;
    this.setState({ text: textValue })
  };

  deleteCharHandler = (index) => {
    const textChars = this.state.text.split('');
    textChars.splice(index, 1);
    const textTemp = textChars.join('')

    this.setState({ text: textTemp });
    this.setState({ textLength: textTemp.length });
  };

  render() {

    const textChars = (
       <div>
         {
           this.state.text.split('').map(
             (charVal, index) => {
                return <CharComponent
                  click={() => this.deleteCharHandler(index)}
                  charVal={charVal}
                  key={index}
                />
             }
           )
         }
       </div> 
    );

    return (
      <div className="App">
        <TextLength 
          changed={(event) => this.getTextLengthHandler(event)}
          textLength={this.state.textLength}
          textValue={this.state.text}
        />
        <ValidationComponent
          textLength={this.state.textLength}
        />
        {textChars}
      </div>
    );
  };
}

export default App;
