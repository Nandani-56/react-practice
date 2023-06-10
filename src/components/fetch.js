import axios from "axios";
import { useEffect, useState } from "react";

const FetchPractice = () => {
  const [categoryData, setCategoryData] = useState([]);
  // fetch api using fetch
  // fetch(`http://localhost:3001/category-list/getCategory/1?order=asc`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // fetch api using axios
  useEffect(() => {
    axios
      .get(`http://localhost:3001/category-list/getCategory/1?order=asc`)
      .then((res) => {
        console.log(res.data);
        const data = res.data.data;
        setCategoryData(data);
      });
  }, []);

  // show dynamic data
  console.log("sds", categoryData.data);
  return (
    <div>
      {categoryData.map((category) => {
        return <h3>{category.categoryName}</h3>;
      })}
    </div>
  );
};

export default FetchPractice;
