import React, { useState } from "react";

import Button from "../components/Button";
import OptionGroup from "../components/OptionGroup";
import Option from "../components/Option";
import ProductCard from "../components/ProductCard";

import storesData from "../data/stores.json";
import menuData from "../data/menu.json";

export default function Order(props) {
  const stores = storesData.stores;

  const setMenuQtys = (e) => {
    let sum = 0;
    let newData = menuQty;
    let newBillItem = {};
    let bill = [];

    for (let i = 0; i < menuQty.length; i++) {
      if (menuQty[i].qty > 0) {
        newBillItem.name = menuQty[i].name;
        newBillItem.qty = e[0];
        newBillItem.price = menuQty[i].price;
        newBillItem.subtotal = menuQty[i].price * e[0];
        bill.push(newBillItem);
      }

      if (menuQty[i].code === e[1]) {
        newData[i].qty = e[0];
      }
      sum += newData[i].qty;
    }
    console.log(bill);
    props.setBill(bill);
    props.setCartItem(sum);
    return newData;
  };

  const updateMenuQty = (code) => {
    const newState = menuQty.map((obj) => {
      if (obj.code === code) {
        return { ...obj, qty: this };
      }
      return obj;
    });

    return newState;
  };

  let [menuOptionTagline, setMenuOptionTagline] = useState(
    "Fresh from the oven"
  );
  let [menuType, setMenuType] = useState("dine-in");
  let [store, setStore] = useState(storesData.stores[0].name);

  let rawMenu = menuData.menu;
  let [menuOption, setMenuOption] = useState("food");

  const filterMenu = (category) => {
    let filteredMenu = [];

    for (let i = 0; i < rawMenu.length; i++) {
      if (rawMenu[i].category === category) {
        filteredMenu.push(rawMenu[i]);
      }
    }

    return filteredMenu;
  };

  let initMenuData = [];

  let [menu, setMenu] = useState(rawMenu);

  for (let i = 0; i < rawMenu.length; i++) {
    initMenuData.push({
      code: rawMenu[i].code,
      name: rawMenu[i].name,
      price: rawMenu[i].price,
      qty: 0,
    });
  }

  let [menuQty, setMenuQty] = useState(initMenuData);
  let [menuCount, setMenuCount] = useState(menu.length);
  // let [bill, setBill] = useState([]);

  const handleChangeStore = (e) => {
    setStore(e.target.value);
  };

  const handleChangeMenu = (e) => {
    setMenuOption(e.target.id);

    let menuCountRaw = 0;
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].category == e.target.id) {
        menuCountRaw++;
      }
    }
    setMenuCount(menuCountRaw);
  };

  const handleMenuChange = (e) => {};

  return (
    <section className="container-fluid order" id="order">
      <h1 className="fs-48 fw-700">Order</h1>
      <div className="row">
        <div className="col-4">
          <h2 className="fs-40 fw-600">Menu</h2>
        </div>
        <div className="col-4">
          <div className="store-option">
            <p className="fs-18 fw-600">Store:</p>
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={handleChangeStore}
            >
              {stores.map((item) => {
                return (
                  <option value={item.id}>
                    {item.name} - {item.address} {item.city}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row options">
        <div className="col-4">
          <div className="menu">
            <Option
              id="food"
              name="option"
              label="Food"
              onChange={handleChangeMenu}
              defaultChecked
            />
            <Option
              id="beverage"
              name="option"
              label="Beverage"
              onChange={handleChangeMenu}
            />
            <Option
              id="bread"
              name="option"
              label="Bread"
              onChange={handleChangeMenu}
            />
            <Option
              id="coffee"
              name="option"
              label="Coffee"
              onChange={handleChangeMenu}
            />
          </div>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <div className="option-type">
            <Option
              id="type-dinein"
              name="type"
              label="Dine In"
              defaultChecked
            />
            <Option id="type-takeaway" name="type" label="Take Away" />
          </div>
        </div>
      </div>
      <h3 className="fs-28 fw-500">{menuOptionTagline}</h3>
      <div className="row product-catalogue">
        <div className="col scrollable">
          <div className="scrollable-content">
            {menuCount === 0 ? (
              <div className="center">
                <img
                  className="menu-not-found"
                  src="assets/images/not-found.png"
                ></img>
                <p>Coming soon</p>
              </div>
            ) : (
              ""
            )}
            {menu.map((item) => {
              return (
                <ProductCard
                  data={item}
                  setMenuQty={setMenuQtys}
                  hidden={item.category === menuOption ? false : true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
