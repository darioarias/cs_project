import React from "react";

class Dark extends React.Component {
    render(){
        return(  
        <div class="theme-switch-wrapper">
          <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div class="slider round"></div>
          </label>
          <em>Enable Dark Mode!</em>
        </div>
      );
    }
}

export default Dark