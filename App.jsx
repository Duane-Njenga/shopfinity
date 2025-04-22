import { useEffect, useState } from "react";
import NavBar from "./src/Components/NavBar";
import { Outlet } from "react-router";

function App(){

const [products, setProducts]= useState([]);
const [wishlist, setWishlist] = useState([]);
const [cartItems, setCartItems] = useState([]);
const [dark, setDark] = useState(false);


useEffect(() => {
    fetch("http://localhost:3000/products")
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
    const root= document.getElementById("root")
    if(dark === true){
        root.classList.remove("bg-darkBg")
    }else{
        root.classList.add("bg-darkBg")
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
     <NavBar dark={dark} toggleDarkmode={toggleDarkmode}/>
     <Outlet context={{
        products, wishlist, toggleWishlist, 
        cartItems, toggleCart,
        toggleDarkmode, dark, updateCartQuantity
        }}/>
    </>
)
}

export default App;