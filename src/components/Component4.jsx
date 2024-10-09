import React, { useState, useEffect } from "react";

const Component4 = () => {
  const [name, setname] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : ""
  );

  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);

  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
    </div>
  );
};

export default Component4;
