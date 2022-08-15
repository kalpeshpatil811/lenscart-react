
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LensService from "../../services/LensService";


const UpdateLens = () => {
    
    const [brand, setBrand] = useState("");
	const [price, setPrice] = useState("");
	const [color, setColor] = useState("");
	const [shape, setShape] = useState("");
	const [lenseImage, setlenseImage] = useState("");
    const { lensId } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		LensService.getLensById(lensId).then((res) => {
			let lens = res.data;
			setBrand(lens.brand);
			setPrice(lens.price);
			setColor(lens.color);
			setShape(lens.shape);
			setlenseImage(lens.lenseImage);
            console.log(lens)
            console.log(lensId)
		});
	}, [lensId]);
	const handleClose = () => {
		navigate("/showalllenses");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
            lensId:lensId,
			brand: brand,
			price: price,
			color: color,
			shape: shape,
			lenseImage: lenseImage
		};
		console.log(responseBody);
		LensService.updateLens(responseBody).then((res) => {
            alert("Succesfully Updated!");
			handleClose();
		});
	};

    return (
		<div align="center">
			<div className="card" style={{ width: "50rem" }}>
				<form className="card-body" onSubmit={(e) => handleSubmit(e)}>
					<h5 className="card-title">Update Contact Lens</h5>
					<hr />
					{/* <!-- SunGlass Name input --> */}
					{/* <div className="form-outline mb-4">
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
					</div> */}

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

					{/* <!-- Color input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="color">
							Color
						</label>
						<input
							type="text"
							id="frameColor"
							className="form-control"
							value={color}
							onChange={(e) => setColor(e.target.value)}
						/>
					</div>

					{/* <!-- Shape input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="shape">
							Shape
						</label>
						<input
							type="text"
							id="shape"
							className="form-control"
							value={shape}
							onChange={(e) => setShape(e.target.value)}
						/>
					</div>

					{/* <!-- Image URL input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="lenseImage">
							Image URL
						</label>
						<input
							type="text"
							id="image"
							className="form-control"
							value={lenseImage}
							onChange={(e) => setlenseImage(e.target.value)}
						/>
					</div>

					{/* <!-- Submit button --> */}
					<button type="submit" className="btn btn-primary btn-block mb-4">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateLens;