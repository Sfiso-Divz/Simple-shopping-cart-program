import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../Context";

function ProductTile({singleProduct}) {

    const navigate = useNavigate();
    
  

    function handleNavigateProductDetail(singleProductId){
        navigate(`/products-details/${singleProductId}`)
        console.log(singleProductId)
    }
    
  return (
    <div className="w-full ">
      <div className="border border-cyan-600 p-4 group">
        <div>
          <img
            className="cursor-pointer group-hover:scale-110 overflow-hidden duration-300"
            src={singleProduct?.thumbnail}
            alt={singleProduct?.title}
          />
        </div>
        <div className=" flex justify-between items-center mt-8">
          <h3 className=" text-gray-700 w-[100px] text-ellipsis overflow-hidden whitespace-nowrap">
            {singleProduct?.title}
          </h3>
          <p className="text-gray-600">{singleProduct?.price}</p>
        </div>
        <div>
          <button onClick={()=> handleNavigateProductDetail(singleProduct?.id)} className="bg-gray-900 text-white py-2 w-full px-4 mt-4 rounded-md cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
