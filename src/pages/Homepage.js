import React, { useState } from "react";
import { NavbarAdmin, NavbarUser } from "../components/navbar/Navbar";
import ProductCards from "../components/cards/ProductCards";
import Mouse from "../assets/Mouse.png";
import Keyboard from "../assets/Keyboard.png";
import Skeleton from "react-loading-skeleton";

const styles = {
  container: {
    // border: '1px solid red',
    margin: "80px auto",
    width: 1200,
  },
  cardLists: {
    // border: '1px solid blue',
    display: "flex",
    flexWrap: "wrap",
    padding: 10,
    gap: 65,
    width: 1200,
  },
};

export default function Homepage() {
  const [isAdmin, setIsAdmin] = useState(false);
  document.title = "DumbMerch | Homepage";

  return (
    <React.Fragment>
      {isAdmin ? <NavbarAdmin /> : <NavbarUser />}

      <div style={styles.container}>
        <h3 style={{ color: "#F74D4D", marginLeft: 10 }}>Product</h3>
        <div style={styles.cardLists}>
          <ProductCards
            imageProduct={Mouse}
            nameProduct="Mouse"
            priceProduct="500.000"
            stockProduct="600"
          />

          <ProductCards
            imageProduct={Keyboard}
            nameProduct="Keyboard"
            priceProduct="500.000"
            stockProduct="300"
          />
          <ProductCards
            imageProduct={Keyboard}
            nameProduct="Keyboard"
            priceProduct="500.000"
            stockProduct="300"
          />
          <ProductCards
            imageProduct={Keyboard}
            nameProduct="Keyboard"
            priceProduct="500.000"
            stockProduct="300"
          />
          <ProductCards
            imageProduct={Keyboard}
            nameProduct="Keyboard"
            priceProduct="500.000"
            stockProduct="300"
          />
          <ProductCards
            imageProduct={Keyboard}
            nameProduct="Keyboard"
            priceProduct="500.000"
            stockProduct="300"
          />

          <Skeleton count={5} />
        </div>
      </div>
    </React.Fragment>
  );
}
