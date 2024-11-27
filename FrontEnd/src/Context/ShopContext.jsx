import { useContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = useContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
