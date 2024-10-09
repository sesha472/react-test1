import React, { useCallback, useState } from "react";
import Compo2chaild from "./Compo2chaild";

const Component2 = () => {
  const [count, setcount] = useState(0);
  const newfun = useCallback(() => {}, []);
  return (
    <div>
      <Compo2chaild newfun={newfun} />
      <p>{count} </p>
      <button onClick={() => setcount(count + 1)}>countre</button>
    </div>
  );
};

export default Component2;
