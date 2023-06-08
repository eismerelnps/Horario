import { Outlet } from "react-router-dom";
//import { Navbar } from "./components/ui/NavBar"
import { OffcanvasNavBar } from "./components/ui/OffcanvasNavBar";
import { hourContext } from "./components/hourContext";
import { useEffect, useState } from "react";

export const SchoolHoursApp = () => {
  console.log("SchoolHoursApp");

  const [settings, setSettings] = useState({
    faculty: 0,
    degree: 0,
    group: 0,
  });

  useEffect(() => {
    const init = () => {
      console.log("init");
      return JSON.parse(localStorage.getItem("settings"));
    };

    const savedSettings = init();
    console.log(savedSettings);

!savedSettings && localStorage.setItem("settings", JSON.stringify(settings));

  }, [settings]);

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
