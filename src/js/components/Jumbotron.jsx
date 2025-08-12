import React from "react";

const Jumbotron = () => {
  return (
    <div className="bg-light m-4 mb-5 rounded-3">
      <h1 className="display-1 p-3 pb-0">A warm Welcome!</h1>
      <p className="p-3 pb-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero sem,
        viverra nec neque ac, commodo dictum ex. Ut venenatis elit quis metus viverra
        vehicula non nec nulla.
      </p>
      <button type="button" className="btn btn-primary mb-5 m-3">
        Call to action!
      </button>
    </div>
  );
};

export default Jumbotron;
