import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SeeItems from "./Pages/SeeItems/SeeItems";
import Basket from "./Pages/Basket/Basket";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import Payment from "./Pages/Payment/Payment";
import TopButton from "./Components/topButton/TopButton";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Forgot from "./Pages/Forgot/Forgot";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from "./Pages/Success/Success";
import Failure from "./Pages/Failure/Failure";
const stripePromise = loadStripe(
  "pk_test_51HyYccLfcQoOgS4tLW6yFItAg4mpMEypqvGEh21kN9FYINPSpVs1RJ3ioImpS2vqWMVnfyZOe2VdyW1c4UWwBncJ00Fy1uk61F"
);

function App() {
  return (
    <Router>
      <div className="main__app">
        <Switch>
          <Route path="/failure" exact>
            <Failure />
          </Route>
          <Route path="/success" exact>
            <Success />
          </Route>
          <Route path="/forgot" exact>
            <Forgot />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/all" exact>
            <SeeItems />
          </Route>
          <Route path="/basket" exact>
            <Basket />
          </Route>
          <Route path="/checkout">
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orderHistory" exact>
            <OrderHistory />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <TopButton />
      </div>
    </Router>
  );
}

export default App;
