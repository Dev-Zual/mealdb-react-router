import { Link } from "react-router";

const Category = ({ category }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;
  return (
    <div className="card bg-base-100 image-full  shadow-sm">
      <figure>
        <img src={strCategoryThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strCategory}</h2>
        <p>{strCategoryDescription.split(" ").slice(0, 20).join(" ")} ...</p>
        <div className="card-actions justify-end">
          <Link to={`all/${strCategory}`}>
            <button className="btn btn-primary">See All Food</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
