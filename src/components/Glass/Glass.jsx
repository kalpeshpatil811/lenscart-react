import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import CartService from "../../services/CartService";
import { getCustomerInfo } from "../Customer/CustomerInfo";

function Glass({ glass }) {
	const handleAddToCart = () => {
		try {
			var custId = getCustomerInfo().customerId;
			if (!custId) {
			}
			const cartItems = {
				name: glass.glassName,
				brand: glass.brand,
				price: glass.price,
				image: glass.glassImage,
				customerId: custId,
			};
			console.log(cartItems);
			CartService.addToCart(cartItems)
				.then((res) => {
					console.log(res);
					console.log("Added To Cart successfully");
					alert("Added To Cart successfully");
					// navigate("/showallglassesadmin");
				})
				.catch((err) => {
					console.log(err);
					console.log("Error adding Glass");
					alert("Error Adding To Cart");
				});
		} catch (error) {
			alert("Please Log In First!");
		}
	};
	return (
		<Card
			style={{
				width: "400px",
				margin: "10px",
				alignItems: "center",
				boxShadow: "0px 0px 10px 1px ",
				padding: "10px",
			}}
		>
			<Card.Img height={200} variant="top" src={glass.glassImage} alt={glass.glassName} />
			<Card.Body>
				<Card.Title>{glass.glassName}</Card.Title>
				<Card.Text>
					<b>Brand: </b>
					{glass.brand}
				</Card.Text>
				<Card.Text>
					<b>Price: </b>
					{glass.price}
				</Card.Text>
				<Card.Text>
					<b>Type: </b>
					{glass.type}
				</Card.Text>
				<Card.Text>
					<b>Power Range: </b>
					{glass.powerRange}
				</Card.Text>
			</Card.Body>
			<Button variant="primary" style={{ width: "80%" }} onClick={handleAddToCart}>
				Add To Cart
			</Button>
		</Card>
	);
}

export default Glass;
