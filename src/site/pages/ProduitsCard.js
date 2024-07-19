import React, { useEffect, useState } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../api/Api";

const ProduitsCard = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

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

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") return a.prix - b.prix;
    if (sortOrder === "desc") return b.prix - a.prix;
    return 0;
  });

  return (
    <div>
      <Form.Group className="mb-4">
        <Form.Control
          as="select"
          onChange={handleSortChange}
          value={sortOrder}
          className="custom-select"
        >
          <option value="">Trier par</option>
          <option value="asc">Prix croissant</option>
          <option value="desc">Prix décroissant</option>
        </Form.Control>
      </Form.Group>
      <Row xs={1} md={2} lg={4} className="g-4">
        {sortedProducts.map((product) => (
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
                {/* <button 
                  className="btn btn-cmd mt-3"
                  onClick={() => handleCommanderClick(product.id)}
                >
                  Voir details
                </button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProduitsCard;

// import React, { useEffect, useState } from "react";
// import { Card, Col, Row, Form } from "react-bootstrap";
// import api from "../../api/Api";

// const ProduitsCard = () => {
//   const [products, setProducts] = useState([]);
//   const [sortOrder, setSortOrder] = useState("");

//   const fetchProducts = async () => {
//     try {
//       const response = await api.post("/api/produit/all");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//   };

//   const sortedProducts = [...products].sort((a, b) => {
//     if (sortOrder === "asc") return a.prix - b.prix;
//     if (sortOrder === "desc") return b.prix - a.prix;
//     return 0;
//   });

//   return (
//     <div>
//       <Form.Group className="mb-4">
//         <Form.Control
//           as="select"
//           onChange={handleSortChange}
//           value={sortOrder}
//           className="custom-select"
//         >
//           <option value="">Trier par</option>
//           <option value="asc">Prix croissant</option>
//           <option value="desc">Prix décroissant</option>
//         </Form.Control>
//       </Form.Group>
//       <Row xs={1} md={2} lg={4} className="g-4">
//         {sortedProducts.map((product) => (
//           <Col key={product.id}>
//             <Card className="h-100 shadow-sm">
//               <Card.Img
//                 variant="top"
//                 className="product-img"
//                 src={product.image}
//                 alt={product.nom}
//               />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="text-center">{product.nom}</Card.Title>
//                 {/* <Card.Text className="flex-grow-1">
//                   {product.description}
//                 </Card.Text> */}
//                 <div className="mt-auto">
//                   <Card.Text>
//                     <strong>Prix:</strong> {product.prix} €
//                   </Card.Text>
//                   <Card.Text>
//                     <strong>Taille:</strong> {product.tail} ml
//                   </Card.Text>
//                 </div>
//                 <button variant="primary" className="mt-3 btn-cmd">
//                   Voir details
//                 </button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default ProduitsCard;
