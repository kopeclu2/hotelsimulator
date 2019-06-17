/* eslint-disable no-inner-declarations */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';

export default class CounterDownLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: false,
    };
  }

  render() {
    return (
      <div>
        <div onLoad={this.move(this.props)} id="myProgress">
          <div id="myBar" />
        </div>
      </div>
    );
  }

  move(props) {
    if (!this.state.timeout) {
      let width = 1;
      const id = setInterval(frame, 1000);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          props.onTimeOut();
        } else {
          width += 10;
          document.getElementById('myBar').style.width = `${width}%`;
        }
      }
    }
  }
}
