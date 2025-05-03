import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext();

function GlobalState({ children }) {
  const [productList, setProductList] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function fetchProductList() {
    setLoading(true);

    try {
      const apiResponse = await fetch("https://dummyjson.com/products");
      const result = await apiResponse.json();

      if (result?.products) {
        setProductList(result?.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setProductList([]);
    }
  }

  function handleAddToCart(getProductDetails){
    
    let copyExistingCartItems = [...cart];
    const findIndexOfCurrentItem = copyExistingCartItems.findIndex(
      cartItem=> cartItem.id === getProductDetails.id
    )

    if(findIndexOfCurrentItem === -1){
      copyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price
      })
    }else{

      copyExistingCartItems[findIndexOfCurrentItem] = {
        ...copyExistingCartItems[findIndexOfCurrentItem],
        quantity: copyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice: (copyExistingCartItems[findIndexOfCurrentItem].quantity + 1)
        * copyExistingCartItems[findIndexOfCurrentItem].price
      }
    }

    setCart(copyExistingCartItems);
    localStorage.setItem('cart', JSON.stringify(copyExistingCartItems))
    navigate('/cart')
  }

  function handleRemoveFromCart (getProductDetails, isFullyRemoveFromCart){

    let copyExistingCartItems = [...cart];
    const findIndexOfCurrentItem = copyExistingCartItems.findIndex(
      cartItem=> cartItem.id === getProductDetails.id
    )

    if(isFullyRemoveFromCart){
      copyExistingCartItems.splice(findIndexOfCurrentItem, 1);
    }else{
        copyExistingCartItems[findIndexOfCurrentItem] = {
        ...copyExistingCartItems[findIndexOfCurrentItem],
        quantity: copyExistingCartItems[findIndexOfCurrentItem].quantity - 1,
        totalPrice: (copyExistingCartItems[findIndexOfCurrentItem].quantity - 1)
        * copyExistingCartItems[findIndexOfCurrentItem].price
      }
        }
        localStorage.setItem('cart', JSON.stringify(copyExistingCartItems))
        setCart(copyExistingCartItems)
    }

  

  useEffect(() => {
    fetchProductList();
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        productList,
        setProductList,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        cart,
        setCart,
        handleAddToCart,
        handleRemoveFromCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default GlobalState;
