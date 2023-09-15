import React from "react";
import {Card} from "./Card";


 export const CardBody = ({ products, addItem,addedItems }) => {
  products.map((product) => (product.isAdded = true));
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addItem={addItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

