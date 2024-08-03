import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navber from "./Components/Navber/Navber"

function App() {

  return (
    <>
      <div className="max-w-4xl mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
