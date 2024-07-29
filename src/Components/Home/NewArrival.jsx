import React, { useRef } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ar1 from '../../assets/images/categories/1.jpg';
import ar2 from '../../assets/images/categories/2.jpg';
import ar3 from '../../assets/images/categories/3.jpg';
import ar4 from '../../assets/images/categories/4.jpg';
import ar5 from '../../assets/images/categories/Chairs.jpg';
import ar6 from '../../assets/images/categories/Beds.jpg';
import ar7 from '../../assets/images/categories/Blinds.jpg';
import ar8 from '../../assets/images/categories/Sofas.jpg';
import { Link } from 'react-router-dom';

const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const products = [
    { image: ar1, name: 'Perfect Homes Webster Engineered Wood TV', price: '100$' },
    { image: ar2, name: 'Another Product', price: '120$' },
    { image: ar3, name: 'Awesome Furniture', price: '80$' },
    { image: ar4, name: 'Elegant Chair', price: '50$' },
    { image: ar5, name: 'Comfy Sofa', price: '150$' },
    { image: ar6, name: 'Modern Bed', price: '200$' },
    { image: ar7, name: 'Blinds Collection', price: '90$' },
    { image: ar8, name: 'Sofa Set', price: '180$' },
  ];

  return (
    <>
      <Container className="text-center overflow-hidden" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>
            New Arrival
            <a className="btn ms-3 rounded-2 btn-sm ml-2 site-btn" onClick={previous}>
              <i className="fa fa-angle-left"></i>
            </a>
            <a className="btn ms-2 btn-sm rounded-2 ml-2 site-btn" onClick={next}>
              <i className="fa fa-angle-right"></i>
            </a>
          </h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>
          <Slider ref={sliderRef} {...settings}>
            {products.map((product, index) => (
              <div key={index} className='p-2'>
                <Link to="/productdetails">
                  <Card className="image-box">
                    <div className='overflow-hidden'>
                      <img className="center w-100" src={product.image} alt="Product" />
                    </div>
                    <Card.Body>
                      <p className="product-name-on-card">{product.name}</p>
                      <div>
                        <span className="text-warning">
                        <i className="fa fa-star"></i> 
                          <i className="fa fa-star"></i> 
                        </span>
                        <span >
                        <i className="fa fa-star"></i> 
                          <i className="fa fa-star">
                        </i> <i className="fa fa-star"></i> 
                        </span>
                      </div>
                      <p className="product-price-on-card">price: {product.price}</p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
};

export default NewArrival;
