import { useOutletContext } from "react-router";

function LoginForm(){
    const {dark} = useOutletContext( )
    return (
        <div className="h-50 bg-gray-500 border-2">
            <form className="grid gap-4">
                <input type="text" className="text-black" placeholder="Enter Username Or Email" required/>
                <input type="password" className="text-black" placeholder="Enter Password" required/>
            </form>
        </div>
    );
}

export default LoginForm;