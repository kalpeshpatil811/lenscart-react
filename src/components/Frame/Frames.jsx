import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Frames({ frame }) {
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
			<Button variant="primary" style={{ width: "80%" }}>
				Add To Cart
			</Button>
		</Card>
	);
}

export default Frames;
