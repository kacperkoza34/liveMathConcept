import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gml } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeComponent = ({ content }) => {
  return (
    <SyntaxHighlighter language="javascript" style={gml}>
      {content}
    </SyntaxHighlighter>
  );
};

export default CodeComponent;
