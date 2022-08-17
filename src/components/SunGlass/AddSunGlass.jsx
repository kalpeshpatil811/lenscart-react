import React, { useState } from "react";
import SunGlassService from "../../services/SunGlassService";
import { useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";

const AddSunGlass = () => {
	// Create state variables for each input field
	const [sunGlassName, setSunGlassName] = useState("");
	const [brand, setBrand] = useState("");
	const [price, setPrice] = useState("");
	const [frameColor, setFrameColor] = useState("");
	const [frameShape, setFrameShape] = useState("");
	const [glassColor, setGlassColor] = useState("");
	const [weight, setWeight] = useState("");
	const [image, setImage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newSunGlass = {
			sunGlassName: sunGlassName,
			brand: brand,
			price: price,
			frameColor: frameColor,
			frameShape: frameShape,
			glassColor: glassColor,
			weight: weight,
			image: image,
		};
		console.log(newSunGlass);
		SunGlassService.createSunGlass(newSunGlass)
			.then((res) => {
				console.log(res);
				console.log("Sunglass added successfully");
				alert("Sunglass added successfully");
				navigate("/showallsunglasses");
			})
			.catch((err) => {
				console.log(err);
				console.log("Error adding Sunglass");
				alert("Error adding Sunglass");
			});
	};

	const handleCancel = (e) => {
		e.preventDefault();
		navigate("/showallsunglasses");
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<FloatingLabel controlId="sunGlassName" label="SunGlass Name" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter SunGlass Name"
							required
							value={sunGlassName}
							onChange={(e) => setSunGlassName(e.target.value)}
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
					<FloatingLabel controlId="frameColor" label="Frame Color" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Frame Color"
							required
							value={frameColor}
							onChange={(e) => setFrameColor(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel controlId="frameShape" label="Frame Shape" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Frame Shape"
							required
							value={frameShape}
							onChange={(e) => setFrameShape(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel controlId="glassColor" label="Glass Color" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Glass Color"
							required
							value={glassColor}
							onChange={(e) => setGlassColor(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel controlId="weight" label="Weight" className="mb-3">
						<Form.Control
							type="number"
							placeholder="Enter Weight"
							required
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel controlId="image" label="Image URL" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Image URL"
							required
							value={image}
							onChange={(e) => setImage(e.target.value)}
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

export default AddSunGlass;
