import React, { useState } from "react";
import { NavbarUser, NavbarAdminn } from "../components/navbar/Navbar";
import ProfileJohn from "../assets/Profile.png";
import Logo from "../assets/Logo.png";
import Mouse from "../assets/Mouse.png";


const styles = {
  container: {
    // border: '1px solid red',
    margin: '80px auto',
    width: 1200,
    display: 'flex',
    height: 370
  },
  left: {
    width: 300,
  },
  mid: {
    width: 400,
    // border: '1px solid red'
  },
  right: {
    width: 500,
    // border: '1px solid red'
  },
  wrapper: {
    marginTop: 20,
    // border: '1px solid blue',
  },
  staticInfo: {
    color: '#F74D4D',
    backgroundColor: 'inherit'
  },
  changableInfo: {
    color: '#ffff',
    margin: '0 0 30px 0',
    backgroundColor: 'inherit'
  },
  listTransaction: {
    height: 160,
    // border: '1px solid blue',
    margin: '0 0 10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#303030',
    padding: '5px 30px',
    borderRadius: 10
  },
  leftTransaction: {
  },
  midTransaction: {
    backgroundColor: 'inherit',
    // border: '1px solid red'
  },
  rightTransaction: {
    backgroundColor: 'inherit',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  imgList: {
    height: '100%'
  },
}

export default function Profile() {
  return (
    <React.Fragment>
      <NavbarUser
        activeProfile
      />
      
      <div style={styles.container}>
        <div style={styles.left}>
          <h4 style={{ color: '#F74D4D' }}>My Profile</h4>
          <div style={styles.wrapper}>
            <img src={ProfileJohn} alt="Profile image" style={{ width: 250, height: 300 }} />
          </div>
        </div>

        <div style={styles.mid}>
          <div style={styles.wrapper}><br />
            <h6 style={styles.staticInfo}>Name</h6>
            <h6 style={styles.changableInfo}>Yosep</h6>

            <h6 style={styles.staticInfo}>Email</h6>
            <h6 style={styles.changableInfo}>Email@gmail.com</h6>

            <h6 style={styles.staticInfo}>Phone</h6>
            <h6 style={styles.changableInfo}>Gender</h6>

            <h6 style={styles.staticInfo}>Adress</h6>
            <h6 style={styles.changableInfo}>Duis et exercitation occaecat reprehenderit fugiat do ea sunt velit. </h6>
          </div>
        </div>

        <div style={styles.right}>
        <h4 style={{ color: '#F74D4D' }}>My Transaction</h4>
          <div style={styles.wrapper}>
            <div style={styles.listTransaction}>
              <div style={styles.leftTransaction}>
                <img src={Mouse} style={styles.imgList} />
              </div>

              <div style={styles.midTransaction}>
                <span style={styles.staticInfo}>Mouse</span><br />
                <span style={styles.staticInfo}>Saturday, 14 Juli 2021</span><br />
                <span style={styles.changableInfo}>Price: Rp.300.000</span><br /><br /><br />
                <span style={{ color: '#ffff', backgroundColor: 'inherit' }}>Sub Total: Rp.300.000</span>
              </div>

              <div style={styles.rightTransaction}>
                <img src={Logo} style={{ backgroundColor: 'inherit', width: 80 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
