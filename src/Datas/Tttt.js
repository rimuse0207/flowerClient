import React from "react";
import PropTypes from "prop-types";

export default class Tttt extends React.Component {
  render() {
    return (
      <div>
        <div>유통명: {this.props.name}</div>
        <div>조언정보: {this.props.advice}</div>
        <div>번식 시기 정보: {this.props.info}</div>
        <div>생육온도: {this.props.temple}</div>
      </div>
    );
  }
}

Tttt.propTypes = {
  name: PropTypes.string,
  advice: PropTypes.string,
  info: PropTypes.string,
  temple: PropTypes.string
};

Tttt.defaultProps = {
  name: "",
  advice: "",
  info: "없음",
  temple: ""
};
