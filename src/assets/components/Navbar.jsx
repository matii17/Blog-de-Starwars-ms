import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoriteContext from "../context/Context";


const Navbar = () => {

  const {favorite, favoriteAction} = useContext(FavoriteContext)


  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid col-9">
          <Link to="/" className="navbar-brand">
            Star Wars
          </Link>
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites ({favorite.length})
            </button>
            <ul className="dropdown-menu">
              {favorite.length === 0 ? 
              <li className="ps-3">List is empty</li>
              :
              favorite.map((favorites) => (
              <li key={favorites.id}>
                <a className="dropdown-item" href="#">{favorites.name}<i className="fa-solid fa-trash-can ms-3" onClick={()=>favoriteAction({type: 'Delete', payload: {id: favorites.id}})}></i></a></li>
            ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;