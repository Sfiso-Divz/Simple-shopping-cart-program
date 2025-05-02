import React, { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const { loading, productDetails, setProductDetails, setLoading, handleAddToCart, cart } =
    useContext(ShoppingCartContext);

  async function fetchProductDetails() {
    setLoading(true);

    try {
      const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await apiResponse.json();

      if (result) {
        setProductDetails(result);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setProductDetails(null);
    }
  }

 

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-gray-900 text-2xl">
          Loading Details... Please wait
        </h1>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-gray-800 text-2xl font-bold mt-12 text-center">
        Product Details
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-8 py-8 lg:py16 gap-4 lg:px-12 px-4">
        <div className="col-span-3">
          <img src={productDetails?.thumbnail} alt={productDetails?.title} />
          <div className="flex space-x-12 mt-8">
            {productDetails?.images?.length > 0 ? (
              productDetails?.images?.map((singleImage) => (
                <div key={singleImage}>
                  <img
                    src={singleImage}
                    alt={productDetails?.title}
                    className="w-25"
                  />
                </div>
              ))
            ) : (
              <h3>No Images Found</h3>
            )}
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col lg:mt-24 items-center space-y-6">
            <div className="w-full">
              <h1 className="text-2xl text-gray-900 text-left font-bold">
                {productDetails?.title}
              </h1>
            </div>
            <div>
              <p className="text-gray-600">{productDetails?.description}</p>
            </div>
            <div className="flex space-x-6 items-center w-full">
              <p className="text-gray-600">Price: R{productDetails?.price}</p>
              <button disabled={cart.findIndex((item) => item.id === productDetails?.id) > -1} onClick={()=> handleAddToCart(productDetails)} className="disabled:opacity-60 bg-gray-900 text-white py-2 px-4 rounded-md cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
