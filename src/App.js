import React, { Component } from "react";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";
import placeholder from "./Components/placeholder";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    };
  }

  setMarkdown = (e) => {
    this.setState({ markdown: e.target.value });
  };

  render() {
    return (
      <div className="app">
        <Editor markdown={this.state.markdown} setMarkdown={this.setMarkdown} />
        <Preview markdown={this.state.markdown} />
      </div>
    );
  }
}
export default App;
