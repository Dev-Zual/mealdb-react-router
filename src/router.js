import { createBrowserRouter } from "react-router";
import App from "./App";
import AllFood from "./components/ui/AllFood";

let router = createBrowserRouter([
  {
    path: "/",
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
    Component: App,
  },
  {
    path: "all/:cat",
    Component: AllFood,
  },
]);
export default router;
