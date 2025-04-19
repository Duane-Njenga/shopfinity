import { useOutletContext } from "react-router";
import ProductList from "../Components/ProductList";

function Home(){
    const {products} = useOutletContext();
    
    return(
    <>
    <ProductList products={products}/>
    </>
    )

}

export default Home;