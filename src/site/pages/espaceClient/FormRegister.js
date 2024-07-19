import React from "react";
import InputText from "../../../commun/InputText";
import api from "../../../api/Api";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const navigate = useNavigate();
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mdp, setMdp] = React.useState("");
  const [confirmMdp, setConfirmMdp] = React.useState("");

  const handleSubmit = async (e) => {
    // alert("eee");
    e.preventDefault();
    if (mdp !== confirmMdp) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User registered:", { nom, email, mdp });
    const user = {
      nom,
      prenom,
      email,
      mdp,
    };
    console.log(user);
    api
      .post("/api/users/save", user)
      .then(function (response) {
        //in local storage we only save in string format
        localStorage.setItem("user", JSON.stringify(response.data));
        if (response.data.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <InputText
          label="Votre nom"
          type="text"
          name="nom"
          onChange={(event) => setNom(event.target.value)}
          // className="register-input"
        />
        <InputText
          label="Vorte prenom"
          type="text"
          name="prenom"
          onChange={(event) => setPrenom(event.target.value)}
        />
        <InputText
          label="Votre email"
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          // className="register-input"
        />
        <InputText
          label="Votre mot de pass"
          type="password"
          name="mdp"
          onChange={(event) => setMdp(event.target.value)}
        />
        <InputText
          label="Confirmez votre mot de pass"
          type="password"
          name="confirmMdp"
          onChange={(event) => setConfirmMdp(event.target.value)}
        />
        <button type="submit" className="btn-cmd">
          Save
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
