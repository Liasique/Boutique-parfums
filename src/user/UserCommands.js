import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Table, Spinner } from "react-bootstrap";
import axios from "axios";
import api from "../api/Api";

const UserCommands = () => {
  const [commands, setCommands] = useState([]);
  // const [loading, setLoading] = useState(true);

  const fetchUserCommands = () => {
    const userId = JSON.parse(localStorage.getItem("user")).id;

    api
      .post(`/api/commande/${userId}`)
      .then(function (response) {
        setCommands(response.data);
        // setLoading(false);
      })
      .catch(function (error) {
        console.error("Failed to fetch commands", error);
        // setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserCommands();
  }, []);
  // const UserCommands = () => {
  // const { id } = useParams();
  // const [command, setCommand] = useState(null);
  // const [loading, setLoading] = useState(true);

  // const loadData = () => {
  // JSON.parse(localStorage.getItem("user")).id
  // const userId = JSON.parse(localStorage.getItem("user")).id;

  //. api url /api/commands/idUser
  // };
  // useEffect(() => {
  // fetchUserCommands();
  // }, [[user].id]);
  // return <></>;
  // };
  // export default UserCommands;

  // [
  // {
  // id: 1,
  // prix: 200,
  // dateAchat: "",
  // ligneCommandes: [
  // {
  // id: 3,
  // produit: {
  // id: 90,
  // nom: "Yves Saint Laurent Libre Eau de Parfum",
  // description:
  // // "En 2019, ce parfum a rejoint le répertoire des parfums d'Yves Saint Laurent. Derrière la création se trouvent Anne Flipo et Carlos Benaïm.",
  // prix: 100,
  // image:
  // // "https://cdn.idealo.com/folder/Product/6751/2/6751285/s4_produktbild_mittelgross/yves-saint-laurent-libre-eau-de-parfum-50ml.jpg",
  // tail: 50,
  // },
  // quantite: 2,
  // prix: 100,
  // },
  // ],
  // },
  // ];
  //

  // if (loading) {
  // return <Spinner animation="border" />;
  // }
  return (
    <Container>
      <h2>User Commands</h2>
      <Table striped bordered hover>
        {/* <thead>
          <tr>
            <th>Price</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody> */}
        {commands.map((data) => (
          <tr key={data.commande.id}>
            <td>{data.commande.prix}</td>
            <td>{new Date(data.commande.dateAchat).toLocaleString()}</td>
            <td>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.ligneCommandes.map((ligne) => (
                    <tr key={ligne.id}>
                      <td>{ligne.produit.nom}</td>
                      <td>{ligne.quantite}</td>
                      <td>{ligne.produit.prix}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </td>
          </tr>
        ))}
        {/* </tbody> */}
      </Table>
    </Container>
  );
};

export default UserCommands;
