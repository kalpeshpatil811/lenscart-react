import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import GlassService from "../../services/GlassService";

function GlassAdmin({ glass, setGlass }) {
	const navigate = useNavigate();

	const handleDelete = () => {
		GlassService.deleteGlass(glass.glassId)
			.then((res) => {
				let updateGlass = res.data;
				alert("Glass Deleted Successfully");
				setGlass(updateGlass);
			})
			.catch((err) => {
				alert("Error in deleting Glass");
			});
	};

	const handleUpdate = () => {
		navigate(`/updateglass/${glass.glassId}`);
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
			<Button variant="warning" style={{ width: "80%", margin: "5px" }} onClick={handleUpdate}>
				Update
			</Button>
			<Button variant="danger" style={{ width: "80%", margin: "5px" }} onClick={handleDelete}>
				Delete
			</Button>
		</Card>
	);
}

export default GlassAdmin;
