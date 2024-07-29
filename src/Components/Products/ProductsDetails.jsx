import React, { useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Accordion,
  Button,
} from "react-bootstrap";
import image1 from "../../assets/images/product1/1.jpeg";
import image2 from "../../assets/images/product1/2.jpeg";
import image3 from "../../assets/images/product1/3.jpeg";
import image4 from "../../assets/images/product1/4.jpeg";
import image5 from "../../assets/images/product1/5.jpeg";
import SuggestedProduct from "./SuggestedProduct";

function ProductsDetails() {
  const [mainImage, setMainImage] = useState(image1); // State to track the main image

  const images = [image3, image2, image5, image4];
  const reviews = [
    {
      id: 1,
      user: "John Doe",
      rating: 4,
      comment: "Great product, very comfortable and stylish.",
    },
    {
      id: 2,
      user: "Jane Smith",
      rating: 5,
      comment: "Excellent quality, exceeded my expectations.",
    },
    {
      id: 3,
      user: "Emily Johnson",
      rating: 3,
      comment: "Good product, but could be more durable.",
    },
    {
      id: 4,
      user: "Michael Brown",
      rating: 4,
      comment: "Satisfied with the purchase, good value for money.",
    },
    {
      id: 5,
      user: "Jessica Wilson",
      rating: 5,
      comment: "Absolutely love it! Looks even better in person.",
    },
  ];

  const handleImageClick = (image) => {
    setMainImage(image); // Update main image when a small image is clicked
  };

  return (
    <Container fluid={true}>
      <Row className="p-2">
        <Col
          className="shadow-sm bg-white pb-3 mt-4"
          md={12}
          lg={12}
          sm={12}
          xs={12}
        >
          <Row>
            <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
              <Row className="p-2">
                <Col
                  md={2}
                  lg={2}
                  sm={12}
                  xs={12}
                  className="preview-image-responsive"
                >
                  {images.map((image, index) => (
                    <Col key={index} className="p-0 m-0 margin-image-preview">
                      <img
                        src={image}
                        className="smallimage product-sm-img my-1"
                        alt={`Product ${index + 1}`}
                        onClick={() => handleImageClick(image)} // onClick event handler
                      />
                    </Col>
                  ))}
                </Col>
                <Col md={10} lg={10} sm={12} xs={12}>
                  {/* Render main image dynamically */}
                  <InnerImageZoom
                    className="main-image1"
                    zoomType={"hover"}
                    zoomScale={1.5}
                    src={mainImage}
                    zoomSrc={mainImage}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              className="p-3 m-lg-auto text-start "
              md={6}
              lg={4}
              sm={12}
              xs={12}
            >
              <h5 className="Product-Name">product name</h5>
              <h6 className="section-sub-title"> short_description</h6>
              price, special_price
              <h6 className="mt-2">
                Category : <b>category</b>{" "}
              </h6>
              <h6 className="mt-2">
                SubCategory : <b>subcategory</b>
              </h6>
              <h6 className="mt-2">
                Brand : <b>brand</b>
              </h6>
              <h6 className="mt-2">
                Product Code : <b>product_code</b>
              </h6>
              <div>
                <h6 className="mt-2"> Choose Color </h6>
                <select className="form-control form-select">
                  <option disabled>Choose Color</option>
                  <option>Red</option>
                  <option>green</option>
                </select>
              </div>
              <div>
                <h6 className="mt-2"> Choose Size </h6>
                <select className="form-control form-select">
                  <option disabled>Choose Color</option>
                  <option>Large</option>
                  <option>small</option>
                </select>
              </div>
              <div className="">
                <h6 className="mt-2"> Choose Quantity </h6>
                <select className="form-control form-select">
                  <option disabled>Choose Quantity</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="input-group mt-3">
                <button className="btn site-btn m-1 ">
                  {" "}
                  <i className="fa fa-shopping-cart"></i> addToCart{" "}
                </button>
                <button className="btn btn-success m-1">
                  {" "}
                  <i className="fa fa-car"></i> OrderNow{" "}
                </button>
                <button className="btn btn-secondary m-1">
                  {" "}
                  <i className="fa fa-heart"></i> addToFav{" "}
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="" md={6} lg={6} sm={12} xs={12}>
              <h6 className="mt-2">Product Details</h6>
              <p>
                The modern sofa is made of high-quality materials, offering both
                style and comfort. Its sleek design makes it a perfect fit for
                any contemporary living room.
              </p>
            </Col>
            <Col className="" md={6} lg={6} sm={12} xs={12}>
              <Accordion defaultActiveKey="0" flush>
                {reviews.map((review) => (
                  <Accordion.Item
                    key={review.id}
                    eventKey={review.id.toString()}
                  >
                    <Accordion.Header>{review.user}'s Review</Accordion.Header>
                    <Accordion.Body>
                      <p>Rating: {review.rating}/5</p>
                      <p>{review.comment}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Col>
      </Row>
      <SuggestedProduct/>
    </Container>
  );
}

export default ProductsDetails;
