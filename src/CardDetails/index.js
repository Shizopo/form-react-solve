// @flow

import React from "react";
// import PropTypes from "prop-types";

class CardDetails extends React.Component {
  state = {
    cardType: undefined,
  };

  findoutCardType = () => {
    let cardNum = this.props.cardNum;
    let cardType = this.props.cardType;
    if (cardNum && cardNum.length === 16) {
      cardNum.slice(-4) <= 2000
        ? (cardType = "MasterCard")
        : (cardType = "Visa");
    }
    this.props.handleCardType(cardType);
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.cardNum === this.props.cardNum ||
      !this.props.cardNum ||
      this.props.cardNum.length < 16
    ) {
      return;
    }
    this.findoutCardType();
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

// CardDetails.propTypes = {
//   cardNum: PropTypes.string,
//   handleCardType: PropTypes.func,
// };

export default CardDetails;
