import { useOutletContext } from "react-router";
import ProductCard from "../Components/ProductCard";
function Cart(){
    const { cartItems, dark } = useOutletContext();
    
return(
    <>
        <header
        className={`text-2xl underline font-bold ${dark ? "text-darkText": "text-black"}`}
        >Your Cart</header>
        {cartItems.map((item) => (
          <ProductCard key ={item.id} product={item}/>  
        ))}

    </>
)
}

export default Cart;