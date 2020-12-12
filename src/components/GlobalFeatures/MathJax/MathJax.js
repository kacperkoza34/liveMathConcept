import React from "react";
import MathJax from "react-mathjax-preview";

const Demo = props => {
  const { content, font } = props;
  const math = String.raw`${content}`;

  return (
    <div style={{ fontSize: `${font}px` }}>
      <MathJax math={math} />
    </div>
  );
};

export default Demo;
