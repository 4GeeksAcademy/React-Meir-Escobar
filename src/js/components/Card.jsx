import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary w-100">Find out more!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;