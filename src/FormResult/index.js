// @flow

import React from "react";

type Props = {
  cardNum?: string,
  cardType?: string,
  firstName?: string,
  lastName?: string,
  isValid: boolean,
};

type State = {
  isShown: boolean,
  // eslint-disable-next-line no-undef
  timerId?: TimeoutID,
  timerStart?: number,
};

class FormResult extends React.Component<Props, State> {
  static whyDidYouRender = true;
  state = {
    isShown: false,
    timerId: undefined,
    timerStart: undefined,
  };

  startTimer = () => {
    let timerId = setTimeout(() => {
      this.setState(
        {
          isShown: false,
          timerId: undefined,
          timerStart: undefined,
        },
        () => console.log("expired result")
      );
    }, 5000);

    this.setState({
      isShown: true,
      timerId,
      timerStart: Date.now(),
    });
  };

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.cardNum === this.props.cardNum &&
      prevProps.firstName === this.props.firstName &&
      prevProps.lastName === this.props.lastName
    ) {
      return;
    }

    if (!this.state.isShown) {
      return this.startTimer();
    }
  }

  render() {
    const { cardNum, firstName, lastName, cardType, isValid } = this.props;

    console.log("FormResult component rendered");
    if (!this.state.isShown) {
      return null;
    }

    if (!isValid || !cardNum) {
      return (
        <div>
          <h2>Error</h2>
        </div>
      );
    }
    return (
      <div className="result">
        <div>Card number: {cardNum.slice(-4)}</div>
        <div>Card type: {cardType}</div>
        <div>First Name: {firstName}</div>
        <div>Last Name: {lastName}</div>
      </div>
    );
  }
}

export default FormResult;
