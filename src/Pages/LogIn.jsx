import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { auth } from '../Components/Firebase';
import { useOutletContext } from 'react-router';

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    const { dark, setIsLoggedIn} = useOutletContext();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
        setIsLoggedIn(true);
    }catch(error){
        console.error(error.message)
    }
  }

  return (
    <div 
    onSubmit={handleLogin}
    className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:scale-102">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
            placeholder="Enter Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full cursor-pointer py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300"
        >
          Sign In
        </button>
        <div className="text-center text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:text-blue-800 font-medium">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
export default LogIn;