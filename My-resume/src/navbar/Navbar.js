import React from "react";
import { Nav } from "react-bootstrap";
const Navbarr = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Link href="#home">Atieh Amini</Nav.Link>

        <Nav.Item>
          <Nav.Link href="/home">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            {" "}
            Resume
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Contact Me
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbarr;
