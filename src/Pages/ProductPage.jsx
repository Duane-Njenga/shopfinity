import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";

function ProductPage(){
 const params = useParams();
 const id = params.id - 1;
 const {products, wishlist, toggleWishlist} = useOutletContext();
 const [product, setProduct] = useState(null)
 const isInWishlist = wishlist.some((item) => item.id === params.id);


 
 
 
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
        <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
          Add to Cart
        </button>

        <button
        onClick ={() => toggleWishlist(product)}
        className = {`rounded-md text-amber-50 px-3 py-1 ${isInWishlist ? "bg-red-600 hover:bg-red-700" : "bg-amber-500 hover:bg-amber-600"}`}
        >
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
    </>
 )
  
}

export default ProductPage;