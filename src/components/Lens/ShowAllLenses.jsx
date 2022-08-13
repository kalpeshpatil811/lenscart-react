import React, { useState, useEffect } from "react";
import LensService from "../../services/LensService.js";

const ShowAllLenses = () => {
	const [lenses, setLenses] = useState([]);

	useEffect(() => {
		LensService.getAllLenses().then((res) => {
			setLenses(res.data);
		});
	}, []);

	return (
		<div className="container">
			{lenses.map((lens) => (
				<div key={lens.id} className="card">
					<div className="card-body">
						<img src={lens.lenseImage} alt={lens.lensBrand} />
						{/* <h4>{lens.lensName}</h4> */}
						<h4>{lens.brand}</h4>
						<h4>{lens.price}</h4>
						<h4>{lens.color}</h4>
						<h4>{lens.shape}</h4>
						{/* <h4>{lens.glassColor}</h4> */}
						{/* <h4>{lens.weight}</h4> */}
					</div>
				</div>
			))}
		</div>
	);
};

export default ShowAllLenses;
