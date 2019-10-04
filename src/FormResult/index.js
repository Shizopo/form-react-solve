import React from "react";
import PropTypes from "prop-types";

class FormResult extends React.Component {

    state = {
      isShown: false,
      timerId: undefined,
      timerStart: undefined,
    };
    
    startTimer = () => {
      let timerId = setTimeout(() => {
        this.setState({
          isShown: false,
          timerId: false,
          timerStart: undefined,
        }, () => console.log('expired result'))
      }, 5000);
    
      this.setState({
        isShown: true,
        timerId: timerId,
        timerStart: Date.now(),
      });
    };
    
    componentDidUpdate(prevProps) {
      if (
        prevProps.cardNum === this.props.cardNum &&
        prevProps.cardType === this.props.cardType &&
        prevProps.firstName === this.props.firstName &&
        prevProps.lastName === this.props.lastName
        ) {
          return
        }
    
      if (!this.state.isShown) {
        return this.startTimer();
      }
    
    }
    
      render() {
        console.log('FormResult component rendered');
        if (!this.state.isShown) {
          return null;
        }
        
        if (!this.props.isValid) {
          return (
            <div>
              <h2>Error</h2>
            </div>
          )
        }
        return (
          <div className="result">
            <div>Card number: {this.props.cardNum.slice(-4)}</div>
            <div>Card type: {this.props.cardType}</div>
            <div>First Name: {this.props.firstName}</div>
            <div>Last Name: {this.props.lastName}</div>
          </div>
        );
      }
    }

    FormResult.propTypes = {
      cardNum: PropTypes.string,
      cardType: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      isValid: PropTypes.bool,
    }

    export default FormResult;
    