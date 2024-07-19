import React, { useEffect, useState } from "react";
import api from "../../api/Api";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await api.post("/api/produit");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <h2>Product List</h2>
      <Button as={Link} to="/add-product" variant="primary" className="mb-3">
        Add Product
      </Button>
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
              <td>{product.taille} ml</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductList;
