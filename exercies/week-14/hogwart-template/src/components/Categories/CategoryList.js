import React from 'react';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
        {/* add link to each of these */}

          <CategoryCard id="potions" categoryData={categories[0]} />
       
          <CategoryCard id="charms" categoryData={categories[1]} />
       
         

      {categories.slice(2).map((category,index )=> (
          <CategoryCard categoryData={category} key={index} />
        ))}
    </div>
  );
}

export default CategoryList;
