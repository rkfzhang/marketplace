import { Route, Routes } from "react-router"
import { HomePage } from "./home"

export const MainRouter = () => {

    return (
        <div className="router-wrapper basis-1/2">
            <div className="p-8 w-full">  
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/simulation" element={<div>Simulation</div>} />
                        <Route path="/map" element={<div>Map</div>} />
                    </Routes>
            </div>
        </div>
        
  )
}