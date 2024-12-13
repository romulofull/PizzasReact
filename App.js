import React from "react";
import "./index.css";

const pizzaData = [
    {
      name: "Pizza de Frutas",
      ingredients: "Frutas, Miel, Frutos Secos",
      price: 10,
      photoName: "./assets/pizzas/frutas.jpeg",
      soldOut: false,
    },
    {
      name: "Pizza de Nutella",
      ingredients: "Nutella, Frutas, Frutos Secos",
      price: 10,
      photoName: "./assets/pizzas/nutella.jpg",
      soldOut: false,
    },

    {
      name: "Pizza de Queso",
      ingredients: "Tomato, Mozarella, Albahaca fresca y Aceite de Oliva",
      price: 10,
      photoName: "./assets/pizzas/queso.jpeg",
      soldOut: false,
    },
    {
      name: "Pizza Pomodoro",
      ingredients: "Tomate y Mozarella",
      price: 12,
      photoName: "./assets/pizzas/pomodoro.jpg",
      soldOut: true,
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

  return (
    <header className="header">
      <h1>Pizza Tomatina</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Menu Diario</h2>

      {numPizzas > 0 ? (
        <>
          <p className="menupizza">
          Cocina italiana auténtica. Tenemos Pizzas únicas para elegir. Todos hechos en nuestro horno de barro, con ingredientes orgánicos y, por supuesto, deliciosos!
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Estamos haciendo el Menu. Regrese mas tarde </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={ "pizza" +  (pizzaObj.soldOut ? " sold-out" : "")}>
      <img src={pizzaObj.photoName}  />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "AGOTADO" : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  );
}


function Footer() {
  const hour = new Date().getHours(); 
  const openingHour = 18;  
  const closeHour = 24; 

  const isOpen = hour >= openingHour && hour <= closeHour;  

  
  let hoursUntilOpen = 0;
  if (!isOpen) {
    if (hour < openingHour) {
      hoursUntilOpen = openingHour - hour; 
    } else {
      hoursUntilOpen = 24 - hour + openingHour; 
    }
  }

  return (
    <footer className="footer">
      {isOpen ? (
        <p>Puede venir ahorita, estamos Atendiendo.</p>  
      ) : (
        <p>
          Estamos Feliz de Atenderte en {hoursUntilOpen} horas.
        </p>
      )}
    </footer>
  );
}


export default App;
