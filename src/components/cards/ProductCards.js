import React, { useState } from "react";
import Mouse from "../../assets/Mouse.png";
import Keyboard from "../../assets/Keyboard.png";


const styles = {
  container: {
    backgroundColor: '#212121',
    width: 245,
    height: 410
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

  return (
    <React.Fragment>
      <div style={styles.container}>
        <div>
          <img src={imageProduct} alt="Product image" style={styles.imgProduct} />
        </div>

        <div style={styles.desc}>
          <h5 style={{ backgroundColor: '#212121' }}>{nameProduct}</h5>
          <h5 style={{ backgroundColor: '#212121' }}>Rp{priceProduct}</h5>
          <h5 style={{ backgroundColor: '#212121' }}>{stockProduct}</h5>
        </div>
      </div>
    </React.Fragment>
  );
}
