import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import image1 from "../../assets/images/productCategory/a.jpg";
import image2 from "../../assets/images/productCategory/b.jpg";
import image3 from "../../assets/images/productCategory/c.jpg";
import image4 from "../../assets/images/productCategory/d.jpg";
import image5 from "../../assets/images/productCategory/e.jpg";
import image6 from "../../assets/images/productCategory/f.jpg";
import image7 from "../../assets/images/productCategory/g.jpg";
import image8 from "../../assets/images/productCategory/h.jpg";
import { Link } from "react-router-dom";

function ProductCategory() {
  const products = [
    { image: image1, name: "Minimalist Desk", price: "100$" },
    { image: image2, name: "Modern Sofa", price: "200$" },
    { image: image3, name: "Vintage Table", price: "300$" },
    { image: image4, name: "Retro Cabinet", price: "400$" },
    { image: image5, name: "Contemporary Bed", price: "500$" },
    { image: image6, name: "Antique Dresser", price: "600$" },
    { image: image7, name: "Classic Chair", price: "700$" },
    { image: image8, name: "Industrial Shelf", price: "800$" },
  ];

  return (
    <>
      <Container className="text-center overflow-hidden" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2> Product Category</h2>
        </div>
      </Container>
      <Container className="text-center" fluid={true}>
        <Row>
          {products.map((product, index) => (
            <Col key={index} className="p-1" lg={3} md={3} sm={6}>
              <div>
                <Link to="/productdetails">
                  <Card className="image-box card w-100">
                    <div className="overflow-hidden w-100">
                      <img
                        className="center w-100"
                        src={product.image}
                        alt={`Product ${index}`}
                      />
                    </div>
                    <Card.Body>
                      <p className="product-name-on-card">{product.name}</p>
                      <p className="product-price-on-card">
                        Price: {product.price}
                      </p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ProductCategory;
