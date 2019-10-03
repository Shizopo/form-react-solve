import React from "react";
import PropTypes from "prop-types";
import CardDetails from "../CardDetails";

class FormBody extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        cardNum: undefined,
        cardType: undefined,
        expirationDate: undefined,
        cardCvv: undefined,
        firstName: undefined,
        lastName: undefined,
        question: undefined,
        answer: undefined,
        valid: {
          cardNum: true,
          expirationDate: true,
          cardCvv: true,
          firstName: true,
          lastName: true,
          question: true,
          answer: true,
        },
        isValid: true,
      }
    }
  
    validate = (name, value) => {
      let valid = {...this.state.valid};
  
      switch (name) {
        case "cardNum":
          let cardNumReg = /^[0-9]{16}/;
          valid.cardNum = cardNumReg.test(value) ? true : false;
          break;
        case "expirationDate":
          let expirationDateReg = /^(0[1-9]|1[0-2])\/\d{2}$/;
          valid.expirationDate = expirationDateReg.test(value) ? true : false;
          break;
        case "cardCvv":
          let cardCvvReg = /^[0-9]{3,4}$/;
          valid.cardCvv = cardCvvReg.test(value) ? true : false;
          break;
        case "firstName":
          valid.firstName = value.length < 2 ? false : true;
          break;
        case "lastName":
          valid.lastName = value.length < 3 ? false : true;
          break;
        case "question":
          valid.question = value.length < 10 ? false : true;
          break;
        case "answer":
          valid.answer = value.length < 3 ? false : true;
          break;
        default:
          console.log("nothing to validate");
          break;
      }
  
      this.setState({ valid, [name]: value}, () => console.log(this.state));
    }
  
    handleInput = e => {
      let { name, value } = e.target;
      this.setState({
        [name]: value
      }, () => {
        this.validate(name, value);
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      let valid = {...this.state.valid};
      let isValid = this.state.isValid;
    
      for (let key in valid) {
        if (valid[key] !== true) {
          isValid = false;
          this.setState({isValid: isValid});
        }
      }
    
      this.setState({isValid: isValid}, () => {
        this.props.updateResult(this.state.cardNum, this.state.cardType, this.state.firstName, this.state.lastName, this.state.isValid);
      });
  
      return true;
    };

    handleCardType = (cardType) => {
      this.setState({cardType: cardType}, () => console.log(cardType));
    }
  
    render() {
      let { valid } = this.state;
      return(
        <form className="form" onSubmit={this.handleSubmit} noValidate>
          <section className="formContainer">
            <h1 className="formHeader">Checkout form</h1>
            <label htmlFor="cardNum" className="inputLabel" title="Enter credit card number">
              <span>Card number</span>
              <input 
                type="text" 
                name="cardNum" 
                id="cardNum" 
                minLength="16" 
                maxLength="16" 
                placeholder="1111222233334444"
                value={this.state.value} 
                className={valid.cardNum === true ? "" : "invalidInput"}
                onChange={this.handleInput} 
              />
            </label>
            <div className="creditCardSecurity">
              <label htmlFor="expirationDate" className="inputLabel" title="Enter card expiry date">
                <span>Card expiry date</span>
                <input 
                  type="text" 
                  name="expirationDate" 
                  id="expirationDate" 
                  maxLength="5" 
                  placeholder="MM/YY"
                  value={this.state.value} 
                  className={valid.expirationDate === true ? "" : "invalidInput"}
                  onChange={this.handleInput} 
                />
              </label>
              <label htmlFor="cardCvv" className="inputLabel" title="Enter card CVV2/CVC2">
                <span>CVV2/CVC2</span>
                <input 
                  type="text" 
                  inputMode="numeric"
                  name="cardCvv" 
                  id="cardCvv"
                  minLength="3" 
                  maxLength="4" 
                  placeholder="1234"
                  value={this.state.value} 
                  className={valid.cardCvv === true ? "" : "invalidInput"}
                  onChange={this.handleInput} 
                />
              </label>
            </div>
            <label htmlFor="firstName" className="inputLabel" title="Enter first name">
              <span>First name</span>
              <input 
                type="text" 
                name="firstName" 
                id="firstName"
                placeholder="Jane"
                value={this.state.value} 
                className={valid.firstName === true ? "" : "invalidInput"}
                onChange={this.handleInput} 
              />
            </label>
            <label htmlFor="lastName" className="inputLabel" title="Enter last name">
              <span>Last name</span>
              <input 
                type="text" 
                name="lastName" 
                id="lastName"
                placeholder="Doe"
                value={this.state.value} 
                className={valid.lastName === true ? "" : "invalidInput"}
                onChange={this.handleInput} 
              />
            </label>
            <label htmlFor="question" className="inputLabel" title="Enter security question">
              <span>Security question</span>
              <input 
                type="text" 
                name="question" 
                id="question" 
                placeholder="Your security question"
                value={this.state.value} 
                className={valid.question === true ? "" : "invalidInput"}
                onChange={this.handleInput} 
              />
            </label>
            <label htmlFor="answer" className="inputLabel" title="Enter security answer">
              <span>Security answer</span>
              <input 
                type="text" 
                name="answer" 
                id="answer" 
                placeholder="Your security answer"
                value={this.state.value} 
                className={valid.answer === true ? "" : "invalidInput"}
                onChange={this.handleInput} 
              />
            </label>
            <div><CardDetails cardNum={this.state.cardNum} handleCardType={this.handleCardType} /></div>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </section>
        </form>
      )
    }
  }

  FormBody.propTypes = {
    updateResult: PropTypes.func,
  }

export default FormBody;
