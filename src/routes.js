import React from "react";
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import CustomerProfile from "./components/customerProfile/CustomerProfilePage";
import OrderSummary from "./components/orderSummary/OrderSummaryPage";

const Routes = () => (
        <Switch>
            <Route exact path="/" component={CustomerProfile} />
            <Route path="/customer-profile" component={CustomerProfile} />
            <Route path="/order-summary" component={OrderSummary} />
        </Switch>
);

export default Routes;