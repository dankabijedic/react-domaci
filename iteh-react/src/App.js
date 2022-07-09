import "./App.css";
import NavBar from "./Components/NavBar";
import Items from "./Components/Items";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import About from "./Components/About";
import Contact from "./Components/Contact";
import kapricoza from "./img/kapricoza.jpg";
import margarita from "./img/margarita.jpg";
import fungi from "./img/fungi.jpg";
import specijal from "./img/specijal.jpg";
import vezuvio from "./img/vezuvio.jpg";
import posna from "./img/posna.jpg";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    calcPrice();
  }, [cartItems]);
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Kapricoza",
      ingredients: "Pelat, šunka, pečurke, sir, masline",
      price: 980,
      amount: 0,
      image: kapricoza,
    },
    {
      id: 2,
      title: "Margarita",
      ingredients: "Pelat, sir, masline",
      price: 695,
      amount: 0,
      image: margarita,
    },
    {
      id: 3,
      title: "Fungi",
      ingredients: "Pelat, sir, pečurke, masline",
      price: 950,
      amount: 0,
      image: fungi,
    },
    {
      id: 4,
      title: "Specijal",
      ingredients: "Pelat, sir, šunka, pečurke, kulen, njeguški pršut, masline",
      price: 1250,
      amount: 0,
      image: specijal,
    },
    {
      id: 5,
      title: "Vezuvio",
      ingredients: "Pelat, sir, šunka, masline",
      price: 845,
      amount: 0,
      image: vezuvio,
    },
    {
      id: 6,
      title: "Posna",
      ingredients: "Pelat, tunjevina, pečurke, paradajz, luk",
      price: 1090,
      amount: 0,
      image: posna,
    },
  ]);

  const order = (id) => {
    items.map((item) => {
      if (item.id === id) {
        item.amount = item.amount + 1;
        const a = cartNum + 1;
        setCartNum(a);
        if (item.amount === 1) {
          updateCart(item);
        } else {
          refreshCart();
        }
        console.log("product id=", item.id, "amount=", item.amount, cartNum);
      }
    });
  };

  const updateCart = (item) => {
    setCartItems([...cartItems, item]);
    calcPrice();
  };

  const refreshCart = () => {
    const newItems = items.filter((item) => item.amount > 0);
    setCartItems(newItems);
  };

  const calcPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price;
    }
    setTotalPrice(totalPrice);
  };

  return (
    <BrowserRouter>
      <NavBar cartNum={cartNum} />
      <Routes>
        <Route
          path="/"
          element={[
            <Header
              title="Dobrodosli u"
              subtitle="Piceriju Palermo"
              showbutton={true}
            />,
            <Items items={items} onOrder={order} />,
          ]}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              cartNum={cartNum}
              totalPrice={totalPrice}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/meni" element={<Items items={items} onOrder={order} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
