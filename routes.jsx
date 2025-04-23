import App from "./App";
import Home from "./src/Pages/Home";
import LogIn from "./src/Pages/LogIn";
import ProductPage from "./src/Pages/ProductPage";
import WishlistPage from "./src/Pages/WishlistPage";
import Cart from "./src/Pages/Cart";
import ErrorPage from "./src/Pages/ErrorPage";
import Register from "./src/Pages/Register";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/products/:id",
                element:<ProductPage />
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<LogIn />
            },
            {
                path:"/cart",
                element: <Cart />
            },
            {
                path: "/wishlist",
                element:<WishlistPage />
            }
        ]
    }
]

export default routes;