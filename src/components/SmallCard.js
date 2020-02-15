import React from "react";

const SmallCard = () => {
  return (
    <div className="w-32 h-40 rounded mr-8 border-gray-500 shadow">
      <img className="w-full h-20" href="https://via.placeholder.com/150" />
      <div className="text-sm"> actor's name</div>
    </div>
  );
};

export default SmallCard;
