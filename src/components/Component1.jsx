import React, { useMemo, useState } from "react";

const Component1 = () => {
  const [square, setsquare] = useState(0);

  const [count, setcount] = useState(0);

  function squarefun(num) {
    console.log("square done");
    return Math.pow(num, 2);
  }

  const countHAndler = () => {
    setcount((prvstate) => prvstate + 1);
  };

  const result = useMemo(() => squarefun(square), [square]);

  return (
    <div>
      <input type="number" onChange={(e) => setsquare(e.target.value)} />
      <h1>{result}</h1>
      <p>below counte incrimnet</p>
      <h1>{count}</h1>
      <button onClick={countHAndler}>incrimnet </button>
    </div>
  );
};

export default Component1;
