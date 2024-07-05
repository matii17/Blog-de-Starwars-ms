import { useEffect, useState } from "react";
import { getSWPlanets } from "./APIPetitions";
import CardPlanet from "./CardPlanet";
import "./CardList.css";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getSWPlanets()
      .then((data) => {
        // Fetch additional details for each planet
        const fetchPlanetDetails = data.results.map((planet) => {
          return fetch(planet.url)
            .then((response) => response.json())
            .then((details) => ({
              id: details.result.uid,
              name: details.result.properties.name,
              population: details.result.properties.population,
              terrain: details.result.properties.terrain,
              diameter: details.result.properties.diameter,
            }));
        });

        
        Promise.all(fetchPlanetDetails)
          .then((planetsWithDetails) => {
            setPlanets(planetsWithDetails);
          })
          .catch((error) => {
            console.error("Error fetching planet details:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching planets:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* Horizontal scrollable container */}
        <div className="card-container">
          {planets.map((planet, index) => (
            <div className="card-item" key={index}>
              <CardPlanet
                id={planet.id}
                name={planet.name}
                population={planet.population}
                terrain={planet.terrain}
                diameter={planet.diameter}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanetList;