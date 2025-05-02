import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CartTile from "../../Components/CartTile";
import { useNavigate } from "react-router-dom";

function CartList() {
  const { cart, loading } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <div className="bg-white lg:max-x-7xl mx-auto">
      <div className=" px-4 py-8 lg:py-16">
        <div>
          <h1 className="text-gray-900 font-bold text-2xl text-center">
            Cart List
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 p-8 mt-8 gap-16">
          <div className="lg:col-span-3 flex flex-col justify-start">
            {cart?.length ? (
              cart.map((cartItem) => (
                <CartTile cartItem={cartItem} key={cartItem.id} />
              ))
            ) : (
              <h2 className="flex justify-center items-center py-24">
                No Items Selected...
              </h2>
            )}
          </div>
          <div className="lg:col-span-2 flex  justify-center py-16">
            <div className="space-y-8">
              <div>
                <h3>Order Summary</h3>
              </div>
              <div>
                <p>Total : R{cart.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}</p>
              </div>
              <div className="flex space-x-2 w-full">
                <button
                  disabled={cart.length === 0}
                  className="disabled:opacity-65 bg-gray-900 text-white py-2 px-4 text-xs rounded cursor-pointer "
                >
                  Checkout
                </button>
                <button
                  className="bg-gray-900 text-white py-2 px-4 text-xs rounded cursor-pointer text-nowrap"
                  onClick={()=> navigate("/products")}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
