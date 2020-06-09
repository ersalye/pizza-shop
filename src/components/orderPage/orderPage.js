import React from "react";
import "./orderPage.css"
import OrderItem from "./orderItem/orderItem";
import getPriceString from "../../helpers/functions/getPriceString";
import {Link} from "react-router-dom";
import NoItemsBanner from "../noItemsBanner/noItemsBanner";

const OrderPage = (
  {
    cartItems,
    flatMenu,
    currencyRate,
    pricesString,
    addToCart,
    removeFromCart,
    deleteFromCart,
  }) => {

  const newCartItems = {...cartItems};
  delete newCartItems.count;
  const itemIds = Object.keys(newCartItems);

  const CartItems = itemIds.map(id => {
    let name = 'Pizza Name';
    let price = 0;
    let img = '';
    let quantity = 1;
    let priceString = '';

    const menuItem = flatMenu.find(item => Number(item.id) === Number(id));
    if (menuItem) {
      name = menuItem.name;
      price = menuItem.price;
      img = menuItem.img;
      quantity = newCartItems[id];
      const allPrice = (price * quantity);
      priceString = getPriceString(allPrice, currencyRate);
    }

    const orderProps = {
      id,
      name,
      img,
      quantity,
      priceString,
      addToCart,
      removeFromCart,
      deleteFromCart,
    };

    return (
      <OrderItem
        key={id}
        {...orderProps}
      />
    )
  });

  const itemsLength = CartItems.length;
  const OrderButton = (
    <Link to="/confirm">
      <button type="button" className="btn btn-info mb-5">ORDER NOW</button>
    </Link>
  );

  return (
    <div className="mr-2 mt-2 order-page">
      <h1>Order</h1>
      {
        itemsLength
          ? CartItems
          : <NoItemsBanner/>
      }
      <h3>{pricesString}</h3>
      {
        itemsLength
          ? OrderButton
          : null
      }
    </div>
  );
};

export default OrderPage;
