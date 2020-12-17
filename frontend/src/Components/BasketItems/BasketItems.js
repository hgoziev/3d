import React from "react";
import fo from "../../assets/mult.jpg";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import { REMOVE_FROM_BASKET, NOTIFIER_REMOVE } from "../../Redux/Actions/Types";

function BasketItems({ id, format, title, price }) {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  const deleteItem = () => {
    dispatch({ type: REMOVE_FROM_BASKET, id: id });
    dispatch({ type: NOTIFIER_REMOVE });
  };

  return (
    <div className="basket__left">
      <img src={fo} alt="" />
      <div className="basket__item__details">
        <p>{title}</p>
        <span>{format}</span>
      </div>

      <div className="basket__price__container">
        <DeleteIcon className="delete__icon" onClick={deleteItem} />
        <p>${price}</p>
      </div>
    </div>
  );
}

export default BasketItems;
