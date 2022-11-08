import React from "react";

function DataItems(props) {
  return (
    <ul>
      {props.dataItems.map((items, index) => (
        <li key={index}>{items}</li>
      ))}
    </ul>
  );
}

export default DataItems;
