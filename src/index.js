import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizza1 from "../src/assets/images/pizza-1.jpg";
import pizza2 from "../src/assets/images/pizza-2.jpg";
import pizza3 from "../src/assets/images/pizza-3.jpg";
import pizza4 from "../src/assets/images/pizza-4.jpg";
import pizza5 from "../src/assets/images/pizza-5.jpg";

//Pizza Data
const pizzaData = [
  {
    name: "Foccaci",
    ingredients: "peppers, onions, sausage",
    photoName: pizza1,
    price: 15,
    soldOut: false,
  },
  {
    name: "Pepperoni",
    ingredients: "peppers, onions, sausage",
    photoName: pizza2,
    price: 13,
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "peppers, onions, sausage",
    photoName: pizza3,
    price: 12,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "peppers, onions, sausage",
    photoName: pizza4,
    price: 10,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "peppers, onions, sausage",
    photoName: pizza5,
    price: 12,
    soldOut: true,
  },

  {
    name: "Pizza Funghi",
    ingredients: "peppers, onions, sausage",
    photoName: pizza1,
    price: 12,
    soldOut: false,
  },
];

//Logic to print pizza in a card with the image, ingredients and it's cost
const printPizza = pizzaData.map((pizza, index) => (
  <div key={index} className={`flex gap-2 ${pizza.soldOut && "opacity-50" }`}>
    <img src={pizza.photoName} alt="pizzaImage" className="w-20 h-20 " />
    <div className="grid gap-1">
      <h1 className="text-sm font-bold"> {pizza.name} </h1>
      <p className="text-sm">
        <em>{pizza.ingredients}</em>
      </p>
      <p className="text-sm">${pizza.price}</p>
      <span className="text-sm text-[red] font-bold">{pizza.soldOut && "Sold Out"}</span>
    </div>
  </div>
));

//Get work hours
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

//Header component
function Header() {
  return (
    <React.Fragment>
      <div className="flex items-center flex-col gap-4 pt-[2rem]">
        <h1 className="text-center text-[#f0b03a] text-2xl font-[inter]">
          _FAST REACT PIZZA_
        </h1>
        <p className="text-center border-y-2 inline-block border-[black] font-[inter] font-bold">
          OUR MENU
        </p>
      </div>
    </React.Fragment>
  );
}

// Menu component with a condition to render different contents based on their result either true or false
function Menu() {
  const pizza = pizzaData;
  const numPizza = pizza.length;
  const pizzaAvailable = numPizza > 0;

  return (
    <React.Fragment>
      <p className="font-[inter] text-center text-sm pt-[2rem]">
        {" "}
        Authentic Italian cusine. 5 creative dishes to choose from. All from our
        stone oven, all organic, all delicious
      </p>
      {pizzaAvailable ? (
        <div className="grid grid-cols-2 w-full place-items-center gap-6 font-[inter] pt-[2rem]">
          {printPizza}
        </div>
      ) : (
        <div className="font-[inter] text-center text-sm pt-[3rem]">
          There are no available Pizza's
        </div>
      )}
    </React.Fragment>
  );
}

//Component for close of work with props values for the working hours to render message
function CloseOrder({ openHourValue, closeHourValue }) {
  return (
    <p className="font-[inter] text-center text-sm pt-[3rem]">
      We are currently closed. Please reach out with the hours of{" "}
      {openHourValue}am - {closeHourValue}pm
    </p>
  );
}

//Component for working hours to render message
function OpenOrder() {
  return (
    <div className="grid place-items-center text-center gap-2 text-sm pt-[2rem]">
      <p className="font-[inter] text-center ">
        We are open. Feel free to order a pizza
      </p>
      <button className=" font-[inter] bg-[#f0b03a] w-20 h-7">Order</button>
    </div>
  );
}

// Footer component that renders a component based on conditions for workin hours if true or false
function Footer() {
  return (
    <React.Fragment>
      {isOpen ? (
        <OpenOrder />
      ) : (
        <CloseOrder openHourValue={openHour} closeHourValue={closeHour} />
      )}
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
