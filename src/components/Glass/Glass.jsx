import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

function Glass({ glass }) {
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
			<Button variant="primary" style={{ width: "80%" }}>
				Add To Cart
			</Button>
		</Card>
	);
}

export default Glass;
