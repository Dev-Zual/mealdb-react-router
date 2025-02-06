import { useLoaderData } from "react-router";
import Category from "../Category";

const Categories = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div className="grid grid-cols-3 gap-5">
      {categories.categories.map((category) => (
        <Category key={category.idCategory} category={category} />
      ))}
    </div>
  );
};

export default Categories;
