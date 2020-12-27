import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BasketIcon2.css";
import ShoppingBag from "@material-ui/icons/LocalMallOutlined";
function BasketIcon() {
  const notifier = useSelector((state) => state.notifier);
  return (
    <Link className="link" to="/basket">
      <div className="basketIcon2">
        <ShoppingBag fontSize="large" />
        <div className="basketIcon2__counter">
          <span>{notifier == 0 ? "0" : notifier}</span>
        </div>
      </div>
    </Link>
  );
}

export default BasketIcon;
