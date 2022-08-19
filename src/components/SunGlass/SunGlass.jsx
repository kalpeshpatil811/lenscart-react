import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import CartService from "../../services/CartService";
import { getCustomerInfo } from "../Customer/CustomerInfo";

function SunGlass({ sunGlass }) {
	const handleAddToCart = () => {
		const customerId = getCustomerInfo().customerId;
		const cartItem = {
			name: sunGlass.sunGlassName,
			brand: sunGlass.brand,
			price: sunGlass.price,
			image: sunGlass.image,
			customerId: customerId,
		};
		CartService.addToCart(cartItem)
			.then((res) => {
				console.log(res.data);
				alert("Added To Cart Successfully");
			})
			.catch((err) => {
				console.log(err);
				alert("Error Adding To Cart");
			});
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
			<Card.Img height={200} variant="top" src={sunGlass.image} alt={sunGlass.sunGlassName} />
			<Card.Body>
				<Card.Title>{sunGlass.sunGlassName}</Card.Title>
				<Card.Text>
					<b>Brand: </b>
					{sunGlass.brand}
				</Card.Text>
				<Card.Text>
					<b>Price: </b>
					{sunGlass.price}
				</Card.Text>
				<Card.Text>
					<b>Frame Color: </b>
					{sunGlass.frameColor}
				</Card.Text>
				<Card.Text>
					<b>Frame Shape: </b>
					{sunGlass.frameShape}
				</Card.Text>
				<Card.Text>
					<b>Glass Color: </b>
					{sunGlass.glassColor}
				</Card.Text>
				<Card.Text>
					<b>Weight: </b>
					{sunGlass.weight}
				</Card.Text>
			</Card.Body>
			<Button variant="primary" style={{ width: "80%" }} onClick={handleAddToCart}>
				Add To Cart
			</Button>
		</Card>
	);
}

export default SunGlass;
