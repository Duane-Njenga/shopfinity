import { useOutletContext } from "react-router";
import ProductCard from "../Components/ProductCard";
function WishlistPage(){
    const { wishlist } = useOutletContext();

    return(
        <>
            {wishlist.map((item) => (
                <ProductCard key ={item.id} product={item}/>
            ))}
        </>
    )
    
}

export default WishlistPage;