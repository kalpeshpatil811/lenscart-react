import React, { useState } from "react";
import LensService from "../../services/LensService";
import { useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";

const AddLens = () => {
	// Create state variables for each input field
	const [brand, setBrand] = useState("");
	const [price, setPrice] = useState("");
	const [color, setColor] = useState("");
	const [shape, setShape] = useState("");
	const [lenseImage, setLenseImage] = useState("");
	const [quantity, setQuantity] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newLens = {
			brand: brand,
			price: price,
			color: color,
			shape: shape,
			lenseImage: lenseImage,
			quantity: quantity 
		};
		console.log(newLens);
		LensService.createLens(newLens)
			.then((res) => {
				console.log(res);
				console.log("Lens added successfully");
				alert("Lens added successfully");
				navigate("/showalllenses");
			})
			.catch((err) => {
				console.log(err);
				console.log("Error adding Lens");
				alert("Error adding Lens");
			});
	};

	const handleCancel = (e) => {
		e.preventDefault();
		navigate("/showalllenses");
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
			<h5 className="card-title text-center">Add Contact Lens</h5>
				<Form onSubmit={(e) => handleSubmit(e)}>			
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
					<FloatingLabel controlId="color" label="Lens Color" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Lens Color"
							required
							value={color}
							onChange={(e) => setColor(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel controlId="shape" label="Lens Shape" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Lens Shape"
							required
							value={shape}
							onChange={(e) => setShape(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel controlId="lenseImage" label="Image URL" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Image URL"
							required
							value={lenseImage}
							onChange={(e) => setLenseImage(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel controlId="quantity" label="Quantity" className="mb-3">
						<Form.Control
							type="number"
							placeholder="Enter Quantity in Box"
							required
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
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

export default AddLens;
