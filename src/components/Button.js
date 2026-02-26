import React from "react";

function Button({ value, onClick }) {
  return (
    <button onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default Button;
