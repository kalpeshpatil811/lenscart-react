import React, { useState, useEffect } from "react";
import GlassService from "../../services/GlassService";

const ShowAllGlass = () => {
	const [glass, setGlass] = useState([]);

	useEffect(() => {
		GlassService.getAllGlass().then((res) => {
			setGlass(res.data);
		});
	}, []);

	return (
		<div className="container">
			{glass.map((glass) => (
				<div key={glass.id} className="card">
					<div className="card-body">
						<img src={glass.glassImage} alt={glass.glassName}/>
						<h4>{glass.glassName}</h4>
						<h4>{glass.brand}</h4>
						<h4>{glass.price}</h4>
						<h4>{glass.type}</h4>
						<h4>{glass.powerRange}</h4>
					</div>
				</div>
			))}
		</div>
	);
};

export default ShowAllGlass;
