import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizza1 from "../src/assets/images/pizza-1.jpg";
import pizza2 from "../src/assets/images/pizza-2.jpg";
import pizza3 from "../src/assets/images/pizza-3.jpg";
import pizza4 from "../src/assets/images/pizza-4.jpg";
import pizza5 from "../src/assets/images/pizza-5.jpg";

const pizzaData = [
  {
    name: "Foccaci",
    ingredients: "peppers, onions, sausage",
    photoName: pizza1,
    price: 15,
  },
  {
    name: "Pepperoni",
    ingredients: "peppers, onions, sausage",
    photoName: pizza2,
    price: 13,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "peppers, onions, sausage",
    photoName: pizza3,
    price: 12,
  },
  {
    name: "Pizza Margherita",
    ingredients: "peppers, onions, sausage",
    photoName: pizza4,
    price: 10,
  },
  {
    name: "Pizza Funghi",
    ingredients: "peppers, onions, sausage",
    photoName: pizza5,
    price: 12,
  },

  {
    name: "Pizza Funghi",
    ingredients: "peppers, onions, sausage",
    photoName: pizza1,
    price: 12,
  },
];

const printPizza = pizzaData.map((pizza, index) => (
  <div key={index} className="flex gap-2">
    <img src={pizza.photoName} alt="pizzaImage" className="w-20 h-20 " />
    <div className="grid gap-1">
      <h1 className="text-sm font-bold"> {pizza.name} </h1>
      <p className="text-sm">
        <em>{pizza.ingredients}</em>
      </p>
      <p className="text-sm">${pizza.price}</p>
    </div>
  </div>
));

const time = new Date().getHours();
const openHour = 8;
const closeHour = 17;
const isOpen = time >= openHour && time <= closeHour;

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <Menu />
      <Footer />
    </React.Fragment>
  );
}

function Header() {
  return (
    <Fragment>
      <div className="flex items-center flex-col gap-4 pt-[2rem]">
        <h1 className="text-center text-[#f0b03a] text-2xl font-[inter]">
          _FAST REACT PIZZA_
        </h1>
        <p className="text-center border-y-2 inline-block border-[black] font-[inter] font-bold">
          OUR MENU
        </p>
      </div>
    </Fragment>
  );
}

function Menu() {
  return (
    <Fragment>
      <div className="grid grid-cols-2 w-full place-items-center gap-6 font-[inter] pt-[2rem]">
        {printPizza}
      </div>
    </Fragment>
  );
}

function Footer() {
  return (
    <Fragment>
      {isOpen ? (
        <div className="grid place-items-center text-center gap-2 text-sm pt-[2rem]">
        <p className="font-[inter] text-center ">
          We are open. Feel free to order a pizza
        </p>
        <button className=" font-[inter] bg-[#f0b03a] w-20 h-7">Order</button>
        </div>
      ) : (
        <p className="font-[inter] text-center text-sm pt-[3rem]">
          We are currently closed. Please reach out with the hours of {openHour}am - {closeHour}pm
        </p>
      )}
    </Fragment>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
