import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FrameService from "../../services/FrameService";
import { Card, Form, FloatingLabel, Row, Col, Button } from "react-bootstrap";

const UpdateFrames = () => {
	const { frameId } = useParams();
	const [frameName, setFrameName] = useState("");
	const [brand, setBrand] = useState("");
	const [color, setColor] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [shapeOptions, setShapeOptions] = useState("");
	const [size, setSize] = useState("");
	const [frameImage, setFrameImage] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		FrameService.getFrameById(frameId).then((res) => {
			let frame = res.data;
			setFrameName(frame.frameName);
			setBrand(frame.brand);
			setColor(frame.color);
			setPrice(frame.price);
			setDescription(frame.description);
			setShapeOptions(frame.shapeOptions);
			setSize(frame.size);
			setFrameImage(frame.frameImage);
		})
			.catch((err) => {
				console.log("No frame found with id: " + frameId);
			});
	}, [frameId]);

	const handleClose = () => {
		navigate("/showallframesadmin");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
			frameId: frameId,
			frameName: frameName,
			brand: brand,
			color: color,
			price: price,
			description: description,
			shapeOptions: shapeOptions,
			size: size,
			frameImage: frameImage,
		};

		FrameService.updateFrame(responseBody).then((res) => {
			alert("Frame Succesfully Updated!");
			console.log(res.data);
			handleClose();
		})
			.catch((err) => {
				alert("Frame Update Failed");
				console.log(err);
			});
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
				<Form onSubmit={(e) => handleSubmit(e)}>

					<FloatingLabel controlId="frameId" label="Frame ID" className="mb-3">
						<Form.Control type="text" placeholder="Enter Frame ID" disabled value={frameId} />
					</FloatingLabel>

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

					{/* <!-- Submit button --> */}
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
export default UpdateFrames;