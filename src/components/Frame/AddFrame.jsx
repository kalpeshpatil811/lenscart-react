import React, { useState } from "react";
import FrameService from "../../services/FrameService";
import { useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";

const AddFrame = () => {
	// Create state variables for each input field
	const [frameName, setFrameName] = useState("");
	const [brand, setBrand] = useState("");
	const [color, setColor] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [shapeOptions, setShapeOptions] = useState("");
	const [size, setSize] = useState("");
	const [frameImage, setFrameImage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newFrame = {
			frameName: frameName,
			brand: brand,
			color: color,
			price: price,
			description: description,
			shapeOptions: shapeOptions,
			size: size,
			frameImage: frameImage,
		};
		console.log(newFrame);
		FrameService.addFrame(newFrame)
			.then((res) => {
				console.log(res);
				console.log("Frame added successfully");
				alert("Frame added successfully");
				navigate("/showallframes");
			})
			.catch((err) => {
				console.log(err);
				console.log("Error adding Frame");
				alert("Error adding frame");
			})

	};


	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
				<Form onSubmit={(e) => handleSubmit(e)}>

					<FloatingLabel controlId="frameName" label="Frame Name" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Frame Name"
							required
							value={frameName}
							onChange={(e) => setFrameName(e.target.value)}
						/>
					</FloatingLabel>

					<FloatingLabel controlId="brand" label="Brand Name" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Brand"
							required
							value={brand}
							onChange={(e) => setBrand(e.target.value)}
						/>
					</FloatingLabel>

					<FloatingLabel controlId="color" label="Color Of Frame" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Color"
							required
							value={color}
							onChange={(e) => setColor(e.target.value)}
						/>
					</FloatingLabel>


					<FloatingLabel controlId="price" label="Brand Price" className="mb-3">
						<Form.Control
							type="number"
							placeholder="Enter Price"
							required
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</FloatingLabel>

					<FloatingLabel controlId="description" label="Description" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Description"
							required
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</FloatingLabel>

					<FloatingLabel controlId="shapeOptions" label="Shape Options of frame" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter shape"
							required
							value={shapeOptions}
							onChange={(e) => setShapeOptions(e.target.value)}
						/>
					</FloatingLabel>

					<FloatingLabel controlId="size" label="Frame size" className="mb-3">
						<Form.Select type="text" aria-label="Floating label select example" value={size}
							onChange={(e) => setSize(e.target.value)} required>
							<option value="small">Small</option>
							<option value="medium">Medium</option>
							<option value="large">Large</option>
						</Form.Select>
					</FloatingLabel>

					<FloatingLabel controlId="frameImage" label="Frame Image URL" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Image URL"
							required
							value={frameImage}
							onChange={(e) => setFrameImage(e.target.value)}
						/>
					</FloatingLabel>



					{/* <!-- Submit button and Cancel button--> */}

					<Row>
						<Col>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Col>
						{/* <Col>
							<Button variant="danger" onClick={handleCancel}>
								Cancel
							</Button>
						</Col> */}
					</Row>
				</Form>
			</Card>
		</div>

	);
};
export default AddFrame;