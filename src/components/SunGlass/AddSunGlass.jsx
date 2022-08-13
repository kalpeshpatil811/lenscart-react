import React, { useState } from "react";

const AddSunGlass = () => {
	return (
		<div align="center">
			<div className="card" style={{ width: "50rem" }}>
				<form className="card-body">
					<h5 class="card-title">Add Sunglass</h5>
					{/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
					<div className="row mb-4">
						<div className="col">
							<div className="form-outline">
								<label className="form-label" for="form6Example1">
									SunGlass name
								</label>
								<input type="text" id="form6Example1" className="form-control" />
							</div>
						</div>
						<div className="col">
							<div className="form-outline">
								<input type="text" id="form6Example2" className="form-control" />
								<label className="form-label" for="form6Example2">
									Brand name
								</label>
							</div>
						</div>
					</div>

					{/* <!-- Text input --> */}
					<div className="form-outline mb-4">
						<input type="text" id="form6Example3" className="form-control" />
						<label className="form-label" for="form6Example3">
							Company name
						</label>
					</div>

					{/* <!-- Text input --> */}
					<div className="form-outline mb-4">
						<input type="text" id="form6Example4" className="form-control" />
						<label className="form-label" for="form6Example4">
							Address
						</label>
					</div>

					{/* <!-- Email input --> */}
					<div className="form-outline mb-4">
						<input type="email" id="form6Example5" className="form-control" />
						<label className="form-label" for="form6Example5">
							Email
						</label>
					</div>

					{/* <!-- Number input --> */}
					<div className="form-outline mb-4">
						<input type="number" id="form6Example6" className="form-control" />
						<label className="form-label" for="form6Example6">
							Phone
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

export default AddSunGlass;
