import React, { useState } from "react";
import { NavbarUser } from "../components/navbar/Navbar";
import ProfileImg from "../assets/Profile.png";
import Mouse from "../assets/Mouse.png";
import Logo from "../assets/Logo.png";

export default function Profile() {
  const styles = {
    foundation: {
      // border: "1px solid red",
      color: "#F74D4D",
    },
  };
  return (
    <React.Fragment>
      <div>
        <NavbarUser activeProfile />
      </div>

      <div className="container">
        <div className="row" style={{ marginTop: 50 }}>
          <div className="col-8" style={styles.foundation}>
            <h3>My Profile</h3> <br />
            <div class="row">
              <div class="col-5">
                <img src={ProfileImg} style={{ width: 300, height: 400 }} />
              </div>
              <div class="col-7">
                <h5>Name</h5>
                <p style={{ color: "#ffff" }}>Lorem</p>

                <h5>Email</h5>
                <p style={{ color: "#ffff" }}>Lorem</p>

                <h5>Phone</h5>
                <p style={{ color: "#ffff" }}>Lorem</p>

                <h5>Gender</h5>
                <p style={{ color: "#ffff" }}>Lorem</p>

                <h5>Adress</h5>
                <p style={{ color: "#ffff" }}>Lorem</p>
              </div>
            </div>
          </div>

          <div className="col-4" style={styles.foundation}>
            <h3>My Transaction</h3> <br />
            <div style={styles.foundation}>
              <div
                className="row"
                style={{
                  // border: "1px solid red",
                  height: 130,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  backgroundColor: "#303030",
                }}
              >
                <div className="col-3" style={{ backgroundColor: "#303030" }}>
                  <img
                    src={Mouse}
                    style={{
                      width: "100%",
                      height: 100,
                      backgroundColor: "#303030",
                    }}
                  />
                </div>
                <div className="col-6" style={{ backgroundColor: "#303030" }}>
                  <p style={{ backgroundColor: "#303030" }}>
                    lorem ipsum dolor
                  </p>
                  <p style={{ backgroundColor: "#303030" }}>
                    lorem ipsum dolor
                  </p>
                </div>
                <div
                  className="col-3"
                  style={{
                    // border: "1px solid red",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#303030",
                    borderRadius: 10
                  }}
                >
                  <img
                    src={Logo}
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#303030",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
