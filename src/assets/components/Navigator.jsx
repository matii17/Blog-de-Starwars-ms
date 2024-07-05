// Navigator.jsx
import { useNavigate } from "react-router-dom";

const Navigator = ({ id }) => {
  const navigate = useNavigate();

  const navigateToCharacter = () => {
    navigate(`/character-detail/${id}`);
  };

  return (
    <button onClick={navigateToCharacter} className="btn btn-outline-primary">
      Learn more!
    </button>
  );
};

export default Navigator;