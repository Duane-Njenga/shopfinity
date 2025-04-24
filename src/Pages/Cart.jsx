import { useNavigate, useOutletContext } from "react-router";
import ProductCard from "../Components/ProductCard";
function Cart(){
    const { cartItems, dark, setCartItems } = useOutletContext();
    const totalPrice = cartItems.reduce((sum, item) => {
        return sum + Math.floor(item.price * 130) * (item.quantity || 1);
    }, 0);
    const navigate = useNavigate();
return(
    <div className="relative">
    <header
        className={`text-2xl underline font-bold ${dark ? "text-darkText": "text-black"} mb-4`}
    >
        Your Cart
    </header>
    
    <div className="flex flex-wrap gap-4 pr-64">
        {cartItems.map((item) => (
            <ProductCard key={item.id} product={item} />  
        ))}
    </div>
    
    <div className={`fixed top-24 right-8 w-64 p-4 rounded-lg shadow-md max-h-screen overflow-y-auto${dark ? " bg-darkCard":"bg-gray-100"}`}>
                <h2 className={`text-xl font-semibold mb-2 ${dark ? "text-darkText":"text-black"}`}>Cart Summary</h2>
                
                <div className={`mb-4 max-h-96 overflow-y-auto ${dark ? "text-darkText":"text-black"}`}>
                    {cartItems.map((item, index) => (
                        <div key={item.id} className="mb-2 pb-2 border-b border-gray-200">
                            <div className="text-sm font-medium truncate" title={item.title}>
                                {item.title}
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Qty: {item.quantity || 1}</span>
                                <span>Ksh.{Math.floor(item.price * 130).toLocaleString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                
                <div className={`flex justify-between border-t border-gray-300 pt-2 font-bold ${dark ? "text-darkText":"text-black"}`}>
                    <span>Total:</span>
                    <span>Ksh.{totalPrice.toLocaleString()}</span>
                </div>
                
                <button 
                onClick = {() => {console.log("Done");
                    navigate("/");
                    setCartItems([])
                }
                }
                className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                    Checkout
                </button>
            </div>
        </div>
)
}

export default Cart;