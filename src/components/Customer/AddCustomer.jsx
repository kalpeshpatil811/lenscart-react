import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import CustomerService from "../../services/CustomerService";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";

const AddCustomer = () => {
	const navigate = useNavigate();

	const [customerName, setCustomerName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [customerNameError, setCustomerNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [numberError, setNumberError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newCustomer = {
			customerName: customerName,
			email: email,
			number: number,
			password: password,
			address: address,
		};
		console.log(newCustomer);

		CustomerService.addCustomer(newCustomer)
			.then((res) => {
				console.log(res);
				console.log("customer added successfully");
				navigate("/login");
			})
			.catch((err) => {
				console.log(err.response.data);
				setCustomerNameError(err.response.data.customerName);
				setEmailError(err.response.data.email);
				setNumberError(err.response.data.number);
				setPasswordError(err.response.data.password);

				if (err.response.status === 409) {
					alert("Customername should be unique");
				}
			});
	};
	const handleCancel = (e) => {
		e.preventDefault();
		navigate("/login");
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<FloatingLabel controlId="customerName" label="Customer Name" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter customer Name"
							required
							value={customerName}
							onChange={(e) => setCustomerName(e.target.value)}
						/>
					</FloatingLabel>
					<Card.Text style={{ color: "red", fontSize: "14px" }}>{customerNameError}</Card.Text>
					<FloatingLabel controlId="email" label="Email Address" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Email Address"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FloatingLabel>
					<Card.Text style={{ color: "red", fontSize: "14px" }}>{emailError}</Card.Text>

					<FloatingLabel controlId="number" label="Mobile No" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Mobile No"
							required
							value={number}
							onChange={(e) => setNumber(e.target.value)}
						/>
					</FloatingLabel>
					<Card.Text style={{ color: "red", fontSize: "14px" }}>{numberError}</Card.Text>

					<FloatingLabel controlId="password" label="Password" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FloatingLabel>
					<Card.Text style={{ color: "red", fontSize: "14px" }}>{passwordError}</Card.Text>

					<FloatingLabel controlId="address" label="Address" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Address"
							required
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</FloatingLabel>
					<Row>
						<Col>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Col>
						<Col>
							<Button variant="danger" onClick={handleCancel}>
								Cancel
							</Button>
						</Col>
					</Row>
				</Form>
			</Card>
		</div>

		// <div align="center">
		//   <div className="card" style={{ width: "50rem" }}>
		//     <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
		//       <h5 className="card-title">Add </h5>
		//       <hr />
		//       {/* <!-- Customer Name input --> */}
		//       <div className="form-outline mb-4">
		//         <label className="form-label" htmlFor="customerName">
		//           Customer Name
		//         </label>
		//         <input
		//           type="text"
		//           id="customerName"
		//           className="form-control"
		//           value={customerName}
		//           onChange={(e) => setCustomerName(e.target.value)}
		//         />
		//         <p style={{color:"red"}}>{customerNameError}</p>
		//       </div>

		//       {/* <!-- Email input --> */}
		//       <div className="form-outline mb-4">
		//         <label className="form-label" htmlFor="email">
		//           Email
		//         </label>
		//         <input
		//           type="text"
		//           id="email"
		//           className="form-control"
		//           value={email}
		//           onChange={(e) => setEmail(e.target.value)}
		//         />
		//         <p style={{color:"red"}}>{emailError}</p>
		//       </div>

		//       {/* <!-- Number input --> */}
		//       <div className="form-outline mb-4">
		//         <label className="form-label" htmlFor="number">
		//           Mobile Number
		//         </label>
		//         <input
		//           type="text"
		//           id="number"
		//           className="form-control"
		//           value={number}
		//           onChange={(e) => setNumber(e.target.value)}
		//         />
		//         <p style={{color:"red"}}>{numberError}</p>

		//       </div>

		//       {/* <!-- password input --> */}
		//       <div className="form-outline mb-4">
		//         <label className="form-label" htmlFor="password">
		//           Password
		//         </label>
		//         <input
		//           type="text"
		//           id="password"
		//           className="form-control"
		//           value={password}
		//           onChange={(e) => setPassword(e.target.value)}
		//         />
		//         <p style={{color:"red"}}>{passwordError}</p>

		//       </div>
		//       <div className="row mb-4">
		//         <div className="col">
		//           <div className="form-outline">
		//             <button type="submit" className="btn btn-primary btn-block mb-4">
		//               Submit
		//             </button>
		//           </div>
		//         </div>
		//         <div className="col">
		//           <div className="form-outline">
		//             <button type="submit" className="btn btn-danger btn-block mb-4">
		//               Cancel
		//             </button>
		//           </div>
		//         </div>
		//       </div>

		//     </form>
		//   </div>
		// </div>
	);
};
export default AddCustomer;
