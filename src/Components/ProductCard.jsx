import { Link, useOutletContext } from "react-router";

function ProductCard({ product }) {
  const { id, category, image, price, title } = product;
  const {wishlist, toggleWishlist} = useOutletContext();
  const isInWishlist = wishlist.some((item) => item.id === id)
    

  
  
  


  
  return (
    <div className="w-64 border-2 rounded-xl shadow-md  overflow-hidden m-4 cursor-pointer flex flex-col hover:shadow-indigo-950 hover:shadow-xl hover:scale-102">
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-md font-semibold text-gray-800 mb-1">
          <Link to={`/products/${id}`} className="hover:underline">
            {title}
          </Link>
        </h2>
        <p className="text-sm text-gray-500 mb-1">Category: {category}</p>
        <p className="text-sm font-bold text-gray-700 mb-3">Price: Ksh.{Math.floor(price * 130).toLocaleString()}</p>

        
        <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition">
          Add to Cart
        </button>

        
        

        <button
        onClick ={() => {toggleWishlist(product);}}
        className = {`rounded-md text-amber-50 px-3 py-1 ${isInWishlist ? "bg-red-600 hover:bg-red-700" : "bg-amber-500 hover:bg-amber-600"}`}
        >
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
