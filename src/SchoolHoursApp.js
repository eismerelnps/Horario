import { Outlet } from "react-router-dom"
import { Navbar } from "./components/ui/NavBar"
import { OffcanvasNavBar } from "./components/ui/OffcanvasNavBar"

export const SchoolHoursApp = () => {
  return (
    <>
    <OffcanvasNavBar />
    <div className="container">
      <Outlet/>
    </div>
    </>
  )
}
