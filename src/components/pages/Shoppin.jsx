import React, { useEffect, useState } from "react";
import {CardBody} from "../Card/CardBody";
import {Button}  from "../Button/button";
import {HeaderShoppin}  from "../Header/HeaderShoppin";


 export const Shoppin = () => {
  const [items, setItem] = useState([]);
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("hi");
  }, []);

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }



  return (
    <div>
      <div className="w-3/5 mx-auto p-[30px] rounded-md bg-pink-900">
        <div className="flex justify-between items-center shadow-md p-4 rounded-md mb-4 top-0 bg-white z-20 ">
          <HeaderShoppin />
          <div className="flex items-center gap-4">
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>
        <CardBody
          products={items}
          addItem={addItem}
          addedItems={addedItems}
        />
      </div>
    </div>
  );
};

