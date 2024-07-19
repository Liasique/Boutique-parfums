import React, { useEffect, useState } from "react";
import { Container, Form, Button, Table, Nav } from "react-bootstrap";
import api from "../api/Api";
import InputText from "../commun/InputText";

const AdminDashboard = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [image, setImage] = useState("");
  const [tail, setTail] = useState("");
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("addProduct");

  const fetchProducts = async () => {
    try {
      const response = await api.post("/api/produit/all");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { nom, description, prix, image, tail };
    console.log(productData);
    try {
      const response = await api.post("/api/produit/save", productData);
      console.log("Product added successfully:", response.data);
      fetchProducts();
      // Clear form fields
      setNom("");
      setImage("");
      setPrix("");
      setDescription("");
      setTail("");
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Container>
      <Nav variant="tabs" defaultActiveKey="addProduct">
        <Nav.Item>
          <Nav.Link
            eventKey="addProduct"
            onClick={() => setActiveTab("addProduct")}
          >
            Add Product
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="productList"
            onClick={() => setActiveTab("productList")}
          >
            Product List
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab === "addProduct" && (
        <div className="mt-4">
          <h2>Add Product</h2>
          <Form
            onSubmit={handleSubmit}
            className="shadow-sm p-3 mb-5 bg-white rounded"
          >
            <InputText
              label="Nom"
              type="text"
              name="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            <InputText
              label="Description"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <InputText
              label="Prix"
              type="text"
              name="prix"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
            />
            <InputText
              label="Image URL"
              type="text"
              name="imageUrl"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <InputText
              label="Taille"
              type="text"
              name="taille"
              value={tail}
              onChange={(e) => setTail(e.target.value)}
            />
            <Button variant="primary" type="submit" className="mt-3">
              Add Product
            </Button>
          </Form>
        </div>
      )}

      {activeTab === "productList" && (
        <div className="mt-4">
          <h2>Product List</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Image</th>
                <th>Taille</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.nom}</td>
                  <td>{product.description}</td>
                  <td>{product.prix} €</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.nom}
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>{product.tail} ml</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default AdminDashboard;
