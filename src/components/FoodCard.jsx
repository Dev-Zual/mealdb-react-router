const FoodCard = ({ food }) => {
  const { strMealThumb, strMeal } = food;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>

        <div className="card-actions justify-end">
          <button className="btn w-full btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
