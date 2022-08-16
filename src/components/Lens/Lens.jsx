import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Lens({ lens }) {
	// return (
	// 	<Card style={{ width: "18rem" }}>
	// 		<Card.Img height={200} variant="top" src={lens.lenseImage} alt={lens.brand} />
	// 		<Card.Body>
	// 			<Card.Text>{lens.brand}</Card.Text>
	// 			<Card.Text>{lens.price}</Card.Text>
	// 			<Card.Text>{lens.color}</Card.Text>
	// 			<Card.Text>{lens.shape}</Card.Text>
	// 			<Card.Text>{lens.quantity}</Card.Text>
	// 			<Button variant="primary">Buy</Button>
	// 		</Card.Body>
	// 	</Card>
	// );

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
					<b>Frame Color: </b>
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
			<Button variant="primary" style={{ width: "80%" }}>
				Add To Cart
			</Button>
		</Card>
	);
}

export default Lens;
