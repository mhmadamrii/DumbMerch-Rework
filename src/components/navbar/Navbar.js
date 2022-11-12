import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    // border: '1px solid red',
    display: "flex",
    justifyContent: "space-between",
    height: 80,
    alignItems: "center",
    padding: "0 40px",
  },
  logo: {
    width: 70,
  },
  left: {
    width: 70,
  },
  right: {
    // border: '1px solid red',
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  lists: {
    color: "#ffff",
    fontWeight: 'bold'
  },
};

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
  );
};

export const NavbarUser = (props) => {

  const { activeLink, activeProfile } = props
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <div style={styles.container}>
        <div style={styles.left}>
          <button onClick={() => navigate("/homepage")}>
            <img src={Logo} style={styles.logo} alt="Logo" />
          </button>
        </div>

        <div style={styles.right}>
          <button
            style={{ color: activeLink ? "red" : "#ffff", fontWeight: 'bold' }}
            onClick={() => navigate("/complain")}
          >
            Complain
          </button>
          <button
            style={{ color: activeProfile ? "red" : "#ffff", fontWeight: 'bold' }}
            onClick={() => navigate("/profile")}
          >
            Profile
          </button>
          <button style={styles.lists} onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
