
function DarkModeToggle({toggleDarkmode,dark}) {
  return (
    <button 
      onClick={toggleDarkmode} 
      className={`px-4 py-2 rounded-md cursor-pointer ${dark ?"bg-gray-500" :"bg-gray-200"}`}
    > 
      {dark ? 'On🌙' : 'Off☀️' }
    </button>
  );
}

export default DarkModeToggle;