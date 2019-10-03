import React from "react";

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
            <div>First Name: {this.props.firstName}</div>
            <div>Last Name: {this.props.lastName}</div>
          </div>
        );
      }
    }

    export default FormResult;
    