import React from "react";
import Search from "../../Components/Search/Search";
import Header from "../../Header/Header";
import "./SeeItems.css";
import Im from "../../assets/mult.jpg";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import Footer from "../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_BASKET } from "../../Redux/Actions/Types";
import { Link, useLocation } from "react-router-dom";

function SeeItems() {
  const { showItem } = useLocation();
  const DATA = [
    {
      title: "Monster UNiversity",
      price: 5,
      image: Im,
      id: 1,
      format: "3d",
    },
    {
      title: "Monster UNiversity",
      price: 5,
      image: Im,
      id: 2,
      format: "3d",
    },
    {
      title: "Monster UNiversity",
      price: 5,
      image: Im,
      id: 3,
      format: "3d",
    },
    {
      title: "Monster UNiversity",
      price: 5,
      image: Im,
      id: 4,
      format: "3d",
    },
  ];

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const database = useSelector((state) => state.database);

  let Arr = [];
  // basket.map((item) => {
  //   Arr.push(item.id);
  // });

  const renderItem = (item) => {
    const addToBasket = () => {
      // if (!Arr.includes(item.id)) {

      dispatch({
        type: ADD_TO_BASKET,
        itemData: {
          id: item.id,
          image: item.image,
          title: item.title,
          format: item.format,
          price: item.price,
        },
      });
      // }
    };
    return (
      <div className="seeItems__photosContainer">
        {DATA.map((item, index) => (
          <div className="seeItems__photosBlock" key={index}>
            <img src={item.image} alt="" classNam="seeItems__img" />
            <div className="seeItems__text">
              <div className="seeItems__price">
                <span>${item.price}</span>
                <Cart className="seeItems__cart" onClick={addToBasket} />
              </div>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  };
  return (
    <div className="seeItems">
      <div className="seeItems__header">
        <Header />
      </div>
      <div className="seeItems__search">
        <Search />
      </div>
      <div className="seeItems__showdata">
        {DATA.map((item, index) => renderItem(item))}
      </div>
      <div className="seeItems__footer">
        <Footer />
      </div>
    </div>
  );
}

export default SeeItems;
