import React, { useState } from "react";

function Component5() {
  const [isHover, setisHover] = useState(false);
  const [isfoucs, setisfoucs] = useState(false);

  const hoverstyle = {
    backgroundColor: isHover ? "yellow" : null,
  };
  const focusstyle = {
    backgroundColor: isfoucs ? "yellow" : null,
  };

  return (
    <div>
      <h1
        style={hoverstyle}
        onMouseOver={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
      >
        hover the below elment
      </h1>
      <input
        style={focusstyle}
        type="text"
        onFocus={() => setisfoucs(true)}
        onBlur={() => setisfoucs(false)}
      />
      hover me Component5
    </div>
  );
}

export default Component5;
