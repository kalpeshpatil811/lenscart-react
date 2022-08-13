import React, { useState } from "react";
import SunGlassService from "../../services/SunGlassService";
import { useNavigate } from "react-router-dom";

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
			})
			.catch((err) => {
				console.log(err);
				console.log("Error adding Sunglass");
			})
			.finally(() => {
				navigate("/");
			});
	};

	return (
		<div align="center">
			<div className="card" style={{ width: "50rem" }}>
				<form className="card-body" onSubmit={(e) => handleSubmit(e)}>
					<h5 className="card-title">Add Sunglass</h5>
					<hr />
					{/* <!-- SunGlass Name input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="sunGlassName">
							SunGlass Name
						</label>
						<input
							type="text"
							id="sunGlassName"
							className="form-control"
							value={sunGlassName}
							onChange={(e) => setSunGlassName(e.target.value)}
						/>
					</div>

					{/* <!-- Brand input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="brand">
							Brand
						</label>
						<input
							type="text"
							id="brand"
							className="form-control"
							value={brand}
							onChange={(e) => setBrand(e.target.value)}
						/>
					</div>

					{/* <!-- Price input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="price">
							Price
						</label>
						<input
							type="number"
							id="price"
							className="form-control"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>

					{/* <!-- Frame Color input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="frameColor">
							Frame Color
						</label>
						<input
							type="text"
							id="frameColor"
							className="form-control"
							value={frameColor}
							onChange={(e) => setFrameColor(e.target.value)}
						/>
					</div>

					{/* <!-- Frame Shape input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="frameShape">
							Frame Shape
						</label>
						<input
							type="text"
							id="frameShape"
							className="form-control"
							value={frameShape}
							onChange={(e) => setFrameShape(e.target.value)}
						/>
					</div>

					{/* <!-- Glass Color input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="glassColor">
							Glass Color
						</label>
						<input
							type="text"
							id="glassColor"
							className="form-control"
							value={glassColor}
							onChange={(e) => setGlassColor(e.target.value)}
						/>
					</div>

					{/* <!-- Weight input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="weight">
							Weight
						</label>
						<input
							type="number"
							id="weight"
							className="form-control"
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
						/>
					</div>

					{/* <!-- Image URL input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="image">
							Image URL
						</label>
						<input
							type="text"
							id="image"
							className="form-control"
							value={image}
							onChange={(e) => setImage(e.target.value)}
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

export default AddSunGlass;
