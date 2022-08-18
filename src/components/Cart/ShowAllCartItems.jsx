import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import CartService from "../../services/CartService";
import { getCustomerInfo } from "../Customer/CustomerInfo";
import Cart from "./Cart";

const ShowAllCartItems = () => {
	const [cart, setCart] = useState([]);

	const getTotalPrice = () => {
		let total = 0;
		cart.forEach((item) => {
			total += item.price;
		});
		return total;
	};

	useEffect(() => {
		let custId = getCustomerInfo().customerId;

		CartService.getAllCartItemsByCustomerId(custId)
			.then((res) => {
				setCart(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onPlaceOrder = () => {
		var answer = window.confirm("Are you sure you want to place order?");
		if (answer) {
			CartService.removeAllBycustomerId(getCustomerInfo().customerId)
				.then((res) => {
					setCart([]);
					alert("Order Placed Successfully");
					console.log(res);
				})
				.catch((err) => {
					alert("Order Placed Failed");
					console.log(err);
				});
		}
	};

	return (
		<div style={{ minHeight: "85vh" }}>
			<Container
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
				}}
			>
				{cart.map((cartItem) => (
					<Cart key={cartItem.itemId} cartItem={cartItem} setCart={setCart} />
				))}
			</Container>
			<Container
				style={{
					display: "flex",
					flexDirection: "column",
					padding: "10px",
					alignItems: "center",
					marginBottom: "20px",
				}}
			>
				<h3>Total Amount: ₹{getTotalPrice()}</h3>
				<Button
					onClick={onPlaceOrder}
					style={{ margin: "5px", width: "60%" }}
					variant="outline-success"
				>
					Place Order
				</Button>
			</Container>
		</div>
	);
};

export default ShowAllCartItems;
