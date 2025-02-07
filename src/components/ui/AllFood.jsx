import { useLoaderData, useNavigate, useParams } from "react-router";
import NavBar from "./NavBar";
import FoodCard from "../FoodCard";

const AllFood = () => {
  const { cat } = useParams();
  console.log(cat);
  const allFood = useLoaderData();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  console.log(allFood);
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="my-5">
        <button className="btn" onClick={handleBack}>
          Back
        </button>
      </div>
      <div className="grid grid-cols-3">
        {allFood.meals.map((food) => (
          <FoodCard key={food.idMeal} food={food} />
        ))}
      </div>
    </div>
  );
};

export default AllFood;
