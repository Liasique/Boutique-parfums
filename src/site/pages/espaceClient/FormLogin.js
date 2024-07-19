import React from "react";
import InputText from "../../../commun/InputText";
import axios from "axios";
import api from "../../../api/Api";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [mdp, setMdp] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      mdp,
    };
    console.log(user);

    api
      .post("/api/users/login", user)
      .then(function (response) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/user");
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <InputText
          label="Email"
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          className="login-input"
        />
        <InputText
          label="Mot de passe"
          type="password"
          name="mdp"
          onChange={(event) => setMdp(event.target.value)}
          className="login-input"
        />
        <button type="submit" className="btn-cmd">
          Login
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
