import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import OrderReview from "./components/OrderReview/OrderReview";
import Invantory from "./components/Invantory/Invantory";
import NotFound from "./components/NotFound/NotFound";
import PlaceOrder from "./components/placeOrder/PlaceOrder";
import Login from "./components/Login/Login";
import Register from "./Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipping from "./components/Shipping/Shipping";
function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/order-review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/manage-inventory">
            <Invantory></Invantory>
          </Route>
          <PrivateRoute path="/place-order">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <Shipping></Shipping>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
