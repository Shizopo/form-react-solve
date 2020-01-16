// @flow

import React from "react";
/* eslint-disable no-unused-vars */
import FormBody from "../FormBody";
import FormResult from "../FormResult";
/* eslint-enable no-unused-vars */
import "./App.css";

/* eslint-disable no-undef */
if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js");
  whyDidYouRender(React);
}
/* eslint-enable no-undef */

type Props = {};

type State = {
  cardNum?: string,
  cardType?: string,
  firstName?: string,
  lastName?: string,
  isValid: boolean,
};

class App extends React.Component<Props, State> {
  static whyDidYouRender = true;

  state = {
    cardNum: undefined,
    cardType: undefined,
    firstName: undefined,
    lastName: undefined,
    isValid: true,
  };

  handleSubmit = (
    cardNum?: string,
    firstName?: string,
    lastName?: string,
    isValid: boolean
  ) => {
    this.setState({
      cardNum: cardNum,
      firstName: firstName,
      lastName: lastName,
      isValid: isValid,
    });
  };

  handleCardTypeChange = (cardType: string | void) => {
    this.setState({ cardType });
  };

  render() {
    return (
      <div className="App">
        <FormBody
          onSubmit={this.handleSubmit}
          onCardTypeChange={this.handleCardTypeChange}
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
