import React, { useState, useEffect } from "react";
import { NavbarAdmin, NavbarUser } from "../components/navbar/Navbar";
import ProductCards from "../components/cards/ProductCards";
import { BeatLoader } from "react-spinners";

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
  const baseURL = "https://dummyjson.com/products?limit=10";

  const [dataProduct, setDataProduct] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetData = async () => {
    try {
      const response = await fetch(baseURL);
      const json = await response.json();
      setTimeout(() => {
        setIsLoading(false);
        setDataProduct(json.products);
      }, 1500);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("done");
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  document.title = "DumbMerch | Homepage";
  return (
    <React.Fragment>
      {isAdmin ? <NavbarAdmin /> : <NavbarUser />}

      <div style={styles.container}>
        <h3 style={{ color: "#F74D4D", marginLeft: 10 }}>
          Product ({dataProduct.length})
        </h3>
        <div style={styles.cardLists}>
          {isLoading && (
            <div style={{ margin: "auto" }}>
              <BeatLoader loading={isLoading} color="#F74D4D" />
            </div>
          )}
          {dataProduct.map((item) => (
            <div key={item.id} style={{ borderRadius: 10 }}>
              <ProductCards
                imageProduct={item.images[0]}
                nameProduct={item.brand}
                priceProduct={item.price}
                stockProduct="300"
              />
            </div>
          ))}          
        </div>
      </div>
    </React.Fragment>
  );
}
