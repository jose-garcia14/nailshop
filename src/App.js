import { flexbox } from "@mui/system";
import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Banner from "./components/Banner";
const listOfItems = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0086/5982/8841/products/image_38e1952e-8eca-4751-ac40-e3ce43fc3fbb_360x.jpg?v=1645674802",
    name: "cool ass nail",
    price: 1.23,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0086/5982/8841/products/image_1e0a25ea-ed63-46ca-b426-e06c53331c78_360x.jpg?v=1645674693",
    name: "another cool ass nail",
    price: 1.5,
  },
];
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      {/*<ProductCard
        image="https://cdn.shopify.com/s/files/1/0086/5982/8841/products/image_38e1952e-8eca-4751-ac40-e3ce43fc3fbb_360x.jpg?v=1645674802"
        name="Cool Ass Nail"
        price={1.23}
      ></ProductCard> */}
      <Banner></Banner>
      <div style={{ display: flexbox }}>
        <div style={{ textAlign: "center" }}>
          <h1>NEW ARRIVALS</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              fontFamily: "inherit",
              fontWeight: "bold",
              borderRadius: 30,
              width: 120,
              height: 30,
              backgroundColor: "white",
              boxShadow: "none",
              border: "2px solid #e8e8e8",
            }}
          >
            VIEW ALL
          </button>
        </div>
        <div>
          {listOfItems.map((product) => (
            <ProductCard
              name={product.name}
              image={product.image}
              price={product.price}
            ></ProductCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
