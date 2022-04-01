import React from "react";
import { CustomCard } from "../card/CustomCard";

export const FavList = ({ favList, removeFromFavList }) => {
  console.log(favList);
  return (
    <div>
      <h4>My fav robot</h4>

      <div className="robot-list">
        {favList.map((nm, i) => (
          <CustomCard
            key={i}
            name={nm}
            title="Remove from the list"
            fun={removeFromFavList}
          />
        ))}
        {/* <CustomCard name="test" />
        <CustomCard name="test" />
        <CustomCard name="test" />
        <CustomCard name="test" /> */}
      </div>
    </div>
  );
};
