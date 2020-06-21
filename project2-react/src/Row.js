import React from "react";

const Row = (props) => {
  return (
    <div style={{ padding: 20 }} onClick={() => props.onSelectMovie(props)}>
      <div>
        {props.Title} ({props.Year})
      </div>
    </div>
  );
};

export default Row;
