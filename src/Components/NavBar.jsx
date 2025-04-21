import { NavLink } from "react-router";
import DarkModeToggle from "./DarkModeToggle";

function NavBar({dark, toggleDarkmode}){
    
    
return(
    <div className={`h-auto text-xl  ${dark ? "bg-amber-700":"bg-amber-300"}`}>
     <NavLink to = "/"className="hover:text-amber-400 m-4 hover:bg-blue-950 rounded-md">Home</NavLink>
     <NavLink to = "/cart" className="hover:text-amber-400 m-4 hover:bg-blue-950 rounded-md">View Cart</NavLink>
     <NavLink to = "/wishlist" className="hover:text-amber-400 m-4 hover:bg-blue-950 rounded-md">Wishlist</NavLink>
     <DarkModeToggle dark = {dark} toggleDarkmode={toggleDarkmode}/>
    </div>
)
}

export default NavBar;