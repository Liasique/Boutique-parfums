import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import api from "../../api/Api";
import CarouselProduit from "./CarouselProduit";
import { Link } from "react-router-dom";

const Accueil = () => {
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

  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={2} className="g-4 mt-4">
          {products.slice(0, 4).map((product) => (
            <Col key={product.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  className="product-img"
                  src={product.image}
                  alt={product.nom}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{product.nom}</Card.Title>
                  <div className="mt-auto">
                    <Card.Text>
                      <strong>Prix:</strong> {product.prix} €
                    </Card.Text>
                    <Card.Text>
                      <strong>Taille:</strong> {product.tail} ml
                    </Card.Text>
                  </div>
                  <Link
                    to={`/details/${product.id}`}
                    className="btn btn-cmd mt-3"
                  >
                    Voir details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="intro-text mt-4 mb-4 text-center">
          <h1>Bienvenue sur notre boutique ParisParfums</h1>
          <p>
            Découvrez notre sélection exclusive de parfums de luxe pour hommes
            et femmes. Chez nous, chaque parfum est une œuvre d'art,
            soigneusement choisie pour ses notes uniques et sa qualité
            exceptionnelle. Laissez-vous séduire par nos collections et trouvez
            le parfum qui vous correspond.
          </p>
        </div>
        <CarouselProduit products={products} />
      </Container>
    </>
  );
};

export default Accueil;
