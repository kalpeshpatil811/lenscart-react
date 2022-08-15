import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Frames({ frame }) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img height={200} variant="top" src={frame.frameImage} alt={frame.frameName} />
			<Card.Body>
				<Card.Title>Name : {frame.frameName}</Card.Title>
				<Card.Text>Brand : {frame.brand}</Card.Text>
                <Card.Text>Color : {frame.color}</Card.Text>
				<Card.Text>Price : {frame.price}</Card.Text>
				<Card.Text>Description : {frame.description}</Card.Text>
				<Card.Text>Shape: {frame.shapeOptions}</Card.Text>
				<Card.Text>Size : {frame.size}</Card.Text>
				<Button variant="primary">Buy</Button>
			</Card.Body>
		</Card>
	);
}

export default Frames;
