import React from 'react';


const Recipe = ({ title, calories, img, ingrs }) => {


  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {ingrs.map((ingr, i) => (<li key={i}>{ingr.text}</li>))}
      </ul>
      <p>칼로리 : {calories}</p>
      <img src={img} alt="" />
    </div>
  );
};

export default Recipe;