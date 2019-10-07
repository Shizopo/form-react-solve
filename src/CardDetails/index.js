// @flow

import React from "react";

/* eslint-disable no-undef */
if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js");
  whyDidYouRender(React);
}
/* eslint-enable no-undef */

type Props = {
  cardNum?: string,
  cardType?: string,
  onCardTypeChange: (cardType?: string) => void,
};

type State = {
  cardType?: string,
};

class CardDetails extends React.Component<Props, State> {
  static whyDidYouRender = true;
  state = {
    cardType: undefined,
  };

  checkCardType = () => {
    let cardNum = this.props.cardNum;
    let cardType = this.props.cardType;
    if (cardNum && cardNum.length === 16) {
      parseInt(cardNum.slice(-4), 10) <= 2000
        ? (cardType = "MasterCard")
        : (cardType = "Visa");
    }
    this.props.onCardTypeChange(cardType);
  };

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.cardNum === this.props.cardNum ||
      !this.props.cardNum ||
      this.props.cardNum.length < 16
    ) {
      return;
    }
    this.checkCardType();
  }

  render() {
    console.log("CardDetails component rendered");
    return (
      <div>
        <div>{this.props.cardType}</div>
      </div>
    );
  }
}

export default CardDetails;
