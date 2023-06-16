import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Hooks and Component Practice</h1>
      <ul>
        <li className="btn btn-primary mt-5">
          <Link
            to="/FunctionalTodo"
            style={{ color: "white", textDecoration: "none" }}
          >
            TODO List using Functional Componet
          </Link>
        </li>
        <br />
        <li className="btn btn-primary mt-5">
          <Link
            to="/ClassTodo"
            style={{ color: "white", textDecoration: "none" }}
          >
            TODO List using Class Componet
          </Link>
        </li>
        <br />
        <li className="btn btn-primary mt-5">
          <Link
            to="/useCallbackExample"
            style={{ color: "white", textDecoration: "none" }}
          >
            useCallback Example
          </Link>
        </li>
        <br />
        <li className="btn btn-primary mt-5">
          <Link
            to="/fetchExample"
            style={{ color: "white", textDecoration: "none" }}
          >
            Fetch Api Using useEffect Example
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Home;

/**
 
function App:<T> (id:<T> , name:<T>)

App : string (id:number,name:string)


 */
