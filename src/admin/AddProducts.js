import React, { useEffect, useState } from "react";
import InputText from "../commun/InputText";
import { Table } from "react-bootstrap";
import api from "../api/Api"; // Ensure this is properly configured

const AddProducts = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [image, setImage] = useState("");
  const [tail, setTail] = useState("");
  const [products, setProducts] = useState([]);

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
    <>
      <form onSubmit={handleSubmit}>
        <InputText
          label="Nom"
          name="nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
        <InputText
          label="Description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <InputText
          label="Prix"
          name="prix"
          value={prix}
          onChange={(event) => setPrix(event.target.value)}
        />
        <InputText
          label="Image URL"
          name="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <InputText
          label="Taille"
          name="tail"
          value={tail}
          onChange={(event) => setTail(event.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>

      <h2>Product List</h2>
      <Table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Image URL</th>
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
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{product.tail} ml</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AddProducts;
