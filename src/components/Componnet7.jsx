import axios from "axios";
import React, { useEffect, useState } from "react";

const Componnet7 = () => {
  const [userdata, setuserdata] = useState([]);
  const [serach, setserach] = useState("");
  useEffect(() => {
    let fetchdata = async () => {
      try {
        let result = await axios("https://jsonplaceholder.typicode.com/users");
        setuserdata(result.data);
      } catch (error) {
        console.log("error occured: ", error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div>
      <input
        type="text"
        name="serach"
        value={serach}
        onChange={(e) => setserach(e.target.value)}
      />
      {userdata
        .filter((useritem) =>
          useritem.name.toLowerCase().includes(serach.toLowerCase())
        )
        .map((item) => {
          return <p>{item.name}</p>;
        })}
      Componnet7
    </div>
  );
};

export default Componnet7;
