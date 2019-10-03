import React from "react";
import FormBody from "./FormBody";
import FormResult from "./FormResult";
import "./App.css";


class App extends React.Component {
  
  state = {
    cardNum: undefined,
    firstName: undefined,
    lastName: undefined,
    isValid: true,
  }

  updateResult = (cardNum, firstName, lastName, isValid) => {
    this.setState({
      cardNum: cardNum,
      firstName: firstName,
      lastName: lastName,
      isValid: isValid,
    });
  }

  render() {
    return (
      <div className="App">
        <FormBody updateResult={this.updateResult}/>
        <FormResult 
          cardNum={this.state.cardNum}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          isValid={this.state.isValid}
        />
      </div>
    );
  }
}

export default App;
