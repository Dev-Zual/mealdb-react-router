import { useNavigate } from "react-router";
import NavBar from "./NavBar";

const AllFood = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <NavBar />
      <div className="my-5">
        <button className="btn" onClick={handleBack}>
          Back
        </button>
      </div>
      <div>all</div>
    </div>
  );
};

export default AllFood;
