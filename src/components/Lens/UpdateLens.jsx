import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LensService from "../../services/LensService";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";

const UpdateLens = () => {
	const [brand, setBrand] = useState("");
	const [price, setPrice] = useState("");
	const [color, setColor] = useState("");
	const [shape, setShape] = useState("");
	const [lenseImage, setlenseImage] = useState("");
	const [quantity, setQuantity] = useState("");
	const { lensId } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		LensService.getLensById(lensId).then((res) => {
			let lens = res.data;
			setBrand(lens.brand);
			setPrice(lens.price);
			setColor(lens.color);
			setShape(lens.shape);
			setQuantity(lens.quantity);
			setlenseImage(lens.lenseImage);
			console.log(lens);
			console.log(lensId);
		});
	}, [lensId]);
	const handleClose = () => {
		navigate("/showalllensesadmin");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
			lensId: lensId,
			brand: brand,
			price: price,
			color: color,
			shape: shape,
			quantity: quantity,
			lenseImage: lenseImage,
		};
		console.log(responseBody);
		LensService.updateLens(responseBody).then((res) => {
			alert("Succesfully Updated!");
			handleClose();
		});
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
				<h5 className="card-title text-center">Update Contact Lens</h5>
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
						<Form.Select type="text" aria-label="Floating label select example" value={shape}
							onChange={(e) => setShape(e.target.value)} required>
							<option>Select Shape</option>
							<option value="Hard Lens">Hard Lens</option>
							<option value="Soft Lens">Soft Lens</option>
							<option value="Hybrid Lens">Hybrid Lens</option>
							<option value="Multifocal Lens">Multifocal Lens</option>
							<option value="Scleral Lens">Scleral Lens</option>
						</Form.Select>
					</FloatingLabel>
					<FloatingLabel controlId="lenseImage" label="Image URL" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Image URL"
							required
							value={lenseImage}
							onChange={(e) => setlenseImage(e.target.value)}
						/>
					</FloatingLabel>
					<FloatingLabel controlId="quantity" label="Quantity" className="mb-3">
						<Form.Control
							min="1"
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

export default UpdateLens;
