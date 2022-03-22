import React from "react";

class Dark extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        backgrounds: "",
      };
    }

    componentDidMount() {
      this.setState({backgrounds:"lightMode"}, ()=>this.setColors());
    }

    setColors(){
      if (this.state.backgrounds === "lightMode"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
      else{
        document.body.style.backgroundColor = "#566573";
        document.body.style.color = "#f8f9f9";      
      }
    }

    assignClass(){
      if (this.state.backgrounds === "lightMode"){
        this.setState({backgrounds:"darkMode"}, ()=>this.setColors());
      }
      else{
        this.setState({backgrounds:"lightMode"}, ()=>this.setColors());
      }
    }

    render(){
        return(  
        <div class="theme-switch-wrapper">
          <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div class="slider round" onClick={()=>this.assignClass()}></div>
          </label>
        </div>
      );
    }
}

export default Dark;
