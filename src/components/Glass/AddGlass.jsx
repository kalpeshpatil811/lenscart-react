import React, { useState } from "react";
import GlassService from "../../services/GlassService";
import { useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";

const AddGlass = () => {
	// Create state variables for each input field
	const [glassName, setGlassName] = useState("");
	const [brand, setBrand] = useState("");
	const [price, setPrice] = useState("");
	const [type, setType] = useState("");
	const [powerRange, setPowerRange] = useState("");
	const [glassImage, setGlassImage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newGlass = {
			glassName: glassName,
			brand: brand,
			price: price,
			type: type,
			powerRange: powerRange,
			glassImage: glassImage,
		};
		console.log(newGlass);
		GlassService.addGlass(newGlass)
			.then((res) => {
				console.log(res);
				console.log("Glass added successfully");
				alert("Glass added successfully");
				navigate("/showallglassesadmin");
			})
			.catch((err) => {
				console.log(err);
				console.log("Error adding Glass");
				alert("Error adding Glass");
			});
	};

	const handleCancel = (e) => {
		e.preventDefault();
		navigate("/showallglassesadmin");
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<FloatingLabel controlId="glassName" label="Glass Name" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Glass Name"
							required
							value={glassName}
							onChange={(e) => setGlassName(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel controlId="brand" label="Brand" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Brand"
							required
							value={brand}
							onChange={(e) => setBrand(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel controlId="price" label="Price" className="mb-3">
						<Form.Control
							type="number"
							placeholder="Enter Price"
							required
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel controlId="type" label="Type" className="mb-3">
						<Form.Select
							type="text"
							aria-label="Floating label select example"
							value={type}
							onChange={(e) => setType(e.target.value)}
							required
						>
							<option>Select Type</option>
							<option value="zero power">Zero Power</option>
							<option value="digital screen protection">Digital Screen Protection</option>
							<option value="single vision">Single Vision</option>
							<option value="bifocal powered glass">Bifocal Powered Glass</option>
						</Form.Select>
					</FloatingLabel>
					<FloatingLabel controlId="powerRange" label="powerRange" className="mb-3">
						<Form.Control
							type="number"
							placeholder="Enter Power Range"
							required
							value={powerRange}
							onChange={(e) => setPowerRange(e.target.value)}
						/>
					</FloatingLabel>

					<FloatingLabel controlId="glassImage" label="glassImage" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Image URL"
							required
							value={glassImage}
							onChange={(e) => setGlassImage(e.target.value)}
						/>
					</FloatingLabel>
					<Row>
						<Col>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Col>
						<Col>
							<Button variant="danger" onClick={handleCancel}>
								Cancel
							</Button>
						</Col>
					</Row>
				</Form>
			</Card>
		</div>
	);
};
export default AddGlass;
