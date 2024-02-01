import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

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
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   textAlign: "center",
  //   textTransform: "uppercase",
  // };
  // return <h1 style={style}>First react pizza co.</h1>;
  return (
    <header className="header">
      <h1>First react pizza co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;

  return (
    <menu className="menu">
      <h2>Our menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            tempore accusantium temporibus sequi pariatur provident molestiae
            illum laudantium, alias, doloremque
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaOb={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are still working in our menu please come back later::</p>
      )}

      {/* <Pizza
        name="pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="funghiiiiiiiii"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/funghi.jpg"
        price={40}
      /> */}
    </menu>
  );
}

function Pizza({ pizzaOb }) {
  // if (pizzaOb.soldOut) return null;
  return (
    <li className={`pizza ${pizzaOb.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaOb.photoName} alt={pizzaOb.name}></img>
      <div>
        <h3>{pizzaOb.name}</h3>
        <p>{pizzaOb.ingredients}</p>
        <span>{pizzaOb.soldOut ? "sold out" : pizzaOb.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const open = 9;
  const close = 22;
  const isOpen = hours >= open && hours < close;
  console.log(isOpen);

  // if (hours >= opening && hours < close) alert("we are still giving services");
  // else alert("we are now closed");
  // if (!isOpen)return (<p>we currently closed cant order anything come later llllllllllllllll</p>);
  return (
    <footer className="footer">
      {" "}
      {isOpen ? (
        <Order close={close} open={open} />
      ) : (
        <p>we currently closed cant order anything come later</p>
      )}
    </footer>
  );
}

function Order({ close, open }) {
  return (
    <div className="order">
      <p>
        we are open from {open}:00 untill {close}:00 come visit us now or order
        online .
      </p>
      <button className="btn">order</button>
    </div>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
