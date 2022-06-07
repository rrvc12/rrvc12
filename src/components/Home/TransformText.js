import React, { Component } from "react";

class TransformText extends Component {
  state = {
    text: this.props.text,
  };

  style = {
    color: this.props.color,
    fontWeight: this.props.fontWeight,
    fontStyle: this.props.fontStyle,
    display: this.props.display,
    top: this.props.top
  }

  

  render() {
    return <div style={{
            position: 'relative',
            color: this.style.color, 
            fontWeight: this.style.fontWeight,
            fontStyle: this.style.fontStyle,
            display: this.style.display,
            top: this.style.top}}>
            {this.state.text}
            </div>;
  }
}

export default TransformText;