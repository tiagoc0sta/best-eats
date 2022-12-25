import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
  console.log(categories);
  return (
    <div>
      <h1>Top Rated Menu Items</h1>

      {/*Categories*/}
      <div>
        {categories.map((item, index) => {
          <div key={index}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Category;
