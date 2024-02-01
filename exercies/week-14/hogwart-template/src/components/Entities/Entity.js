import React from 'react';
import { Link } from 'react-router-dom';
import './Entity.css';

const Entity = ({ name, img, level ,category}) => {
  const path = "/wiki/"+category+"/"+name;
  return (
    <div className="entity">
      <img src={img} alt={name} />
      <div className="info">
        <h2>{name}</h2>
        <p>Level: {level}</p>
        <Link to={path}> <h2>Description</h2></Link>
      {console.log(path)}
      </div>
    </div>
  );
}

export default Entity;
