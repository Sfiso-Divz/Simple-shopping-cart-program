import React, { useContext } from "react";
import { ShoppingCartContext } from "../Context";

function CartTile({ cartItem }) {
  const {handleRemoveFromCart, handleAddToCart} = useContext(ShoppingCartContext);
  return (
    <>
      <div className="bg-white w-full">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div>
              <img
                src={cartItem?.thumbnail}
                alt={cartItem?.title}
                className="w-25"
              />
            </div>
          </div>
          <div className="col-span-1 space-y-6 flex flex-col justify-start py-4 items-center p-4">
            <div className="flex justify-between items-center space-x-8">
              <h1 className="text-nowrap w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                {cartItem?.title}
              </h1>
              <h3 className="text-gray-900 font-bold">
                R{cartItem?.totalPrice.toFixed(2)}
              </h3>
            </div>
            <div className="flex space-x-4">
              <div className="flex space-x-2">
                <button  onClick={() => handleRemoveFromCart(cartItem, false)} disabled={cartItem?.quantity === 1} className="disabled:opacity-60 border border-gray-600 py-1 rounded px-4 text-center space-x-2 cursor-pointer">
                  {" "}
                  -{" "}
                </button>
                <h1 className="text-xl text-gray-700">{cartItem?.quantity}</h1>
                <button onClick={() => handleAddToCart(cartItem)} className="border border-gray-600 py-1 rounded px-4 text-center space-x-2 cursor-pointer">
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromCart(cartItem, true)}
                className="bg-gray-900 text-white text-sm py-2 px-4 rounded cursor-pointer"
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-400" />
    </>
  );
}

export default CartTile;
