import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useTheme from "../Contex/Theme"; 

function SearchBar({ onSearch }) {
  const { themeMode } = useTheme(); 
  const [username, setUsername] = useState("KanishkRajTech"); 

  const handleSearch = () => {
    onSearch(username); 
  };

  return (
    <div
      className={`flex flex-col items-center h-auto w-full justify-center pt-1 py-6 ${
        themeMode === "dark" ? "bg-[#141d2f]" : "bg-[#f6f8ff]"
      }`}
    >
      <div
        className={`flex flex-row items-center w-96 p-2 md:w-[48.5%] justify-between py-2 rounded-lg ${
          themeMode === "dark" ? "bg-[#1e2a47] text-white" : "bg-[#fefefe] text-gray-800"
        }`}
      >
        <div className="flex w-full">
          <div className="text-2xl">
            <FaSearch />
          </div>
          <input
          type="text"
          placeholder="Enter a Github username..."
          value={username}  
          onChange={(e) => setUsername(e.target.value)} 
          className={`w-[60%] h-5  bg-transparent focus:outline-none ${
            themeMode === "dark" ? "text-white" : "text-gray-800"
          } font-mono ml-6`}
        />
        </div>
        
        <button
          onClick={handleSearch} 
          className={`${
            themeMode === "dark" ? "bg-blue-500" : "bg-blue-700"
          } text-white font-bold p-3 rounded-lg`}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
