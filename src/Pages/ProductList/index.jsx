import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import ProductTile from "../../Components/ProductTile";

function ProductList() {
  const { loading, productList } = useContext(ShoppingCartContext);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1>Loading Products... Please wait</h1>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto bg-white">
      <h1 className="mt-4 lg:mt-8 text-2xl mb-12 text-center">Product List</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 py-8 lg:py16 gap-4 lg:px-8 px-4">
        {productList.length > 0 ? (
          productList.map((singleProduct) => (
            <ProductTile singleProduct={singleProduct} key={singleProduct.id} />
          ))
        ) : (
          <h3>No Products Found</h3>
        )}
      </div>
    </div>
  );
}

export default ProductList;
