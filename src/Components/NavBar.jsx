import { NavLink } from "react-router";

function NavBar(){
return(
    <div className="bg-amber-300 h-auto text-xl">
     <NavLink to = "/"className="hover:text-amber-400 m-4 hover:bg-blue-950 rounded-md">Home</NavLink>
     <NavLink to = "/cart" className="hover:text-amber-400 m-4 hover:bg-blue-950 rounded-md">View Cart</NavLink>
     <NavLink to = "/wishlist" className="hover:text-amber-400 m-4 hover:bg-blue-950 rounded-md">Wishlist</NavLink>
    </div>
)
}

export default NavBar;