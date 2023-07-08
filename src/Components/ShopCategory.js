import React from "react";

const ShopCategory = () => {
  return (
    <div>
      <h2 className="text-4xl text-center my-6">Shop By Catagory</h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 p-6 md:mx-10 lg:mx-14">
        <div className="rounded-xl h-64 border-2 shadow-lg">
          <img
            className="fluid w-60 h-52 rounded-xl"
            src="https://www.bdstall.com/asset/product-image/giant_154433.jpg"
            alt=""
          />
          <h3 className="text-2xl text-center">Adult Item</h3>
        </div>

        <div className="rounded-xl h-64 border-2 shadow-lg">
          <img
            className="fluid w-60 h-52 rounded-xl"
            src="https://www.bdstall.com/asset/product-image/giant_154433.jpg"
            alt=""
          />
          <h3 className="text-2xl text-center">Adult Item</h3>
        </div>
        <div className="rounded-xl h-64 border-2 shadow-lg">
          <img
            className="fluid w-60 h-52 rounded-xl"
            src="https://www.bdstall.com/asset/product-image/giant_154433.jpg"
            alt=""
          />
          <h3 className="text-2xl text-center">Adult Item</h3>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
