import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Glass({ glass }) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img height={200} variant="top" src={glass.glassImage} alt={glass.glassName} />
			<Card.Body>
				<Card.Title>{glass.glassName}</Card.Title>
				<Card.Text>{glass.brand}</Card.Text>
				<Card.Text>{glass.price}</Card.Text>
				<Card.Text>{glass.type}</Card.Text>
				<Card.Text>{glass.powerRange}</Card.Text>
                <Button variant="primary">Buy</Button>
			</Card.Body>
		</Card>
	);
}

export default Glass;
