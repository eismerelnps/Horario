import { Outlet } from "react-router-dom";
//import { Navbar } from "./components/ui/NavBar"
import { OffcanvasNavBar } from "./components/ui/OffcanvasNavBar";
import { hourContext } from "./components/hourContext";
import { useState } from "react";

export const SchoolHoursApp = () => {

  const [settings, setSettings] = useState({
    faculty: '',
    degree: '',
    group: '' 
  });


  // const init = () => {
  //   return JSON.parse(localStorage.getItem('settings'));
  // };
  
  // const savedSettings = init();
  // if (savedSettings) {
  //   setSettings({
  //     ...savedSettings
  //   })
  // }

  

  return (
    <hourContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      <OffcanvasNavBar />
      <div className="container-fluid-lg">
        <Outlet />
      </div>
    </hourContext.Provider>
  );
};
