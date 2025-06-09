import { BrowserRouter } from "react-router"
import { MainNav } from "./components/mainNav"
import { MainRouter } from "./pages"
import 'leaflet/dist/leaflet.css';


export const App = () => {

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <div className="grid grid-cols-[16rem_1fr] min-h-screen">
          <MainNav />
          <MainRouter />
        </div>
      </BrowserRouter>
    </div>
  )
}

