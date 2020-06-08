import React, {useState} from 'react';
import useMenu from "./hooks/useMenu";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css"
import MainContent from "./components/mainContent/mainContent";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import MainPage from "./components/mainPage/mainPage";
import OrderPage from "./components/orderPage/orderPage";

function App() {
  const [cartItems, setCartItems] = useState({count: 0});
  const menu = useMenu();
  let menuItems = [];
  let flatMenu = [];

  if (menu) {
    menuItems = menu.map(item => {
      return {
        header: item.header,
        id: item.id,
      }
    });

    const keys = Object.keys(menu);
    flatMenu = keys.flatMap(key => {
      return menu[key].items;
    })
  }

  const getCurrentMenuItem = (name) => {
    if (menu) {
      return menu.find(item => {
        return item.header.toLowerCase() === name.toLowerCase();
      });
    }
  };

  const addToCard = (positionId) => {
    setCartItems(cartItems => {
      const newCartItems = {...cartItems};

      if (newCartItems[positionId]) {
        newCartItems[positionId] = newCartItems[positionId] + 1;
        newCartItems.count = newCartItems.count + 1;
      } else {
        newCartItems[positionId] = 1;
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
              <Route path={`/`} exact render={() => {
                return <MainPage menuItems={menuItems}/>
              }}/>
              <Route path={`/order`} render={() => {
                return <OrderPage cartItems={cartItems} flatMenu={flatMenu}/>
              }}/>
              <Route path={`/menu/:menuHeader`} render={({match}) => {
                const {menuHeader}  = match.params;
                const menuItem = getCurrentMenuItem(menuHeader);
                if (menuItem) {
                  return <MainContent menuItem={menuItem} addToCard={addToCard}/>
                } else if (menu) {
                  return <Redirect to={`/`}/>
                }
              }}/>
              <Redirect to={`/`}/>
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
