import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FrameService from "../../services/FrameService";


const UpdateFrames = () => {
    
    const [frameName, setFrameName] = useState("");
	const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [shapeOptions, setShapeOptions] = useState("");
	const [size, setSize] = useState("");
	const [frameImage, setFrameImage] = useState("");
    const { frameId } = useParams();

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
            console.log(frame)
            console.log(frameId)
		});
	}, [frameId]);
	const handleClose = () => {
		navigate("/showallframes");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const responseBody = {
            frameName: frameName,
			brand: brand,
            color: color,
			price: price,
			description: description,
			shapeOptions: shapeOptions,
			size: size,
			frameImage: frameImage,
		};
		console.log(responseBody);
		FrameService.UpdateFrames(responseBody).then((res) => {
            alert("Succesfully Updated!");
			handleClose();
		});
	};

    return (
		<div align="center">
			<div className="card" style={{ width: "50rem" }}>
				<form className="card-body" onSubmit={(e) => handleSubmit(e)}>
					<h5 className="card-title">Update Frame Details</h5>
					<hr />
                   
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

                    {/* <!-- Color input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="color">
							Color
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

					{/* <!-- Description input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="description">
							Description
						</label>
						<input
							type="text"
							id="description"
							className="form-control"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					{/* <!-- Shape options input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="shapeOptions">
							Shape
						</label>
						<input
							type="text"
							id="shapeOptions"
							className="form-control"
							value={shapeOptions}
							onChange={(e) => setShapeOptions(e.target.value)}
						/>
					</div>

                    	{/* <!-- Size options input --> */}
					<div className="form-outline mb-4">
						<label className="form-label" htmlFor="size">
                        Size
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

					{/* <!-- Submit button --> */}
					<button type="submit" className="btn btn-primary btn-block mb-4">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateFrames;