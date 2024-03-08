import React from "react";
import { price } from "../../dummydata";


const PriceCard = () => {
  return (
    <>
      

      {price.map((val) => (
        <div className="items shadow">
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>

          <p>{val.desc}</p>

          <p>{val.desc2}</p>

          <p>{val.desc3}</p>

          <p>{val.desc4}</p>

          <p>{val.desc5}</p>

          <button className="outline-btn">Choose Plan</button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
