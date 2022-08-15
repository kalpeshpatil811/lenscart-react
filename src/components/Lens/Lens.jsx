import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Lens({ lens }) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img height={200} variant="top" src={lens.lenseImage} alt={lens.brand} />
			<Card.Body>
				<Card.Text>{lens.brand}</Card.Text>
				<Card.Text>{lens.price}</Card.Text>
				<Card.Text>{lens.color}</Card.Text>
				<Card.Text>{lens.shape}</Card.Text>
				<Card.Text>{lens.quantity}</Card.Text>
				<Button variant="primary">Buy</Button>
			</Card.Body>
		</Card>
	);
}

export default Lens;
