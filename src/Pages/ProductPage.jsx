import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";

function ProductPage(){
 const params = useParams();
 const id = params.id - 1;
 const {products} = useOutletContext();
 const [product, setProduct] = useState(null)

 
 
 
 useEffect(()=> {
    setProduct(products[id])
      
    },[id,products])
    if(!product) return <div>Loading...</div>
    const {title, description, price, rating, image } = product;
    
 return(
    <>
        
        <header className="font-bold text-2xl underline underline-offset-1">{title}</header>
        <img src={image} alt={title} className="w-50"/>
        <p className="flex flex-wrap ">Description:{description}</p>
        <p>Price: Ksh.{Math.floor(price * 130).toLocaleString()}</p>
        <p>Rating: {rating.rate}⭐({rating.count})</p>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition">
          Add to Cart
        </button>
    </>
 )
  
}

export default ProductPage;