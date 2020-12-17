import {
  REMOVE_FROM_BASKET,
  ADD_TO_BASKET,
  ADD_USER,
  DATABASE_FILL,
  ITEMS_INFO,
  EMPTY_BASKET,
  EMPTY_ITEMS_INFO,
  LOADING,
  NOTIFIER_REMOVE,
} from "../Actions/Types";

const initialState = {
  basket: [],
  user: [],
  notifier: 0,
  ALL_DATA: [],
  loading: false,
  database: [],
  items_info: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((prev, item) => item.price + prev, 0);

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ITEMS_INFO:
      return {
        ...state,
        items_info: [...state.items_info, action.payload],
      };
    case EMPTY_ITEMS_INFO:
      return {
        ...state,
        items_info: [],
      };
    case DATABASE_FILL:
      return {
        ...state,
        database: [...state.database, action.payload],
      };

    case NOTIFIER_REMOVE:
      return {
        ...state,
        notifier: state.notifier - 1,
      };

    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.itemData],
        notifier: state.notifier + 1,
      };

    case "ADD_TO_DATA":
      return {
        ...state,
        ALL_DATA: [...state.ALL_DATA, action.payload],
      };

    case REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove item (id: ${action.id}) as it is not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };

    case EMPTY_BASKET:
      return {
        ...state,
        basket: [],
        notifier: 0,
      };

    default:
      return state;
  }
};

export default rootReducer;
