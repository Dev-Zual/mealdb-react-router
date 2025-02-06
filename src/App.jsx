import { Outlet } from "react-router";
import "./App.css";
import Categories from "./components/ui/Categories";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <NavBar />
        <Categories />
        <Outlet />
      </div>
    </>
  );
}

export default App;
