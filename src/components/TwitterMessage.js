import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      charsRemaining: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      charsRemaining: ([this.props.maxChars] - [event.target.value.length])
    })
    // console.log(event.target.value)
    // console.log(event.target.value.length)
    // console.log(this.state.charsRemaining)
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange= {this.handleChange} value={this.state.message} />
        <br></br>
        <small>Characters Remaining: {this.state.charsRemaining}</small>
      </div>
    );
  }
}

export default TwitterMessage;
