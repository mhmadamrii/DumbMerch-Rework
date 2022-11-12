import React, { useState } from "react";
import { NavbarUser } from "../components/navbar/Navbar";
import Mouse from "../assets/Mouse.png";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const styles = {
  container: {
    // border: '1px solid red',
    margin: '80px auto',
    display: 'flex',
    justifyContent: 'center',
    gap: 50
  },
  left: {
    // border: '1px solid red',
    width: 420,
    height: 500
  },
  right: {
    width: 420
  }
}


export default function DetailProduct() {

  let navigate = useNavigate()

  return (
    <React.Fragment>
      <NavbarUser />
      
      <div style={styles.container}>
        <div style={styles.left}>
          <img src={Mouse} alt="Detail image" style={{ width: '100%', height: '100%' }} />
        </div>

        <div style={styles.right}>
          <h2>Mouse</h2>
            <p>Proident et et Lorem aliquip ex proident. Ut sunt ut irure ex tempor ut. Cillum officia tempor excepteur nostrud excepteur exercitation tempor. Cupidatat quis in cillum esse reprehenderit esse. Non minim nostrud non cillum dolor consectetur ad ipsum. Sunt amet aute fugiat ad amet veniam. Anim nisi voluptate voluptate velit minim aliqua anim adipisicing eiusmod dolor.</p>
            <Button variant="danger" style={{ width: '100%', height: 50, marginTop: 40 }} onClick={() => navigate('#')}>Beli</Button>
        </div>
      </div>
    </React.Fragment>
  );
}
