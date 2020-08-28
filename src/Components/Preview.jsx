import React, { useState, useEffect } from "react";
import marked from "marked";
import "./Preview.css";

const Preview = ({ markdown }) => {
  const [compiledMarkdown, setCompiledMarkedown] = useState(markdown);
  // ALLOWS LINE BREAKS WITH RETURN BUTTON
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  useEffect(() => {
    setCompiledMarkedown(marked(markdown));
  }, [markdown]);

  // INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + "</a>";
  };

  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
    ></div>
  );
};

export default Preview;
