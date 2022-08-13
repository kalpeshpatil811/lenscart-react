import React, { useState, useEffect } from "react";
import SunGlassService from "../../services/SunGlassService";

const ShowAllSunGlasses = () => {
	const [sunGlasses, setSunGlasses] = useState([]);

	useEffect(() => {
		SunGlassService.getAllSunGlasses().then((res) => {
			setSunGlasses(res.data);
		});
	}, []);

	return (
		<div className="container">
			{sunGlasses.map((sunGlass) => (
				<div key={sunGlass.id} className="card">
					<div className="card-body">
						<img src={sunGlass.image} alt={sunGlass.sunGlassName} />
						<h4>{sunGlass.sunGlassName}</h4>
						<h4>{sunGlass.brand}</h4>
						<h4>{sunGlass.price}</h4>
						<h4>{sunGlass.frameColor}</h4>
						<h4>{sunGlass.frameShape}</h4>
						<h4>{sunGlass.glassColor}</h4>
						<h4>{sunGlass.weight}</h4>
					</div>
				</div>
			))}
		</div>
	);
};

export default ShowAllSunGlasses;
