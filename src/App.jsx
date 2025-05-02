import { Route, Routes } from "react-router-dom"
import ProductList from "./Pages/ProductList"
import ProductDetails from "./Pages/ProductDetails"
import CartList from "./Pages/CartList"
import NotFound from "./Components/NotFound"
import Home from "./Pages/Home"


function App() {
 

  return (
   <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/products-details/:id" element={<ProductDetails />}/>
        <Route path="/cart" element={<CartList />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
   </div>
  )
}

export default App
