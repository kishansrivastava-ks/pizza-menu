// the webpack which is the module bundler here expects the entry point to be index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // importing the css file

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  //the component should start with an upper case
  return (
    <div className="container">
      <Header />
      {/* <h1>Hello React !!</h1> */}
      <Menu />
      {/* including another component */}
      <Footer />
    </div>
  );
  // content to be written inside the div (id = root)
  // 🔴 component can return only one element
}

// writing component as a function
// fn should return a markup (jsx)

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Comapny</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* 🔴 RENDERING LIST */}

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine and creative dishes to choose from. All
            from our store oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
            {/* key is the unique property associated with a single object */}
          </ul>
        </>
      ) : (
        <p>Still working on menu</p>
      )}

      {/* the map method would create a new array of the 6 pizza component and then react knows how to render it */}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg "
      /> */}
      {/* 🔴 whenever we have to pass something that is not a string we have to enter the javascript mode */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // 🔴 we have destructured the props naming it exactly as it was passed to the component

  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {/* conditional rendering */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're Open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//rendering the root in the DOM in React v18
const root = ReactDOM.createRoot(document.getElementById("root")); // root is the div element created automatically
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// the strict mode would render the components twice during development in order to check some bugs (PREFERRED)
