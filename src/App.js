import React, {useState} from 'react';
import useMenu from "./hooks/useMenu";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css"
import MainContent from "./components/mainContent/mainContent";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import MainPage from "./components/mainPage/mainPage";

function App() {
  const [cartItems, setCartItems] = useState({});
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
    console.log(menuId, positionId)
    // setCartItems(cartItems => {
    //   if (cartItems[menuId]) {
    //     cartItems[menuId].push(positionId);
    //   }
    //   cartItems[menuId]
    // })
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
            <Route path="/" exact render={() => {
              return <MainPage menuItems={menuItems}/>
            }}/>
            <Route path="/:menuHeader" render={({match}) => {
              const {menuHeader}  = match.params;
              const menuItem = getCurrentMenuItem(menuHeader);
              return <MainContent menuItem={menuItem} addToCard={addToCard}/>
            }}/>
            <Redirect to="/"/>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
