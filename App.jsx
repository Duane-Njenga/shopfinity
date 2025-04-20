import { useEffect, useState } from "react";
import NavBar from "./src/Components/NavBar";
import { Outlet } from "react-router";

function App(){

const [products, setProducts]= useState([])
const [wishlist, setWishlist] = useState([])

useEffect(() => {
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => setProducts(data))
},[])

const toggleWishlist = (product) => {

    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      return exists
        ? prevWishlist.filter((item) => item.id !== product.id)
        : 
        [...prevWishlist, product];
    });
    
    

};
return(
    <>
     <NavBar/>
     <Outlet context={{products, wishlist, toggleWishlist}}/>
    </>
)
}

export default App;