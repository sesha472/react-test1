import React, { useContext } from "react";
import { Appcontext } from "../App";

const Compo2chaild = () => {
  const valueofcontxt = useContext(Appcontext);
  console.log("compo 2 chaild ");
  return <div>Component chaild{valueofcontxt}</div>;
};

export default React.memo(Compo2chaild);
