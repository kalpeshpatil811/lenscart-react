import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartService from "../../services/CartService";
import { getCustomerInfo } from "../Customer/CustomerInfo";

function Frames({ frame }) {
	const handleAddToCart = () => {
		try {
			var custId = getCustomerInfo().customerId;
			if (!custId) {
			}
			const cartItems = {
				name: frame.frameName,
				brand: frame.brand,
				price: frame.price,
				image: frame.frameImage,
				customerId: custId,
			};
			console.log(cartItems);
			CartService.addToCart(cartItems)
				.then((res) => {
					console.log(res);
					console.log("Added To Cart successfully");
					alert("Added To Cart successfully");
					// navigate("/showalllensesadmin");
				})
				.catch((err) => {
					console.log(err);
					console.log("Error adding Lens");
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
			<Card.Img height={200} variant="top" src={frame.frameImage} alt={frame.frameName} />
			<Card.Body>
				<Card.Title>{frame.frameName}</Card.Title>
				<Card.Text>
					<b>Brand: </b> {frame.brand}
				</Card.Text>
				<Card.Text>
					<b>Color :</b> {frame.color}
				</Card.Text>
				<Card.Text>
					<b>Price : </b> {frame.price}
				</Card.Text>
				<Card.Text>
					<b>Description : </b>
					{frame.description}
				</Card.Text>
				<Card.Text>
					<b>Shape: </b> {frame.shapeOptions}
				</Card.Text>
				<Card.Text>
					<b>Size :</b> {frame.size}
				</Card.Text>
			</Card.Body>
			<Button variant="primary" style={{ width: "80%" }} onClick={handleAddToCart}>
				Add To Cart
			</Button>
		</Card>
	);
}

export default Frames;