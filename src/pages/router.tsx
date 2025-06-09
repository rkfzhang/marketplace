import { Route, Routes } from "react-router"
import { HomePage } from "./home"
import { MapPage } from "./map"
import { SimulationPage } from "./simulation"

export const MainRouter = () => {

    return (
        <div className="router-wrapper basis-1/2">
            <div className="w-full">  
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/simulation" element={<SimulationPage />} />
                        <Route path="/map" element={<MapPage />} />
                    </Routes>
            </div>
        </div>
        
  )
}