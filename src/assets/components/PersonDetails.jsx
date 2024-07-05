import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PersonDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPersonDetails = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPerson(data.result.properties);
      } catch (err) {
        console.error("Error fetching person details:", err);
      }
    };

    fetchPersonDetails();
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
                  alt="Character"
                />
              </div>
              <div className="col-6">
                <div className="card-body text-center">
                  {person && (
                    <>
                      <h5 className="card-title">{person.name}</h5>
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
                    Hair Color
                  </th>
                  <th className="border-bottom-0 text-danger" scope="col">
                    Eye Color
                  </th>
                  <th className="border-bottom-0 text-danger" scope="col">
                    Gender
                  </th>
                  <th className="border-bottom-0 text-danger" scope="col">
                    Birth Year
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom-0">
                  <td className="border-bottom-0 text-center text-danger">
                    {person?.hair_color}
                  </td>
                  <td className="border-bottom-0 text-center text-danger">
                    {person?.eye_color}
                  </td>
                  <td className="border-bottom-0 text-center text-danger">
                    {person?.gender}
                  </td>
                  <td className="border-bottom-0 text-center text-danger">
                    {person?.birth_year}
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

export default PersonDetails;