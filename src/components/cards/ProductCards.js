import React, { useState } from "react";
import Mouse from "../../assets/Mouse.png";
import Keyboard from "../../assets/Keyboard.png";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    // backgroundColor: '#212121',
    width: 245,
    cursor: "pointer",    
  },
  imgProduct: {
    display: "block",
    margin: "auto",
    maxWidth: 250,
    minHeight: 300,
    borderRadius: 20,
  },
  desc: {
    color: "#ffff",
    backgroundColor: "#212121",
    borderRadius: 15,
    padding: 10,
    marginTop: 5,    
  },
};

export default function ProductCards(props) {
  const { imageProduct, nameProduct, stockProduct, priceProduct } = props;

  let navigate = useNavigate();

  return (
    <React.Fragment>
      <div style={styles.container} onClick={() => navigate("/detail-product")}>
        <div>
          <img
            src={imageProduct}
            alt="Product image"
            style={styles.imgProduct}
          />
        </div>

        <div style={styles.desc}>
          <h5 style={{ backgroundColor: "#212121", color: "#F74D4D" }}>
            {nameProduct}
          </h5>
          <h6 style={{ backgroundColor: "#212121" }}>$ {priceProduct}</h6>
          <h6 style={{ backgroundColor: "#212121" }}>stock: {stockProduct}</h6>
        </div>
      </div>
    </React.Fragment>
  );
}
