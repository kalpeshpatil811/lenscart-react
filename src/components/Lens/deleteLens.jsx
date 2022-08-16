
import React, { useEffect, useState } from "react";
// import { makeStyles, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import LensService from "../../services/LensService";
// import lensService from "../../Services/lensService";


const DeleteLens = () => {
    
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
			setlenseImage(lens.lenseImage);
			setQuantity(lens.quantity);
            console.log(lens)
            console.log(lensId)
		});
	}, [lensId]);
	const handleClose = () => {
		navigate("/showalllenses");
	};

	const handleDelete = (e) => {
		e.preventDefault();
		const responseBody = {
            lensId:lensId,
		};
		console.log(responseBody);
		LensService.deleteLens(responseBody.lensId).then((res) => {
            alert("Succesfully Updated!");
			handleClose();
		});
	};

    return (
		<div align="center">
			<div className="card" style={{ width: "50rem" }}>
				<form className="card-body" onSubmit={(e) => handleDelete(e)}>
					<h5 className="card-title">Delete Contact Lens</h5>
					<hr />
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
					{/* <!-- Quantity input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="quantity">
							Quantity
						</label>
						<input
							type="number"
							id="quantity"
							className="form-control"
							value={quantity}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>


					{/* <!-- Delete button --> */}
					<button type="submit" className="btn btn-primary btn-block mb-4">
						Delete
					</button>
				</form>
			</div>
		</div>
	);
};

export default DeleteLens;