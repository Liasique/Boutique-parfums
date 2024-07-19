<!-- our mis en page
scelete de la page

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/Api";
import { Card, Container } from "react-bootstrap";

const DetailsProduit = () => {
const { id } = useParams();
const [product, setProduct] = useState(null);

const fetchProduct = async () => {
try {
const response = await api.get(`/api/produit/${id}`);
setProduct(response.data);
} catch (error) {
console.error("Error fetching product details:", error);
}
};

useEffect(() => {
fetchProduct();
}, [id]);

if (!product) {
return <div>Loading...</div>;
}

return (
<Container className="mt-4">
<Card className="h-100 shadow-sm">
<Card.Img
variant="top"
className="product-img"
src={product.image}
alt={product.nom}
/>
<Card.Body className="d-flex flex-column">
<Card.Title className="text-center">{product.nom}</Card.Title>
<Card.Text>{product.description}</Card.Text>
<div className="mt-auto">
<Card.Text>
<strong>Prix:</strong> {product.prix} €
</Card.Text>
<Card.Text>
<strong>Taille:</strong> {product.tail} ml
</Card.Text>
</div>
</Card.Body>
</Card>
</Container>
);
};

export default DetailsProduit; -->
