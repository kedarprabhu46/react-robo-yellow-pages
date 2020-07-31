import React from "react";
import "./card.css";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib  grow tc br3 shadow-3-ns ma3 pa3 robot-card">
      <img alt="Robot Photo" src={`https://robohash.org/${id}?size=200x200`}></img>
      <div className="robo-details">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
