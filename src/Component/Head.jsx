import { useEffect, useState } from "react";

import { LuSunMoon ,LuMoon } from "react-icons/lu";
import { Link } from "react-router-dom";


const Head = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = '#000'; // Dark background

    
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = '#fff'; // Light background

    }
  }, [theme]);

  const handleThemeCheck = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between mx-20  my-5">
        <div>
            <h1 className="text-4xl text-bold">Ospro</h1>

        </div>
      
      <div className="flex justify-between gap-5">
          <button className=" " onClick={handleThemeCheck}>
            {theme === "dark" ? (
            //   <FontAwesomeIcon icon={faSun}  className="text-2xl "/>
              <LuSunMoon className="text-2xl  text-white"/>
            ) : (
          <LuMoon className="text-2xl text-wite"/>
            )}
          </button>
          <Link to={'loginPage'} className="bg-blue-900 px-8 font-bold text-white flex items-center rounded-lg px-3">
            Login
          </Link>
      </div>
      
    </div>
  );
};

export default Head;
