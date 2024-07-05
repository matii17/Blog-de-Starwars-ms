import { useEffect, useState } from "react";
import { getSWPeople } from "./APIPetitions";
import CardPerson from "./CardPerson";
import "./CardList.css";

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeopleDetails = async () => {
      try {
        const data = await getSWPeople();
        // Fetch details for each person in a single call
        const fetchDetailsPromises = data.results.map(async (person) => {
          const response = await fetch(person.url);
          const details = await response.json();
          return {
            id: person.uid,
            name: person.name,
            hairColor: details.result.properties.hair_color,
            eyeColor: details.result.properties.eye_color,
            gender: details.result.properties.gender,
          };
        });

        const peopleWithDetails = await Promise.all(fetchDetailsPromises);
        setPeople(peopleWithDetails);
      } catch (error) {
        console.error("Error fetching person details:", error);
      }
    };

    fetchPeopleDetails();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="card-container">
          {people.map((person) => (
            <div className="card-item" key={person.id}>
              <CardPerson
                id={person.id}
                name={person.name}
                hairColor={person.hairColor}
                eyeColor={person.eyeColor}
                gender={person.gender}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleList;