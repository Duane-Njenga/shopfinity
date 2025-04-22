import { useEffect, useState } from "react";
import NavBar from "./src/Components/NavBar";
import { Outlet } from "react-router";

function App(){

const [products, setProducts]= useState([]);
const [wishlist, setWishlist] = useState([]);
const [cartItems, setCartItems] = useState([]);
const [dark, setDark] = useState(false);


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

const toggleCart =(product, quantity) => {
    setCartItems((prevCart) => {
        const exists = prevCart.some((item) => item.id === product.id)
        return exists ?
        prevCart.filter((item) => item.id !== product.id)
        :
        [...prevCart, product]
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
return(
    <>
     <NavBar dark={dark} toggleDarkmode={toggleDarkmode}/>
     <Outlet context={{
        products, wishlist, toggleWishlist, 
        cartItems, toggleCart,
        toggleDarkmode, dark 
        }}/>
    </>
)
}

export default App;