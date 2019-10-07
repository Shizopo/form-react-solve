// @flow

import React from "react";
/* eslint-disable no-unused-vars */
import FormBody from "./FormBody";
import FormResult from "./FormResult";
/* eslint-enable no-unused-vars */
import "./App.css";

type Props = {};

type State = {
  cardNum?: string,
  cardType?: string,
  firstName?: string,
  lastName?: string,
  isValid: boolean,
};

class App extends React.Component<Props, State> {
  state = {
    cardNum: undefined,
    cardType: undefined,
    firstName: undefined,
    lastName: undefined,
    isValid: true,
  };

  updateResult = (
    cardNum: string,
    firstName: string,
    lastName: string,
    isValid: boolean
  ) => {
    this.setState({
      cardNum: cardNum,
      firstName: firstName,
      lastName: lastName,
      isValid: isValid,
    });
  };

  handleCardType = (cardType: string) => {
    this.setState({ cardType });
  };

  render() {
    return (
      <div className="App">
        <FormBody
          updateResult={this.updateResult}
          handleCardType={this.handleCardType}
        />
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
