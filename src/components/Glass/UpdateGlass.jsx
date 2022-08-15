import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
            console.log(glass)
            console.log(glassId)
		});
	}, [glassId]);
	const handleClose = () => {
		navigate("/showallglasses");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
            glassId:glassId,
			brand: brand,
			price: price,
			glassName: glassName,
			powerRange: powerRange,
			type: type,
            glassImage:glassImage,
		};
		console.log(responseBody);
		GlassService.updateGlass(responseBody).then((res) => {
            alert("Succesfully Updated!");
			handleClose();
		});
	};

    return (
		<div align="center">
			<div className="card" style={{ width: "50rem" }}>
				<form className="card-body" onSubmit={(e) => handleSubmit(e)}>
					<h5 className="card-title">Update Glass</h5>
					<hr />
					

                    <div className="form-outline mb-4">
						<label className="form-label" htmlFor="glassName">
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

					{/* <!-- type input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="type">
							type
						</label>
						<input
							type="text"
							id="type"
							className="form-control"
							value={type}
							onChange={(e) => setType(e.target.value)}
						/>
					</div>

					{/* <!-- PowerRange input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="powerRange">
							Power Range
						</label>
						<input
							type="text"
							id="powerRange"
							className="form-control"
							value={powerRange}
							onChange={(e) => setPowerRange(e.target.value)}
						/>
					</div>

					{/* <!-- Image URL input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="glassImage">
							Image
						</label>
						<input
							type="text"
							id="glassImage"
							className="form-control"
							value={glassImage}
							onChange={(e) => setGlassImage(e.target.value)}
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

export default UpdateGlass;