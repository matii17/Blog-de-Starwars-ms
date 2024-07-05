import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVehicle(data.result);
      } catch (err) {
        console.error("Error fetching vehicle details:", err);
      }
    };

    fetchVehicleDetails();
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
                  alt="vehicle"
                />
              </div>
              <div className="col-6">
                <div className="card-body text-center">
                  {vehicle && (
                    <>
                      <h5 className="card-title">{vehicle.properties.name}</h5>
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
                    Model
                  </th>
                  <th className="border-bottom-0 text-danger" scope="col">
                    Crew
                  </th>
                  <th className="border-bottom-0 text-danger" scope="col">
                    Passengers
                  </th>
                  <th className="border-bottom-0 text-danger" scope="col">
                    Cargo Capacity
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom-0">
                  <td className="border-bottom-0 text-center text-danger">
                    {vehicle?.properties.model}
                  </td>
                  <td className="border-bottom-0 text-center text-danger">
                    {vehicle?.properties.crew}
                  </td>
                  <td className="border-bottom-0 text-center text-danger">
                    {vehicle?.properties.passengers}
                  </td>
                  <td className="border-bottom-0 text-center text-danger">
                    {vehicle?.properties.cargo_capacity}
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

export default VehicleDetails;