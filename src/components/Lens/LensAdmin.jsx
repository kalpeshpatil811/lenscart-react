import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LensService from "../../services/LensService";

function LensAdmin({ lens, setLens }) {
	const navigate = useNavigate();

	const handleDelete = () => {
		LensService.deleteLens(lens.lensId)
			.then((res) => {
				let updatedLenses = res.data;
				alert("Lens Deleted Successfully");
				setLens(updatedLenses);
			})
			.catch((err) => {
				console.log(err);
				alert("Error in deleting Lens");
			});
	};

	const handleUpdate = () => {
		navigate(`/updatelens/${lens.lensId}`);
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
				<Card.Title>{lens.brand}</Card.Title>
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
			<Button variant="warning" style={{ width: "80%", margin: "5px" }} onClick={handleUpdate}>
				Update
			</Button>
			<Button variant="danger" style={{ width: "80%", margin: "5px" }} onClick={handleDelete}>
				Delete
			</Button>
		</Card>
	);
}

export default LensAdmin;
