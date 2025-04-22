import { useState } from "react";
import { Link, useOutletContext } from "react-router";

function ProductCard({ product }) {
  const { id, category, image, price, title } = product;
  const {wishlist, toggleWishlist, dark, toggleCart, cartItems, updateCartQuantity} = useOutletContext();
  const isInWishlist = wishlist.some((item) => item.id === id)
  const isInCart = cartItems.some((item) => item.id === id)
    
  const cartItem = cartItems.find(item => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 1;
  
  const handleIncrement = () => {
    updateCartQuantity(product, quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      updateCartQuantity(product, quantity - 1);
    }
  }

  
  return (
    <div className={`w-64 rounded-xl shadow-md  overflow-hidden m-4 cursor-pointer flex flex-col hover:shadow-indigo-950 hover:shadow-xl hover:scale-102 border-2 ${dark ? " border-gray-400":"border-black"}`}>
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-md font-semibold text-gray-800 mb-1">
          <Link to={`/products/${id}`} className={`hover:underline ${dark ? "text-darkText" : "text-black"}`}>
            {title}
          </Link>
        </h2>
        <p className="text-sm text-gray-500 mb-1">Category: {category}</p>
        <p className={`text-sm font-bold mb-3 ${dark ? "text-darkText" : "text-black"}`}>Price: Ksh.{Math.floor(price * 130).toLocaleString()}</p>
        
        {isInCart && (
    <div className="flex items-center mb-2">
      <button 
        onClick={handleDecrement}
        className="bg-gray-300 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-400 transition"
      >
        -
      </button>
      <span className="bg-gray-100 px-4 py-1">
        {quantity}
      </span>
      <button 
        onClick={handleIncrement}
        className="bg-gray-300 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-400 transition"
      >
        +
      </button>
    </div>
  )}
        <button 
          onClick={() => {toggleCart(product);
          }}
          className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition">
            {isInCart ? "Remove from cart":"Add to Cart"}
          </button>
          
      
          {!isInCart && (
          <button
          onClick ={() => {toggleWishlist(product);}}
          className = {`rounded-md text-amber-50 px-3 py-1 ${isInWishlist ? "bg-red-600 hover:bg-red-700" : "bg-amber-500 hover:bg-amber-600"}`}
          >
            {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>)
          }
        

        
        {}

        
      </div>
    </div>
  );
  
}

export default ProductCard;
