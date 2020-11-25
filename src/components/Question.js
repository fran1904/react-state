import React, { Component } from "react";

class Question extends Component {
  //  My Data
  state = {
    shortIsVisible: false,
    longIsVisible: false,
  };

  //  My Methods:
  handleShortIsVisible = () => {
    this.setState({ shortIsVisible: !this.state.shortIsVisible });
  };
  handleLongIsVisible = () => {
    this.setState({ longIsVisible: !this.state.longIsVisible });
  };

  // My JSX
  render() {
    return (
      <section>
        <div className="contentContainer">
          <div className="quesContainer">
            <h2>{this.props.data.question}</h2>
            <button onClick={this.handleShortIsVisible}> + </button>
          </div>

          <div
            className="shortanswrap"
            style={{ display: this.state.shortIsVisible ? "flex" : "none" }}
          >
            <p>{this.props.data.answer}</p>
            <button onClick={this.handleLongIsVisible}> + </button>
          </div>

          <div
            className="longanswrap"
            style={{ display: this.state.longIsVisible ? "block" : "none" }}
          >
            <p>
            {this.props.data.answerLong}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Question;
