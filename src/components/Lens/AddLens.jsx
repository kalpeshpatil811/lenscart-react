import React, { useState } from "react";

const AddLens = () => {
	// const[brand,setBrand] = useState('')
	// const[image,setImage] = useState('')
	// const[shape,setShape] = useState('')
	// const[price,setPrice] = useState('')
	// const[color,setColor] = useState('')
	return (
		<div align="center">
			<div className="card" style={{ width: "50rem" }}>
				<form className="card-body">
					<h5 class="card-title">Add Lens</h5>
					{/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
					<div className="row mb-4">
						<div className="col">
							<div className="form-outline">
								<input type="text" id="form6Example2" className="form-control" />
								<label className="form-label" for="form6Example2">
									Brand
								</label>
							</div>
						</div>
					</div>

					{/* <!-- Text input --> */}
					<div className="form-outline mb-4">
						<input type="text" id="form6Example3" className="form-control" />
						<label className="form-label" for="form6Example3">
							Price	
						</label>
					</div>

					{/* <!-- Text input --> */}
					<div className="form-outline mb-4">
						<input type="number" id="form6Example4" className="form-control" />
						<label className="form-label" for="form6Example4">
							Image
						</label>
					</div>

					{/* <!-- Email input --> */}
					<div className="form-outline mb-4">
						<input type="text" id="form6Example5" className="form-control" />
						<label className="form-label" for="form6Example5">
							Shape
						</label>
					</div>

					{/* <!-- Number input --> */}
					<div className="form-outline mb-4">
						<input type="text" id="form6Example6" className="form-control" />
						<label className="form-label" for="form6Example6">
							Color
						</label>
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

export default AddLens;
