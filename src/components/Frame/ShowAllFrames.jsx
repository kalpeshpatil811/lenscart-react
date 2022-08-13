import React, { useState, useEffect } from "react";
import FrameService from "../../services/FrameService";

const ShowAllFrames = () => {
	const [frames, setFrames] = useState([]);

	useEffect(() => {
		FrameService.getAllFrames().then((res) => {
			setFrames(res.data);
		});
	}, []);

	return (
		<div className="container">
			{frames.map((frame) => (
				<div key={frame.id} className="card">
					<div className="card-body">
						<img src={frame.frameImage} alt={frame.frameName} />
						<h4>{frame.frameName}</h4>
						<h4>{frame.color}</h4>
						<h4>{frame.price}</h4>
						<h4>{frame.description}</h4>
						<h4>{frame.shapeOptios}</h4>
						<h4>{frame.size}</h4>
					</div>
				</div>
			))}
		</div>
	);
};

export default ShowAllFrames;
