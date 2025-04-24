import { useEffect, useState } from "react";
import NavBar from "./src/Components/NavBar";
import { Outlet } from "react-router";

function App(){

const [products, setProducts]= useState([]);
const [wishlist, setWishlist] = useState([]);
const [cartItems, setCartItems] = useState([]);
const [dark, setDark] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false)


useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProducts(data))
},[]);


const toggleWishlist = (product) => {

    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      return exists
        ? prevWishlist.filter((item) => item.id !== product.id)
        : 
        [...prevWishlist, product];
    });
    
    

};

const toggleCart =(product) => {
    setCartItems((prevCart) => {
        const exists = prevCart.some((item) => item.id === product.id)
        return exists ?
        prevCart.filter((item) => item.id !== product.id)
        :
        [...prevCart, {...product, quantity : 1}]
    })
    
}
function toggleDarkmode(){
    setDark(!dark)
    const body = document.getElementById("body")
    if(dark === true){
        body.classList.remove("bg-darkBg")

    }else{
        body.classList.add("bg-darkBg")


    }
        
}
const updateCartQuantity = (product, newQuantity) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };
return(
    <>
     <NavBar 
     dark={dark} 
     toggleDarkmode={toggleDarkmode}
     isLoggedIn={isLoggedIn}
     setIsLoggedIn={setIsLoggedIn}/>
     <Outlet context={{
        products, wishlist, toggleWishlist, 
        cartItems, toggleCart,
        toggleDarkmode, dark,
         updateCartQuantity,
         isLoggedIn, setIsLoggedIn
        }}/>
    </>
)
}

export default App;