import Carousel from "react-bootstrap/Carousel";

function CarouselProduit({ products }) {
  return (
    <Carousel fade>
      {products.map((product) => (
        <Carousel.Item key={product.id}>
          <img
            className="d-block w-100"
            src={product.image}
            alt={product.nom}
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>{product.nom}</h3>
            <p>{product.description}</p>
            <p>
              <strong>Prix:</strong> {product.prix} €
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselProduit;
