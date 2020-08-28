import React from "react";
import "./Editor.css";

const Editor = ({ markdown, setMarkdown }) => {
  return (
    <div className="app__editor">
      <div className="editor__header">Editor</div>
      <textarea
        className="editor__text"
        id="editor"
        type="text"
        value={markdown}
        onChange={setMarkdown}
      ></textarea>
    </div>
  );
};

export default Editor;
