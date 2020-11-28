import React, {useEffect, useState} from "react";
import './OrderSummaryPage.css';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const OrderSummary = () => {
    let totalPriceQty = 0;
    let tax = 0;
    let totalItem = 0;
    let totalBill = 0;

    const [order, setOrder] = useState({
        restaurantName: "",
        restaurantStreet: "",
        restaurantCity: "",
        restaurantState: "",
        restaurantZipcode: "",
        items: []
    });

    const orderData = async () => {
        try {
            const res = await axios.get("https://indapi.kumba.io/webdev/assignment");
            console.log('Hello>>>>', res.data);
            setOrder({
                restaurantName: res.data.restaurant.name,
                restaurantStreet: res.data.restaurant.street,
                restaurantCity: res.data.restaurant.city,
                restaurantState: res.data.restaurant.state,
                restaurantZipcode: res.data.restaurant.zipcode,
                items: res.data.items
            })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        orderData();
    }, []);

    return (
        <React.Fragment>
            <div className="row gutters-sm">
                <div className="col-md-4">
                    <div className="card" style={{ maxWidth: '600px' }}>
                        <div className="card-header">
                            <h4>Restaurant</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h6 className="mb-0">Name</h6>
                                </div>
                                <div className="col-sm-6 text-secondary text-left">
                                    {order.restaurantName}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-6">
                                    <h6 className="mb-0">Street</h6>
                                </div>
                                <div className="col-sm-6 text-secondary text-left">
                                    {order.restaurantStreet}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-6">
                                    <h6 className="mb-0">City</h6>
                                </div>
                                <div className="col-sm-6 text-secondary text-left">
                                    {order.restaurantCity}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-6">
                                    <h6 className="mb-0">State</h6>
                                </div>
                                <div className="col-sm-6 text-secondary text-left">
                                    {order.restaurantState}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-6">
                                    <h6 className="mb-0">Zipcode</h6>
                                </div>
                                <div className="col-sm-6 text-secondary text-left">
                                    {order.restaurantZipcode}
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card card-order">
                        <div className="card-header">
                            <h4>Items Ordered</h4>
                        </div>
                        <div className="card-body">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Currency</th>
                                    <th>Tax %</th>
                                    <th>Quantity</th>
                                </tr>
                                </thead>
                                <tbody>
                                {order.items.map((item, index) => {
                                    totalItem = item.quantity + totalItem;
                                    totalPriceQty = item.price * item.quantity + totalPriceQty;
                                    tax = item.tax_pct/100 * totalPriceQty;
                                    totalBill = totalPriceQty + tax;
                                    return (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <td>{item.price}</td>
                                            <td>{item.currency}</td>
                                            <td>{item.tax_pct}%</td>
                                            <td>{item.quantity}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                            <ul>
                                <li>Total Items:: {totalItem}</li>
                                <li>Total Tax:: {tax}</li>
                                <li>Total Bill:: {totalBill}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OrderSummary;