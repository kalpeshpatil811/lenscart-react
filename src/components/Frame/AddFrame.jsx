import React, { useState } from "react";
import FrameService from "../../services/FrameService";
import { useNavigate } from "react-router-dom";

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
			})
			.catch((err) => {
				console.log(err);
				console.log("Error adding Frame");
			})
			.finally(() => {
				navigate("/");
			});
	};

	return (
		<div align="center">
			<div className="card" style={{ width: "50rem" }}>
				<form className="card-body" onSubmit={(e) => handleSubmit(e)}>
					<h5 className="card-title">Add New Frame</h5>
					<hr />

					{/* <!-- Frame Name input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="frameName">
							Frame Name
						</label>
						<input
							type="text"
							id="frameName"
							className="form-control"
							value={frameName}
							onChange={(e) => setFrameName(e.target.value)}
						/>
					</div>

					{/* <!-- Brand input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="brand">
							Frame Brand
						</label>
						<input
							type="text"
							id="brand"
							className="form-control"
							value={brand}
							onChange={(e) => setBrand(e.target.value)}
						/>
					</div>


                    {/* <!-- Frame Color input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="color">
							Frame Color
						</label>
						<input
							type="text"
							id="color"
							className="form-control"
							value={color}
							onChange={(e) => setColor(e.target.value)}
						/>
					</div>


					{/* <!-- Price input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="price">
							Frame Price
						</label>
						<input
							type="number"
							id="price"
							className="form-control"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>


					{/* <!-- Frame Description input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="description">
							Frame Description
						</label>
						<input
							type="text"
							id="description"
							className="form-control"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					{/* <!-- Glass shapeOptions input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="shapeOptions">
                            Frame Shape
						</label>
						<input
							type="text"
							id="shapeOptions"
							className="form-control"
							value={shapeOptions}
							onChange={(e) => setShapeOptions(e.target.value)}
						/>
					</div>

					{/* <!-- Size input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="size">
							Frame Size
						</label>
						<input
							type="text"
							id="size"
							className="form-control"
							value={size}
							onChange={(e) => setSize(e.target.value)}
						/>
					</div>

					{/* <!-- Image URL input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="frameImage">
							Image URL
						</label>
						<input
							type="text"
							id="frameImage"
							className="form-control"
							value={frameImage}
							onChange={(e) => setFrameImage(e.target.value)}
						/>
					</div>

					{/* <!-- Submit button and Cancel button--> */}

					<div className="row mb-4">
						<div className="col">
							<div className="form-outline">
								<button type="submit" className="btn btn-primary btn-block mb-4">
									Submit
								</button>
							</div>
						</div>
						<div className="col">
							<div className="form-outline">
								<button type="submit" className="btn btn-danger btn-block mb-4">
									Cancel
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddFrame;
