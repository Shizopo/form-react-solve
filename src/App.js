import React from "react";
import FormBody from "./FormBody";
import FormResult from "./FormResult";
import "./App.css";


class App extends React.Component {
  
  state = {
    cardNum: undefined,
    cardType: undefined,
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

  handleCardType = cardType => {
    this.setState({ cardType });
  };

  render() {
    return (
      <div className="App">
        <FormBody updateResult={this.updateResult} handleCardType={this.handleCardType}/>
        <FormResult 
          cardNum={this.state.cardNum}
          cardType={this.state.cardType}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          isValid={this.state.isValid}
        />
      </div>
    );
  }
}

export default App;
