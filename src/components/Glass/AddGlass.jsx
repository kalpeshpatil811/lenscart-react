import React, { useState } from "react";
import GlassService from "../../services/GlassService";
import { useNavigate } from "react-router-dom";

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
			})
			.catch((err) => {
				console.log(err);
				console.log("Error adding Glass");
			})
			.finally(() => {
				navigate("/");
			});
	};

	return (
		<div align="center">
			<div className="card" style={{ width: "50rem" }}>
				<form className="card-body" onSubmit={(e) => handleSubmit(e)}>
					<h5 className="card-title">Add Glass</h5>
					<hr />
					{/* <!-- SunGlass Name input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="sunGlassName">
							Glass Name
						</label>
						<input
							type="text"
							id="glassName"
							className="form-control"
							value={glassName}
							onChange={(e) => setGlassName(e.target.value)}
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
							Power Range
						</label>
						<input
							type="number"
							id="powerRange"
							className="form-control"
							value={powerRange}
							onChange={(e) => setPowerRange(e.target.value)}
						/>
					</div>

					{/* <!-- Frame Color input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="frameColor">
							Type
						</label>
						<input
							type="text"
							id="type"
							className="form-control"
							value={type}
							onChange={(e) => setType(e.target.value)}
						/>
					</div>

					{/* <!-- Frame Shape input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="frameShape">
							price
						</label>
						<input
							type="text"
							id="price"
							className="form-control"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>

					{/* <!-- Glass Color input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="glassColor">
							Glass Image
						</label>
						<input
							type="text"
							id="glassImage"
							className="form-control"
							value={glassImage}
							onChange={(e) => setGlassImage(e.target.value)}
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

export default AddGlass;
