import React from "react";

const Products = ({ data }) => {
  return (
    <>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img
                className="card-img-top"
                src={item.recipe.image}
                alt={item.recipe.label}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.recipe.label}</h5>
                <p className="card-text">
                  Calories: {Math.round(item.recipe.calories)}
                </p>
                <a href="#" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
