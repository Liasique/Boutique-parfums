import React from "react";
import FormRegister from "./espaceClient/FormRegister";
import FormLogin from "./espaceClient/FormLogin";

const EspaceClient = () => {
  return (
    <div>
      <h1>EspaceClient</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>REGESTRATION</h2>
          <FormRegister />
        </div>
        <div className="col-md-6">
          <h2>LOGIN</h2>
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default EspaceClient;
