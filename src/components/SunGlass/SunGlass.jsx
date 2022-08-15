import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SunGlass({ sunGlass }) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img height={200} variant="top" src={sunGlass.image} alt={sunGlass.sunGlassName} />
			<Card.Body>
				<Card.Title>{sunGlass.sunGlassName}</Card.Title>
				<Card.Text>{sunGlass.brand}</Card.Text>
				<Card.Text>{sunGlass.price}</Card.Text>
				<Card.Text>{sunGlass.frameColor}</Card.Text>
				<Card.Text>{sunGlass.frameShape}</Card.Text>
				<Card.Text>{sunGlass.glassColor}</Card.Text>
				<Card.Text>{sunGlass.weight}</Card.Text>
				<Button variant="primary">Buy</Button>
			</Card.Body>
		</Card>
	);
}

export default SunGlass;
