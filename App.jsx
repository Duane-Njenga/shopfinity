import { useEffect, useState } from "react";
import NavBar from "./src/Components/NavBar";
import ProductList from "./src/Components/ProductList";

function App(){

const [products, setProducts]= useState([])
useEffect(() => {
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => setProducts(data))
},[])
return(
    <>
     <NavBar/>
     <ProductList products={products}/>
    </>
)
}

export default App;