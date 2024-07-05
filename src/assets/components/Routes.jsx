import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import PersonDetailsView from "../views/PersonDetailsView";
import PlanetDetailsView from "../views/PlanetDetailsView";
import VehicleDetailsView from "../views/VehicleDetailsView";
import Home from "../views/Home";


function SiteRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/character-detail/:id" element={<PersonDetailsView/>} />
        <Route path="/planet-detail/:id" element={<PlanetDetailsView/>} />
        <Route path="/vehicle-detail/:id" element={<VehicleDetailsView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRoutes;