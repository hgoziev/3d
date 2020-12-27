import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ShoppingBag from "@material-ui/icons/LocalMallOutlined";
function BasketIcon({ toggle }) {
  const notifier = useSelector((state) => state.notifier);
  return (
    <Link className="link" to="/basket">
      <div className="header__basket__container">
        <ShoppingBag className={!toggle ? "underline" : "show__underline"} />
        <div className="header__circle__basket">
          <span>{notifier == 0 ? "0" : notifier}</span>
        </div>
      </div>
    </Link>
  );
}

export default BasketIcon;
