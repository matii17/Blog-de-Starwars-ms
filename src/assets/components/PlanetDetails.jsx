import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PlanetDetails = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlanet(data.result);
      } catch (err) {
        console.error("Error fetching planet details:", err);
      }
    };

    fetchPlanetDetails();
  }, [id]);

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div>
          <div className="card border-0 col-9 w-75 mx-auto mt-5 mb-5">
            <div className="row g-0 ">
              <div className="col-6">
                <img
                  src="https://placehold.co/800x600"
                  className="img-fluid h-100"
                  alt="Planet"
                />
              </div>
              <div className="col-6">
                <div className="card-body text-center">
                  {planet && (
                    <>
                      <h5 className="card-title">{planet.properties.name}</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                        voluptatum, maiores ab quae eum vero cum perspiciatis aliquid!
                        Blanditiis voluptatibus corrupti aut magnam enim quis tempore
                        voluptatum dolorum sapiente deleniti?
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr className="border-top border-danger text-center">
                  <th className="border-bottom-0 text-danger" scope="col">
                    Climate
                  </th>
                  <th className="border-bottom-0 text-danger" scope="col">
                    Terrain
                  </th>
                  <th className="border-bottom-0 text-danger" scope="col">
                    Diameter
                  </th>
                  <th className="border-bottom-0 text-danger" scope="col">
                    Population
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom-0">
                  <td className="border-bottom-0 text-center text-danger">
                    {planet?.properties.climate}
                  </td>
                  <td className="border-bottom-0 text-center text-danger">
                    {planet?.properties.terrain}
                  </td>
                  <td className="border-bottom-0 text-center text-danger">
                    {planet?.properties.diameter}
                  </td>
                  <td className="border-bottom-0 text-center text-danger">
                    {planet?.properties.population}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;