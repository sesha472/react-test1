import React, { useState } from "react";

const Component6 = () => {
  const [first, setfirst] = useState({
    username: "",
    password: "",
  });

  const { username, password } = first;

  const changeHandler = (e) => {
    setfirst({ ...first, [e.target.name]: e.target.value });
  };
  const submitHAndler = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(first);
  };
  return (
    <div>
      <form onSubmit={submitHAndler}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Component6;
