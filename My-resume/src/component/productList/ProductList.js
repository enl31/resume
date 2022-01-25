import React from "react";
import "./productList.css";
import Card from "react-bootstrap/Card";
const ProductList = () => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>
          <h3>RESUME & SKILLS</h3>
        </Card.Header>
        <Card.Body>
          <canvas height="187" width="187" className="chart"></canvas>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
};

export default ProductList;
