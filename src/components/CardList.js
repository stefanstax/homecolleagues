import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const robotslist = robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        name={robot.name}
        username={robot.username}
        email={robot.email}
        city={robot.address.city}
        company={robot.company.name}
        website={robot.website}
      />
    );
  });

  return <div className="flex flex-wrap align-center justify-center">{robotslist}</div>;
};

export default CardList;
