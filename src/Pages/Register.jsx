import { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router';
import { auth, db } from '../Components/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc} from "firebase/firestore";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const navigate = useNavigate();
  const {dark, setIsLoggedIn} = useOutletContext();

 const handleRegister = async (e) => {
    e.preventDefault();
   
    try{
    await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
        console.log(user.email, fName, lName);
        
        
        if(user){
            await setDoc(doc(db, "users", user.uid), {
                email:user.email,
                firstName:fName,
                lastName:lName
            })
        }
        navigate("/");
        setIsLoggedIn(true);

    }catch(error){
        console.log(error.message)
    }
    
 }

  return (
    <div className= {`max-w-md mx-auto p-6 rounded-lg shadow-lg border border-gray-200 hover:scale-102 ${dark ? " border-gray-400 hover:shadow-2xl hover:shadow-gray-400":"border-black hover:shadow-2xl hover:shadow-gray-800"}`}>
      <h2 className= {`text-2xl font-bold mb-6 text-center ${dark ? "text-darkText" : "text-gray-800"}`}>
        Register
        </h2>
      <form className="space-y-6" onSubmit={handleRegister} >
      <div className="space-y-2">
          <label className={`block text-sm font-medium  ${dark ? "text-darkText" : "text-gray-700"}`}>
            First Name</label>
          <input 
            type="text"
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${dark ? "text-white" : "text-black"} `}
            placeholder="Enter First Name" 
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label className={`block text-sm font-medium  ${dark ? "text-darkText" : "text-gray-700"}`}>
            Last Name</label>
          <input 
            type="text" 
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${dark ? "text-white" : "text-black"} `}
            placeholder="Enter Last Name" 
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label className={`block text-sm font-medium  ${dark ? "text-darkText" : "text-gray-700"}`}>Email Address</label>
          <input 
            type="email" 
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${dark ? "text-white" : "text-black"} `}
            placeholder="Enter Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label className={`block text-sm font-medium  ${dark ? "text-darkText" : "text-gray-700"}`}>Password</label>
          <input 
            type="password" 
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${dark ? "text-white" : "text-black"} `}
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
          Sign Up
        </button>
        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
            Sign In
          </Link>
        </div>
      </form>
    </div>
    );
}

export default Register;