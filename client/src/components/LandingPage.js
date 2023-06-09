import React from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import Login from "./Login";

const Landingpage = () => {
  return (
    <div>
      <Navigation />
      <section className="bg-grey text-dark p-5 text-center text-sm-start section">
        <div className="Container">
          <div className="d-sm-flex justify-content-between">
            <div className="bg">
              <h1>
                Track all your
                <span className="text-warning"> flows of Finances</span>
              </h1>
              <p className="lead my-2">
                Register to track all your personal or business expenses. Know
                where your money is going{" "}
              </p>
              <Button className="btn btn-primary btn-lg bg-dark">
  <Link to="/login" className="text-white text-decoration-none">
    Try for free
  </Link>
</Button>

            </div>
          </div>
        </div><br></br>
        <Container>
      <Row>
        <Col md={6} lg={3}>
          <Card>
          <Card.Body>
    <Card.Title className="text-warning">Income Analytics</Card.Title>
    <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
      tortor eget nulla ornare consequat. Nulla vitae mauris ac ex
      hendrerit bibendum. 
    </Card.Text>
  </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card>
          <Card.Body>
    <Card.Title className="text-warning">Expenses Tracker</Card.Title>
    <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
      tortor eget nulla ornare consequat. Nulla vitae mauris ac ex
      hendrerit bibendum. 
    </Card.Text>
  </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card>
          <Card.Body>
    <Card.Title className="text-warning">Financial Report</Card.Title>
    <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
      tortor eget nulla ornare consequat. Nulla vitae mauris ac ex
      hendrerit bibendum. 
    </Card.Text>
  </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card>
          <Card.Body>
    <Card.Title className="text-warning">Management</Card.Title>
    <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
      tortor eget nulla ornare consequat. Nulla vitae mauris ac ex
      hendrerit bibendum. 
    </Card.Text>
  </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Landingpage;
