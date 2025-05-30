import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";

function ProductPage(){
 const params = useParams();
 const id = params.id - 1;
 const {products, wishlist, toggleWishlist, cartItems, toggleCart, dark, isLoggedIn} = useOutletContext();
 const [product, setProduct] = useState(null)
 const isInCart = cartItems.some((item) => item.id == params.id)
 const isInWishlist = wishlist.some((item) => item.id == params.id)

 
 useEffect(()=> {
    setProduct(products[id])
 }, [id, products])
 
 if(!product) return <div>Loading...</div>
 const {title, description, price, rating, image } = product;
    
 return(
    <>
        <header className= {`font-bold text-2xl underline underline-offset-1 ${dark ? "text-white" :"text-black"}`}
        >{title}</header>
        <img src={image} alt={title} className="w-50"/>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
            
            <div className={`md:w-2/3 p-3 border  rounded ${dark ? "bg-darkCard text-darkText": "text-black bg-gray-100"}`}>
                <p className={`flex flex-wrap mb-4 ${dark ? "text-darkText" : "text-black"}`}
                >Description: {description}</p>
                <p>Rating: {rating.rate}⭐({rating.count} Reviews)</p>
            </div>
            
            
            <div className= {`md:w-1/3 p-3 border rounded ${dark ? "bg-darkCard text-darkText": "text-black bg-gray-200"}`}>
                <p className="mb-4">Price: Ksh.{Math.floor(price * 130).toLocaleString()}</p>
                
                <button 
                  onClick={() => {toggleCart(product)}}
                  disabled = {!isLoggedIn}

                  className = {`bg-blue-600 text-white px-7 py-1.5 rounded-md text-sm hover:bg-blue-700 transition ${isLoggedIn ? "": " hidden"}`} >
                  {isInCart ? "Remove from cart":"Add to Cart"}
                </button>
                {isLoggedIn ? null: 
                <span
                className="bg-gray-500 text-2xl rounded-md"
                >Log In for More Features
                </span>
                }
                {!isInCart && (
                  <button
                    onClick={() => {toggleWishlist(product);
                      
                    }}
                    disabled = {!isLoggedIn}

                    className={`rounded-md text-amber-50 px-3 py-1 ${isInWishlist ? "bg-red-600 hover:bg-red-700" : "bg-amber-500 hover:bg-amber-600"}${isLoggedIn ? "": " hidden"}`}
                  >
                    {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                  </button>
                )}
            </div>
        </div>
    </>
 )
}

export default ProductPage;