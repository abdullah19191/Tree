import React from "react";
import "./styles.css";
import Node from "./Node";
import TreeNode from "./TreeNode";

export default function App() {
  const root = new Node();

  return (
    <div className="App">
      <TreeNode
        style={{ display: "flex", flexDirection: "column" }}
        node={root}
        onRemove={() => {}}
      />
    </div>
  );
}
