import React from "react";

const RegisterSP = () => {
  return (
    <div>
      <form action="/register/sp" method="post">
        <label htmlFor="spname">Service Provider Name:</label>
        <input type="text" name="spname" id="spname" required></input>
      </form>
    </div>
  );
};

export default RegisterSP;
