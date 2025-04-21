import { useOutletContext } from "react-router";
import ProductCard from "../Components/ProductCard";
function Cart(){
    const { cartItems } = useOutletContext();
    
return(
    <>
        <header
        className="text-2xl underline font-bold"
        >Your Cart</header>
        {cartItems.map((item) => (
          <ProductCard key ={item.id} product={item}/>  
        ))}

    </>
)
}

export default Cart;