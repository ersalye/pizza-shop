import React from "react";
import Card from "../../UI/card/card";

const MainContent = ({menuItem}) => {
  const header = menuItem?.header;
  const menuPositions = menuItem?.items;
  let Cards;

  if (menuPositions) {
    Cards = menuPositions.map(position => {
      return (
        <Card
          key={position.id}
          name={position.name}
          description={position.description}
          imageUrl={position.img}
        />
      )
    }) ;
  }

  return (
    <div className="mx-5 mt-2">
      <h1>{header}</h1>
      <div className="d-flex justify-content-start flex-wrap w-100">
        {Cards}
      </div>
    </div>
  );
};

export default MainContent;