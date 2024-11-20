import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import useTheme from "../Contex/Theme";

function Header() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <div
      className={`flex flex-col items-center h-auto w-full justify-center pt-0 md:pt-10 p-6 ${
        themeMode === "dark" ? "bg-[#141D2F] text-white" : "bg-[#f6f8ff] text-gray-800"
      }`}
    >
      <div className="flex flex-row items-center w-96 md:w-[50%] p-5 justify-between">
        <h1 className="font-bold text-3xl">GitInsight</h1>
        <div className="flex flex-row items-center text-2xl">
          <p className="mr-3 text-[16px]">{themeMode === "dark" ? "Light" : "Dark"}</p>
          {themeMode === "light" ? (
            <MdDarkMode
              onClick={toggleTheme}
              className={`cursor-pointer text-gray-900`}
              title="Switch to Light Mode"
            />
          ) : (
            <MdOutlineWbSunny
              onClick={toggleTheme}
              className={`cursor-pointer text-white`}
              title="Switch to Dark Mode"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
