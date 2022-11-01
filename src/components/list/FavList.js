import React from "react";
import { CustomCard } from "../card/CustomCard";

export const FavList = ({ favList, removeFromFavList }) => {
  console.log(favList);
  return (
    <div>
      <h4>My favorite robot</h4>

      <div className="robot-list mt-4">
        {favList.map((nm, i) => (
          <CustomCard
            key={i}
            name={nm}
            title="Remove from the list"
            fun={removeFromFavList}
          />
        ))}
      </div>
    </div>
  );
};
