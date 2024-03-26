import React from "react";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }
  return (
    <div>
      <p>welcome to sign in page</p>
      <button onClick={handleClick}>sign in</button>
    </div>
  );
};

export default Sign;
