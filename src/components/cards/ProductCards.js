import React, { useState } from "react";
import Mouse from "../../assets/Mouse.png";
import Keyboard from "../../assets/Keyboard.png";
import { useNavigate } from "react-router-dom";


const styles = {
  container: {
    backgroundColor: '#212121',
    width: 245,
    height: 410,
    cursor: 'pointer'
  },
  imgProduct: {
    display: 'block',
    margin: 'auto'
  },
  desc: {
    paddingLeft: 5,
    color: '#ffff',
    backgroundColor: '#212121',
  }
}

export default function ProductCards(props) {

  const { 
    imageProduct, 
    nameProduct,
    stockProduct, 
    priceProduct
  } = props

  let navigate = useNavigate()

  return (
    <React.Fragment>
      <div style={styles.container} onClick={() => navigate('/detail-product')}>
        <div>
          <img src={imageProduct} alt="Product image" style={styles.imgProduct} />
        </div>

        <div style={styles.desc}>
          <h5 style={{ backgroundColor: '#212121', color: '#F74D4D' }}>{nameProduct}</h5>
          <h5 style={{ backgroundColor: '#212121' }}>Rp{priceProduct}</h5>
          <h5 style={{ backgroundColor: '#212121' }}>{stockProduct}</h5>
        </div>
      </div>
    </React.Fragment>
  );
}
