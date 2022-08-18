import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CartService from "../../services/CartService";
import { getCustomerInfo } from "../Customer/CustomerInfo";
import Cart from "./Cart";

const ShowAllCartItems = () => {
    const navigate = useNavigate();

    const handleClearCart = () => {
        var answer = window.confirm("Place Order?");
        if (answer) {
            navigate("/order");
        }
        else {
        }
    }
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let custId = getCustomerInfo().customerId;
        CartService.getAllCartItemsByCustomerId(custId).then((res) => {
            setCart(res.data);

        });
    }, []);
    // console.log(cart);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price;
    }
    // console.log(totalPrice);

    return (
        <>
            <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {cart.map((cart) => (
                    <Cart key={cart.itemId} cart={cart} setCart={setCart} />
                ))}
            </Container>
            <Container
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    alignItems: "center",
                }}
            ><h3>Total Amount: ₹{totalPrice}</h3>
                <Button onClick={handleClearCart}
                    style={{ margin: "5px", width: "60%" }}
                    variant="outline-success"
                >
                    Proceed to Checkout!
                </Button>
            </Container>
        </>
    );
};

export default ShowAllCartItems;
