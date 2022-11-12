import React, { useState } from "react";
import { NavbarUser, NavbarAdmin } from "../components/navbar/Navbar";

const styles = {
  container: {
    border: '1px solid red',
    margin: '80px auto'
  }
}

export default function Complain() {
  return (
    <React.Fragment>
      <NavbarUser
        activeLink
      />
      
      <div style={styles.container}>
        <h1>Complain page</h1>
      </div>
    </React.Fragment>
  );
}
