import React from "react";

class Dark extends React.Component {
  render() {
    return (
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
        <em>Enable Dark Mode!</em>
      </div>
    );
  }
}

export default Dark;
