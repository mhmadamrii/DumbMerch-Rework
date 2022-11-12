import React, { useState } from "react";
import { NavbarUser, NavbarAdminn } from "../components/navbar/Navbar";

const styles = {
  container: {
    border: '1px solid red',
    margin: '80px auto',
  }
}

export default function Profile() {
  return (
    <React.Fragment>
      <NavbarUser
        activeProfile
      />
      
      <div style={styles.container}>

      </div>
    </React.Fragment>
  );
}
