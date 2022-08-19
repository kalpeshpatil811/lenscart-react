import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SunGlassService from "../../services/SunGlassService";
import { Card, Form, FloatingLabel, Row, Col, Button } from "react-bootstrap";

const UpdateSunGlass = () => {
	const { sunGlassId } = useParams();
	const [sunGlassName, setSunGlassName] = useState("");
	const [brand, setBrand] = useState("");
	const [price, setPrice] = useState("");
	const [frameColor, setFrameColor] = useState("");
	const [frameShape, setFrameShape] = useState("");
	const [glassColor, setGlassColor] = useState("");
	const [weight, setWeight] = useState("");
	const [image, setImage] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		SunGlassService.getSunGlassById(sunGlassId)
			.then((res) => {
				let sunGlass = res.data;
				setSunGlassName(sunGlass.sunGlassName);
				setBrand(sunGlass.brand);
				setPrice(sunGlass.price);
				setFrameColor(sunGlass.frameColor);
				setFrameShape(sunGlass.frameShape);
				setGlassColor(sunGlass.glassColor);
				setWeight(sunGlass.weight);
				setImage(sunGlass.image);
			})
			.catch((err) => {
				console.log("No sun glass found with id: " + sunGlassId);
			});
	}, [sunGlassId]);

	const handleClose = () => {
		navigate("/showallsunglassesadmin");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const updatedSunGlass = {
			sunGlassId: sunGlassId,
			sunGlassName: sunGlassName,
			brand: brand,
			price: price,
			frameColor: frameColor,
			frameShape: frameShape,
			glassColor: glassColor,
			weight: weight,
			image: image,
		};
		SunGlassService.updateSunGlass(updatedSunGlass)
			.then((res) => {
				alert("Sun Glass Updated Successfully");
				console.log(res.data);
				handleClose();
			})
			.catch((err) => {
				alert("Sun Glass Update Failed");
				console.log(err);
			});
	};

	return (
		<div style={{ display: "flex", justifyContent: "center", minHeight: "85vh" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<FloatingLabel controlId="sunGlassId" label="SunGlass ID" className="mb-3">
						<Form.Control type="text" placeholder="Enter SunGlass ID" disabled value={sunGlassId} />
					</FloatingLabel>
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
						<Form.Select
							type="text"
							aria-label="Enter Frame Shape"
							size="sm"
							value={frameShape}
							onChange={(e) => setFrameShape(e.target.value)}
							required
						>
							<option> Select shape from below options</option>
							<option value="Aviator">Aviator</option>
							<option value="Rounders">Rounders</option>
							<option value="Wayfarer">Wayfarer</option>
							<option value="Rectangle">Rectangle</option>
							<option value="Hexagon">Hexagon</option>
							<option value="Cat-Eye">Cat-Eye</option>
							<option value="Clubmaster">Clubmaster</option>
						</Form.Select>
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
								Update
							</Button>
						</Col>
						<Col>
							<Button variant="danger" onClick={handleClose}>
								Close
							</Button>
						</Col>
					</Row>
				</Form>
			</Card>
		</div>
	);
};
export default UpdateSunGlass;
