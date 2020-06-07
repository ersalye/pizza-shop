import React, {useState} from 'react';
import useMenu from "./hooks/useMenu";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css"
import MainContent from "./components/mainContent/mainContent";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import MainPage from "./components/mainPage/mainPage";
import OrderPage from "./components/orderPage/orderPage";

function App() {
  const [cartItems, setCartItems] = useState({count: 0});
  const menu = useMenu();
  let menuItems = [];

  if (menu) {
    menuItems = menu.map(item => {
      return {
        header: item.header,
        id: item.id,
      }
    });
  }

  const getCurrentMenuItem = (name) => {
    if (menu) {
      return menu.find(item => {
        return item.header.toLowerCase() === name.toLowerCase();
      });
    }
  };

  const addToCard = (menuId, positionId) => {
    setCartItems(cartItems => {
      const newCartItems = {...cartItems};

      if (newCartItems[menuId]) {
        newCartItems[menuId].push(positionId);
        newCartItems.count = newCartItems.count + 1;
      } else {
        newCartItems[menuId] = [];
        newCartItems[menuId].push(positionId);
        newCartItems.count = newCartItems.count + 1;
      }

      return newCartItems;
    })
  };

  return (
    <Router>
      <React.Fragment>
        <Navbar cartItems={cartItems}/>
        <div className="d-flex justify-content-start">
          <div className="flex-shrink-1 sidebar-wrap">
            <Sidebar menuItems={menuItems}/>
          </div>
          <div className="main-content-wrap">
            <Switch>
              <Route path="/pizza-shop" exact render={() => {
                return <MainPage menuItems={menuItems}/>
              }}/>
              <Route path="/pizza-shop/order" render={() => {
                return <OrderPage cartItems={cartItems} menu={menu}/>
              }}/>
              <Route path="/pizza-shop/:menuHeader" render={({match}) => {
                const {menuHeader}  = match.params;
                const menuItem = getCurrentMenuItem(menuHeader);
                if (menuItem) {
                  return <MainContent menuItem={menuItem} addToCard={addToCard}/>
                } else {
                  return <Redirect to="/pizza-shop"/>
                }
              }}/>
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
