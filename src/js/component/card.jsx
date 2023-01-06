import React from "react";

const Card = () => {
  return (
    <div className="card m-3 pb-5" style={{width: "18rem"}}>
      <img
        src="https://via.placeholder.com/500x325"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quos
          voluptate veritatis numquam velit vel, atque labore nostrum laborum
          deleniti reprehenderit quaerat odit vero esse natus eveniet voluptas
          nisi deserunt!
        </p>
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

export default Card;
