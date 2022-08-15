import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SunGlassService from "../../services/SunGlassService";

function SunGlassAdmin({ sunGlass, setSunGlasses }) {
	const navigate = useNavigate();

	const handleDelete = () => {
		SunGlassService.deleteSunGlass(sunGlass.sunGlassId)
			.then((res) => {
				let updatedSunGlasses = res.data;
				alert("Sun Glass Deleted Successfully");
				setSunGlasses(updatedSunGlasses);
			})
			.catch((err) => {
				alert("Error in deleting Sun Glass");
			});
	};

	const handleUpdate = () => {
		navigate(`/updatesunglass/${sunGlass.sunGlassId}`);
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
			<Card.Img height={200} variant="top" src={sunGlass.image} alt={sunGlass.sunGlassName} />
			<Card.Body>
				<Card.Title>{sunGlass.sunGlassName}</Card.Title>
				<Card.Text>
					<b>Brand: </b>
					{sunGlass.brand}
				</Card.Text>
				<Card.Text>
					<b>Price: </b>
					{sunGlass.price}
				</Card.Text>
				<Card.Text>
					<b>Frame Color: </b>
					{sunGlass.frameColor}
				</Card.Text>
				<Card.Text>
					<b>Frame Shape: </b>
					{sunGlass.frameShape}
				</Card.Text>
				<Card.Text>
					<b>Glass Color: </b>
					{sunGlass.glassColor}
				</Card.Text>
				<Card.Text>
					<b>Weight: </b>
					{sunGlass.weight}
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

export default SunGlassAdmin;
