import React, { useState, useEffect } from "react";
import LensService from "../../services/LensService.js";

const ShowAllLensesAdmin = () => {
	const [lenses, setLenses] = useState([]);

	useEffect(() => {
		LensService.getAllLenses().then((res) => {
			setLenses(res.data);
		});
	}, []);
	
	return (
		<div className="container">
		<div class="row row-cols-1 row-cols-md-3">
			{lenses.map((lens) => (
				//{/* <div className="col-lg-3 mb-2 sm-1"> */}
				//{/* <div className="card-deck"> */}
  				<div class="col-lg-4 d-flex align-items-stretch">
				<div key={lens.id} style={{width: 20 + 'em'}} className="card text-center border-primary mb-3" >
					<div className="card-body">
						<img className='card-img-top' src={lens.lenseImage} alt={lens.lensBrand} />
						{/* <h4>{lens.lensName}</h4> */}
						<h4>{lens.brand}</h4>
						<h4>{lens.price}</h4>
						<h4>{lens.color}</h4>
						<h4>{lens.shape}</h4>
						<h4>{lens.quantity}</h4>
						<a href={"http://localhost:3000/updatelens/"+lens.lensId} className="btn btn-primary">{'Edit'}</a>
						<a href={"http://localhost:3000/deletelens/"+lens.lensId} className="btn btn-danger">{' Delete'}</a>
						{/* <h4>{lens.glassColor}</h4> */}
						{/* <h4>{lens.weight}</h4> */}
					</div>
				</div>
				</div>
			))}
		</div>
		</div>
	);
};

export default ShowAllLenses;
