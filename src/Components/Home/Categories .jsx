import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../assets/css/custom.css';
import SofaIcon from '../../assets/images/categories/Sofas.jpg';
import BedIcon from '../../assets/images/categories/Beds.jpg';
import DiningIcon from '../../assets/images/categories/Dining_Sets.jpg';
import ChairIcon from '../../assets/images/categories/Chairs.jpg';
import TableIcon from '../../assets/images/categories/Tables.jpg';
import BlindsIcon from '../../assets/images/categories/Blinds.jpg';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categoryData = [
    { name: 'Sofas', icon: SofaIcon },
    { name: 'Beds', icon: BedIcon },
    { name: 'Dining Sets', icon: DiningIcon },
    { name: 'Chairs', icon: ChairIcon },
    { name: 'Tables', icon: TableIcon },
    { name: 'Blinds', icon: BlindsIcon },
  ];

  return (
    <>
      <Container className="text-center overflow-hidden" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>CATEGORIES</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
      </Container>

      <Container className="text-center overflow-hidden" fluid={true}>
        <Row>
          {categoryData.map((category, index) => (
            <Col key={index} lg={2} md={2} sm={6}>
              <div>
                <Link to="/category">
                  <Card className="h-100 w-100 shake overflow-hidden text-center">
                    {category.icon && (
                      <>
                        <img className="center categoryImage" src={category.icon} alt={`Category ${category.name}`} />
                        <h4 className="category-name">{category.name}</h4>
                      </>
                    )}
                  </Card>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Categories;
