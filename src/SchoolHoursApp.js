import { Outlet } from "react-router-dom"
import { Navbar } from "./components/ui/NavBar"

export const SchoolHoursApp = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <Outlet/>
    </div>
    </>
  )
}
