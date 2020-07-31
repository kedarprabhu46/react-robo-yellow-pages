import React from "react";
import Card from "./Card";


export const CardList = ({robots}) => {
  return (
    <div className="inline-flex flex-wrap justify-center pa3">
      {robots.map((robot) => ( 
        <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
      ))}
    </div>
  );
};
