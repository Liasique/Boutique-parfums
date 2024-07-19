import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api/Api";
import { Container, Row, Col, Button } from "react-bootstrap";
import toast from "react-hot-toast";

const DetailsProduit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const fetchProductDetails = async () => {
    try {
      const response = await api.post(`/api/produit/${id}`);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // const handleOrder = () => {
  // api;
  // alert(`Ordered ${quantity} of ${product.nom}`);
  // };

  const handleOrder = async () => {
    if (localStorage.getItem("user") == null) {
      alert("Merci de vous connecter");
      return;
    }

    const userId = JSON.parse(localStorage.getItem("user")).id;
    const orderDetails = {
      idUser: userId,
      idProduit: product.id,
      qte: quantity,
    };

    api
      .post("/api/commande/save", orderDetails)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const totalCost = product.prix * quantity;

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={4}>
          <img
            className="img-fluid"
            src={product.image}
            alt={product.nom}
            style={{ height: "300px", objectFit: "cover", width: "100%" }}
          />
        </Col>
        <Col md={4}>
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <h2 className="text-center mt-3">{product.nom}</h2>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
            <p>
              <strong>Prix:</strong> {product.prix} €
            </p>
            <p>
              <strong>Taille:</strong> {product.tail} ml
            </p>
            <div className="d-flex align-items-center mb-3">
              <Button
                variant="outline-secondary"
                onClick={handleRemoveQuantity}
              >
                -
              </Button>
              <span className="mx-2">{quantity}</span>
              <Button variant="outline-secondary" onClick={handleAddQuantity}>
                +
              </Button>
            </div>
            <p>
              <strong>Coût total:</strong> {totalCost} €
            </p>
            <Button variant="outline-secondary" onClick={handleOrder}>
              Commander
            </Button>

            <Link to={`/commande`} className="btn btn-cmd mt-3">
              Voir mes Commands
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default DetailsProduit;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../api/Api";
// import { Container, Row, Col, Button } from "react-bootstrap";

// const DetailsProduit = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await api.post(`/api/produit/${id}`);
//       setProduct(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProductDetails();
//   }, [id]);

//   const handleAddQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleRemoveQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleOrder = () => {
//     alert(`Ordered ${quantity} of ${product.nom}`);
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const totalCost = product.prix * quantity;

//   return (
//     <Container>
//       <Row className="justify-content-center mt-5">
//         <Col md={4}>
//           <img
//             className="img-fluid"
//             src={product.image}
//             alt={product.nom}
//             style={{ height: "300px", objectFit: "cover", width: "100%" }}
//           />
//         </Col>
//         <Col md={4}>
//           <div className="shadow-sm p-3 mb-5 bg-white rounded">
//             <h2 className="text-center mt-3">{product.nom}</h2>
//             <p>
//               <strong>Description:</strong> {product.description}
//             </p>
//             <p>
//               <strong>Prix:</strong> {product.prix} €
//             </p>
//             <p>
//               <strong>Taille:</strong> {product.tail} ml
//             </p>
//             <div className="d-flex align-items-center mb-3">
//               <Button
//                 variant="outline-secondary"
//                 onClick={handleRemoveQuantity}
//               >
//                 -
//               </Button>
//               <span className="mx-2">{quantity}</span>
//               <Button variant="outline-secondary" onClick={handleAddQuantity}>
//                 +
//               </Button>
//             </div>
//             <p>
//               <strong>Coût total:</strong> {totalCost} €
//             </p>
//             <Button variant="outline-secondary" onClick={handleOrder}>
//               Commander
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default DetailsProduit;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../api/Api";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Toast,
//   ToastContainer,
// } from "react-bootstrap";

// const DetailsProduit = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const [showToast, setShowToast] = useState(false);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await api.post(`/api/produit/${id}`);
//       setProduct(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProductDetails();
//   }, [id]);

//   const handleAddQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleRemoveQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleOrder = () => {
//     setShowToast(true);
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const totalCost = product.prix * quantity;

//   return (
//     <Container>
//       <Row className="justify-content-center mt-5">
//         <Col md={6} className="d-flex justify-content-center">
//           <img
//             className="img-fluid"
//             src={product.image}
//             alt={product.nom}
//             style={{ height: "400px", objectFit: "cover" }}
//           />
//         </Col>
//         <Col md={6}>
//           <div className="shadow-sm p-4 mb-5 bg-white rounded">
//             <h2 className="text-center mt-3 mb-4">{product.nom}</h2>
//             <p>
//               <strong>Description:</strong> {product.description}
//             </p>
//             <p>
//               <strong>Prix:</strong> {product.prix} €
//             </p>
//             <p>
//               <strong>Taille:</strong> {product.tail} ml
//             </p>
//             <div className="d-flex align-items-center mb-3">
//               <Button
//                 variant="outline-secondary"
//                 onClick={handleRemoveQuantity}
//               >
//                 -
//               </Button>
//               <span className="mx-3">{quantity}</span>
//               <Button variant="outline-secondary" onClick={handleAddQuantity}>
//                 +
//               </Button>
//             </div>
//             <p className="mb-4">
//               <strong>Coût total:</strong> {totalCost} €
//             </p>
//             <Button className="w-100" onClick={handleOrder}>
//               Commander
//             </Button>
//           </div>
//         </Col>
//       </Row>
//       <ToastContainer position="top-end" className="p-3">
//         <Toast
//           onClose={() => setShowToast(false)}
//           show={showToast}
//           delay={3000}
//           autohide
//         >
//           <Toast.Header>
//             <strong className="me-auto">Notification</strong>
//           </Toast.Header>
//           <Toast.Body>Commande passée avec succès!</Toast.Body>
//         </Toast>
//       </ToastContainer>
//     </Container>
//   );
// };

// export default DetailsProduit;

// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import api from "../../api/Api";
// // import { Container, Row, Col } from "react-bootstrap";

// // const DetailsProduit = () => {
// //   const { id } = useParams(); // Get the product ID from the URL parameters
// //   const [product, setProduct] = useState(null); // State to store product details
// //   const [loading, setLoading] = useState(true); // State to handle loading state

// //   const fetchProductDetails = async () => {
// //     try {
// //       const response = await api.post(`/api/produit/${id}`); // Fetch product details
// //       setProduct(response.data); // Update the product state with fetched data
// //       setLoading(false); // Set loading to false after data is fetched
// //     } catch (error) {
// //       console.error("Error fetching product details:", error); // Log any errors
// //       setLoading(false); // Set loading to false in case of an error
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProductDetails();
// //   }, [id]); // Dependency array ensures this runs when `id` changes

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   if (!product) {
// //     return <p>Product not found</p>;
// //   }

// //   return (
// //     <Container>
// //       <Row className="justify-content-center mt-5">
// //         <Col md={8}>
// //           <div className="shadow-sm p-3 mb-5 bg-white rounded">
// //             <img
// //               className="img-fluid"
// //               src={product.image}
// //               alt={product.nom}
// //               style={{ height: "300px", objectFit: "cover", width: "100%" }}
// //             />
// //             <h2 className="text-center mt-3">{product.nom}</h2>
// //             <p>
// //               <strong>Description:</strong> {product.description}
// //             </p>
// //             <p>
// //               <strong>Prix:</strong> {product.prix} €
// //             </p>
// //             <p>
// //               <strong>Taille:</strong> {product.tail} ml
// //             </p>
// //           </div>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default DetailsProduit;
