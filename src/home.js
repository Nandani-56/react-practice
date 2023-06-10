import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>TODO List</h1>
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
      </ul>

      <Outlet />
    </div>
  );
};

export default Home;
