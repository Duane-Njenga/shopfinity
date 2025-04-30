import { NavLink, useNavigate } from "react-router";
import DarkModeToggle from "./DarkModeToggle";

function NavBar({dark, toggleDarkmode, isLoggedIn, setIsLoggedIn}){
    const navigate = useNavigate();
    const logOut = () => {
        navigate('/login');
        setIsLoggedIn(false)
    }
return(
    <div className={`h-auto text-xl  ${dark ? "bg-amber-700":"bg-amber-300"}`}>
        <NavLink to = "/"className="hover:text-amber-400 m-4 hover:bg-blue-950 rounded-md">Home</NavLink>
     {isLoggedIn 
     ?
        (<>
        <NavLink to = "/cart" className="hover:text-amber-400 m-4 hover:bg-blue-950 rounded-md">View Cart</NavLink>
        <NavLink to = "/wishlist" className="hover:text-amber-400 m-4 hover:bg-blue-950 rounded-md">Wishlist</NavLink>
     </>)
    :null}
        
     <DarkModeToggle dark = {dark} toggleDarkmode={toggleDarkmode}/>
     
    <span className="cursor-pointer bg-gray-100 py-2 rounded-xl float-right w-20 mr-2 text-center">
        {isLoggedIn 
        ? 
        <button 
        onClick={logOut}
        >Log Out</button>
    :
    <NavLink to = "/login">Log In</NavLink>
    }  
    </span>   
    </div>
)
}

export default NavBar;