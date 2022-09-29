import React from "react";
import { useEffect, useState } from "react";

export default function TreeNode(props) {
  const [node, setNode] = useState(props.node);

  useEffect(() => {
    setNode(props.node);
    return () => {};
  }, [props.node]);

  const onRemove = () => {
    const newNode = node.remove();
    props.onRemove(newNode);
  };

  const onSplit = () => {
    setNode(node.split());
  };

  console.log(node);

  return (
    <div>
      {node.children ? (
        <div>
          <label>{node.id}</label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <TreeNode node={node.children[0]} onRemove={setNode} />
            <TreeNode node={node.children[1]} onRemove={setNode} />
          </div>
        </div>
      ) : (
        <div key={node.id}>
          <button onClick={onRemove}>remove</button>
          <button onClick={onSplit}>split</button>
          <label>{node.id}</label>
        </div>
      )}
    </div>
  );
}
