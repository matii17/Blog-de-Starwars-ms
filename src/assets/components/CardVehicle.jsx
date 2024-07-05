import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import FavoriteContext from "../context/Context";


const CardVehicle = ({ id, name, crew, passengers, cargoCapacity }) => {

  const {favoriteAction} = useContext(FavoriteContext)

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/vehicle-detail/${id}`);
  };


  return (
    <div>
      <div className="card">
        <img
          src="https://placehold.co/400x200"
          className="card-img-top"
          alt="Character"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Crew: {crew}</p>
          <p className="card-text">Passengers: {passengers}</p>
          <p className="card-text">Cargo Capacity: {cargoCapacity}</p>
          <div className="d-flex justify-content-between">
          <button onClick={handleNavigate} className="btn btn-outline-primary">
            Learn more!
          </button>
            <button className="btn btn-outline-warning" data-bs-toggle="button" onClick={()=>favoriteAction({type: 'Add', payload: {name, id}})}>
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVehicle;