import React, { useState } from "react";
import { NavbarUser } from "../components/navbar/Navbar";
import Mouse from "../assets/Mouse.png";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    // border: '1px solid red',
    margin: "80px auto",
    display: "flex",
    justifyContent: "center",
    gap: 50,
  },
  left: {
    // border: '1px solid red',
    width: 420,
    height: 500,
  },
  right: {
    width: 420,
  },
  desc: {
    color: "#ffff",
    marginTop: 60
  },
  btn: {
    width: "100%",
    height: 50,
    marginTop: 40,
  },
};

export default function DetailProduct() {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <NavbarUser />

      <div style={styles.container}>
        <div style={styles.left}>
          <img
            src={Mouse}
            alt="Detail image"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div style={styles.right}>
          <h2 style={{ color: "#F74D4D" }}>Mouse</h2>
          <span style={{ color: '#ffff'}}>Stock: 100</span>
          <p style={styles.desc}>
            Proident et et Lorem aliquip ex proident. Ut sunt ut irure ex tempor
            ut. Cillum officia tempor excepteur nostrud excepteur exercitation
            tempor. Cupidatat quis in cillum esse reprehenderit esse. Non minim
            nostrud non cillum dolor consectetur ad ipsum. Sunt amet aute fugiat
            ad amet veniam. Anim nisi voluptate voluptate velit minim aliqua
            anim adipisicing eiusmod dolor.
          </p>
          <h2 style={{ color: "#F74D4D", textAlign: 'end' }}>Rp.300.000</h2>
          <Button
            variant="danger"
            style={styles.btn}
            onClick={() => navigate("#")}
          >
            Beli
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
