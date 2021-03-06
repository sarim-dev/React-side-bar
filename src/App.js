import React, { useState, useEffect } from "react";
import SimpleAccordion from "./components/Simpleaccordion/simpleAccordion";
import "./components/Simpleaccordion/simpleAccordion.css";

import data from "./Data.json";

const array = [];
const arrayPrice = [];
const arrayBrand = [];
const arrayStore = [];

function App() {
  console.log("I am the Json Data", data);

  const myBrand = new Set();
  const myStore = new Set();

  // const [array, setArray] = useState([]);
  // const [arrayPrice, setArrayPrice] = useState([]);
  // const [arrayBrand, setArrayBrand] = useState([]);
  // const [arrayStore, setArrayStore] = useState([]);

  function ManageArray() {
    const arraySorting = () => {
      data.forEach((object) => {
        console.log("objectsss", object);
        if (object.approved === "true") {
          array.push(object);
        }
      });

      array.forEach((object) => {
        if (object.sellerType === "brand") {
          // arrayBrand.push(object.sellerName);
          myBrand.add(object.sellerName);
          arrayPrice.push(object.price);
        } else if (object.sellerType === "store") {
          myStore.add(object.sellerName);
          //arrayStore.push(object.sellerName);
          arrayPrice.push(object.price);
        }
      });

      console.log("Simple Array in which data was pushed", array);

      // console.log("Brand array has these names", myBrand.values());

      // console.log("Store array has these names", myStore);

      console.log("Price array has these names", arrayPrice);

      myBrand.forEach((object) => {
        console.log("I am BRAAAAAAAAAAAAAAAAND", object);
        arrayBrand.push(object);
      });
      myStore.forEach((object) => {
        console.log("I am BRAAAAAAAAAAAAAAAAND", object);
        arrayStore.push(object);
      });

      console.log("Array Priceeeeeeeeeeeeeeeeeeeeee", arrayPrice);
      const maxPrice = Math.max(...arrayPrice);
      const minPrice = Math.min(...arrayPrice);

      let sum = 0;

      arrayPrice.map((price) => {
        sum += parseInt(price);
      });

      // How many chunks should we divide our price category into
      console.log("my array lenght isss", arrayPrice.length);
      const average = sum / arrayPrice.length;
      console.log("Summmmm is", sum);
      console.log("averageeee issss", average);
      console.log("Max and Min", maxPrice, minPrice);
    };
    arraySorting();
  }

  useEffect(() => {
    ManageArray();
    // eslint-disable-next-line
  }, []);

  // <hr style={{ color: "#999999"}}/>
  return (
    <React.Fragment>
      <div className="sidenav">
        <SimpleAccordion
          children="Brands"
          arrayName={arrayBrand}
          loopCounter={4}
        />

        <SimpleAccordion
          children="Stores"
          arrayName={arrayStore}
          loopCounter={1}
        />
        <SimpleAccordion
          children="Brands"
          arrayName={arrayBrand}
          loopCounter={3}
        />

        <SimpleAccordion children="Price" arrayName={arrayBrand} />
      </div>
    </React.Fragment>
  );
}
export default App;
