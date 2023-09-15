import React, { useState } from "react";

export const Card = ({ product, addItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddItem = () => {
    addItem(product);
    setIsAdded(true);
  };

  return (
    <div className="border border-white  rounded overflow-hidden mx-4 my-6 max-w-xs h-[400px] relative bg-white">
      <img className="w-full h-40 object-contain mx-auto my-4" src={product.image} alt="" />
      <button
        className={`absolute top-0 m-8 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 cursor-pointer text-4xl font-bold `}
        style={{ maxWidth: "90%", maxHeight: "90%" }}
        onClick={handleAddItem}
      >
        +
      </button>
      <div className="p-4 flex flex-col justify-between h-1/2">
        <div>
          <h2 className="text-lg font-semibold">{product.category}</h2>
          <h4 className="text-md">{product.title}</h4>
          <p className="text-sm max-h-20 overflow-hidden truncate">{product.description}</p>
        </div>
        <div className="mt-2">
          <span className="text-gray-600 font-bold text-right text-emerald-700">
            Price: <span className="truncate text-emerald-700">${product.price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

