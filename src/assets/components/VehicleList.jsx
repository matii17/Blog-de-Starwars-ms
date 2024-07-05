import { useEffect, useState } from "react";
import { getSWVehicles } from "./APIPetitions";
import CardVehicle from "./CardVehicle";
import "./CardList.css"; // Import CSS file for styling

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getSWVehicles()
      .then((data) => {
        // Fetch additional details for each planet
        const fetchVehicleDetails = data.results.map((vehicle) => {
          return fetch(vehicle.url)
            .then((response) => response.json())
            .then((details) => ({
              id: details.result.uid,
              name: details.result.properties.name,
              crew: details.result.properties.crew,
              passengers: details.result.properties.passengers,
              cargo_capacity: details.result.properties.cargo_capacity,
            }));
        });

        // Resolve all promises and set the updated planets state
        Promise.all(fetchVehicleDetails)
          .then((vehiclesWithDetails) => {
            setVehicles(vehiclesWithDetails);
          })
          .catch((error) => {
            console.error("Error fetching vehicle details:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching vehicles:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* Horizontal scrollable container */}
        <div className="card-container">
          {vehicles.map((vehicle, index) => (
            <div className="card-item" key={index}>
              <CardVehicle
                id = {vehicle.id}
                name={vehicle.name}
                crew={vehicle.crew}
                terrain={vehicle.passengers}
                cargoCapacity={vehicle.cargo_capacity}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleList;