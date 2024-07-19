import React, { useState } from "react";
import api from "../../api/Api";
import { Container, Form, Button } from "react-bootstrap";

const AddProduct = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [image, setImage] = useState("");
  const [tail, setTail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/produit", {
        nom,
        description,
        prix,
        image,
        tail,
      });
      alert("Product added successfully");
      setNom("");
      setDescription("");
      setPrix("");
      setImage("");
      setTail("");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product");
    }
  };

  return (
    <Container>
      <h2>Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nom">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="prix">
          <Form.Label>Prix</Form.Label>
          <Form.Control
            type="text"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="taille">
          <Form.Label>Taille</Form.Label>
          <Form.Control
            type="text"
            value={tail}
            onChange={(e) => setTail(e.target.value)}
          />
        </Form.Group>
        <Button variant="outline-secondary" type="submit" className="mt-3">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
