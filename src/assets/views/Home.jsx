import Navbar from "../components/Navbar";
import PeopleList from "../components/PeopleList";
import PlanetList from "../components/PlanetList";
import VehicleList from "../components/VehicleList";

const Home = () => {
  return(
    <div>
      <Navbar/>
      <div className="row justify-content-center">
        <div className="col-9">
          <h1 className="category">Characters</h1>
          <PeopleList/>
          <h1 className="category">Planets</h1>
          <PlanetList/>
          <h1 className="category">Vehicles</h1>
          <VehicleList/>
        </div>
      </div>
    </div>
  )
}

export default Home;