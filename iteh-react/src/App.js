import "./App.css";
import NavBar from "./Components/NavBar";
import Items from "./Components/Items";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Kapricoza",
      ingredients: "Kapricoza sastojci",
      price: 1000,
      amount: 0,
    },
    {
      id: 2,
      title: "Karbonara",
      ingredients: "Karbonara sastojci",
      price: 1250,
      amount: 0,
    },
    {
      id: 3,
      title: "Fungi",
      ingredients: "Fungi sastojci",
      price: 950,
      amount: 0,
    },
  ]);

  const order = (id) => {
    items.map((item) => {
      if (item.id === id) {
        item.amount = item.amount + 1;
        const a = cartNum + 1;
        setCartNum(a);
        console.log("product id=", item.id, "amount=", item.amount, cartNum);
      }
    });
  };

  return (
    <div className="App">
      <NavBar cartNum={cartNum} />
      <Header />
      <Items items={items} onOrder={order} />
    </div>
  );
}

export default App;
