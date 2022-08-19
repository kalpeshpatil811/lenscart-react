import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import CartService from "../../services/CartService";

function Cart({ cartItem, setCart }) {
	const handleDelete = () => {
		CartService.removeFromCart(cartItem.itemId)
			.then((res) => {
				let updatedCart = res.data;
				setCart(updatedCart);
				alert("Cart Item Deleted Successfully");
			})
			.catch((err) => {
				console.log(err);
				alert("Error in Deleting Cart Item");
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
			<Card.Img height={200} variant="top" src={cartItem.image} alt={cartItem.name} />
			<Card.Body>
				<Card.Title>{cartItem.name}</Card.Title>
				<Card.Text>
					<b>Brand: </b>
					{cartItem.brand}
				</Card.Text>
				<Card.Text>
					<b>Price: </b>₹{cartItem.price}
				</Card.Text>
			</Card.Body>
			<Button variant="danger" style={{ width: "80%" }} onClick={handleDelete}>
				Delete
			</Button>
		</Card>
	);
}

export default Cart;
