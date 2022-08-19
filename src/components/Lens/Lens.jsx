import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartService from "../../services/CartService";
import { getCustomerInfo } from "../Customer/CustomerInfo";
function Lens({ lens }) {
	const handleAddToCart = () => {
		try {
			var custId = getCustomerInfo().customerId;
			if (!custId) {
			}
			const cartItems = {
				name: lens.brand,
				brand: lens.brand,
				price: lens.price,
				image: lens.lenseImage,
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
			<Card.Img height={200} variant="top" src={lens.lenseImage} alt={lens.brand} />
			<Card.Body>
				<Card.Title>{lens.Brand}</Card.Title>
				<Card.Text>
					<b>Brand: </b>
					{lens.brand}
				</Card.Text>
				<Card.Text>
					<b>Price: </b>
					{lens.price}
				</Card.Text>
				<Card.Text>
					<b>Color: </b>
					{lens.color}
				</Card.Text>
				<Card.Text>
					<b>Lens Shape: </b>
					{lens.shape}
				</Card.Text>
				<Card.Text>
					<b>Quantity in Box: </b>
					{lens.quantity}
				</Card.Text>
			</Card.Body>
			<Button variant="primary" style={{ width: "80%" }} onClick={handleAddToCart}>
				Add To Cart
			</Button>
		</Card>
	);
}

export default Lens;
