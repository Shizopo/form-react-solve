import React from "react";

class CardDetails extends React.Component {

    state = {
      cardType: undefined,
    }

    findoutCardType = () => {
        let cardNum = this.props.cardNum;
        let cardType = this.state.cardType;
        if (cardNum && cardNum.length === 16) {
            cardNum.slice(-4) <= 2000 ? cardType = "MasterCard" : cardType = "Visa";
        }
        this.props.handleCardType(cardType);

    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.cardNum === this.props.cardNum ||
            !this.props.cardNum || this.props.cardNum.length < 16
            ) {
                return
            }
            this.findoutCardType();
    }

    render(){
        return(
            <div>
                <div>{this.state.cardType}</div>
            </div>
        )
    }
}
    

export default CardDetails;
