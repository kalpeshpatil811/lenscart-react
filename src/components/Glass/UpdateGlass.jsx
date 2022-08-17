import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";
import GlassService from "../../services/GlassService";

const UpdateGlass = () => {
	const [glassName, setGlassName] = useState("");
	const [price, setPrice] = useState("");
	const [brand, setBrand] = useState("");
	const [type, setType] = useState("");
	const [powerRange, setPowerRange] = useState("");
	const [glassImage, setGlassImage] = useState("");
	const { glassId } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		GlassService.getGlassById(glassId).then((res) => {
			let glass = res.data;
			setGlassName(glass.glassName);
			setPrice(glass.price);
			setBrand(glass.brand);
			setType(glass.type);
			setGlassImage(glass.glassImage);
			setPowerRange(glass.powerRange);
			setType(glass.type);
			console.log(glass);
			console.log(glassId);
		});
	}, [glassId]);

	const handleClose = () => {
		navigate("/showallglassesadmin");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
			glassId: glassId,
			brand: brand,
			price: price,
			glassName: glassName,
			powerRange: powerRange,
			type: type,
			glassImage: glassImage,
		};
		console.log(responseBody);
		GlassService.updateGlass(responseBody).then((res) => {
			alert("Succesfully Updated!");
			handleClose();
		});
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
				<h5 className="card-title text-center">Update Glass</h5>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<FloatingLabel controlId="glassName" label="glass Name" className="mb-3">
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
						<Form.Select type="text" aria-label="Floating label select example" value={type}
							onChange={(e) => setType(e.target.value)} required>
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
							<Button variant="danger" onClick={handleClose}>
								Cancel
							</Button>
						</Col>
					</Row>
				</Form>
			</Card>
		</div>
	);
};

export default UpdateGlass;