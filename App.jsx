import { useEffect, useState } from "react";
import NavBar from "./src/Components/NavBar";
import { Outlet } from "react-router";

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
     <Outlet context={{products}}/>
    </>
)
}

export default App;