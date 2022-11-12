import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../../assets/Logo.png";

const styles = {
  container: {
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
    padding: '0 50px'
  },
  logo: {
    width: 70
  },
  left: {
    width: 70,
  },
  right: {
    // border: '1px solid red',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 20
  },
  lists: {
    color: '#ffff',
    // border: '1px solid blue'
  }
}

export const NavbarAdmin = () => {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <div style={styles.left}>
          <img src={Logo} style={styles.logo} alt="Logo" />
        </div>
        <div style={styles.right}>
          <button style={styles.lists}>Complain</button>
          <button style={styles.lists}>Category</button>
          <button style={styles.lists}>Product</button>
          <button style={styles.lists}>Logout</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export const NavbarUser = () => {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <div style={styles.left}>
          <img src={Logo} style={styles.logo} alt="Logo" />
        </div>
        <div style={styles.right}>
          <button style={styles.lists}>Complain</button>
          <button style={styles.lists}>Profile</button>
          <button style={styles.lists}>Logout</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar;