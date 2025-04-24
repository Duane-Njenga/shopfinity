import { useOutletContext } from "react-router";
import ProductCard from "../Components/ProductCard";
function WishlistPage(){
    const { wishlist, dark } = useOutletContext();

    if(!wishlist || wishlist.length === 0){
        return(
            <h1 className={`text-2xl font-bold text-center mt-6 ${dark ? "text-darkText": "text-black"}`}>Nothing in your wishlist</h1>

        )
    }
    return(
        <>
            <h1
            className={`text-2xl underline text-center font-bold ${dark ? "text-darkText": "text-black"}`}
            >Your Wishlist</h1>
            <div className="flex flex-wrap gap-4">
            {wishlist.map((item) => (
                <ProductCard key ={item.id} product={item}/>
            ))}
            </div>
        </>
    )
    
}

export default WishlistPage;