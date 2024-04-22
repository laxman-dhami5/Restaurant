import React, {useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Storage/CartProvider";

function App() {
 const [cartIsShown,setCartIsShown]= useState(false)

 const showCartHandeler=()=>{
  setCartIsShown(true)
 }
 const hideCartHandeler=()=>{
  setCartIsShown(false)
 }
  return (
    <CartProvider>
      {cartIsShown&&<Cart onClose={hideCartHandeler}/>}
      <Header onShowCart={showCartHandeler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
