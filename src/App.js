import React, { Fragment,useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
 const [cartIsShown,setCartIsShown]= useState(false)

 const showCartHandeler=()=>{
  setCartIsShown(true)
 }
 const hideCartHandeler=()=>{
  setCartIsShown(false)
 }
  return (
    <Fragment>
      {cartIsShown&&<Cart onClose={hideCartHandeler}/>}
      <Header onShowCart={showCartHandeler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
