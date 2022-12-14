import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CustomerService from "../../services/CustomerService";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";

const UpdateCustomer = () => {
	const navigate = useNavigate();
	const { customerId } = useParams();

	const [customerName, setCustomerName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [customerNameError, setCustomerNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [numberError, setNumberError] = useState("");

	useEffect(() => {
		CustomerService.getCustomerById(customerId).then((resp) => {
			let customer = resp.data;
			setCustomerName(customer.customerName);
			setEmail(customer.email);
			setNumber(customer.number);
			setAddress(customer.address);
			setPassword(customer.password);
		});
	}, [customerId]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newCustomer = {
			customerId: customerId,
			customerName: customerName,
			email: email,
			number: number,
			password: password,
			address: address,
		};
		console.log(newCustomer);

		CustomerService.updateCustomer(newCustomer)
			.then((res) => {
				console.log(res);
				console.log("customer Updated successfully");
				navigate(`/profile/${customerId}`);
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
		navigate("/profile");
	};

	return (
		<div style={{ display: "flex", justifyContent: "center", minHeight: "85vh" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<FloatingLabel controlId="customerId" label="Customer ID" className="mb-3">
						<Form.Control type="text" placeholder="Enter Customer ID" disabled value={customerId} />
					</FloatingLabel>

					<FloatingLabel controlId="customerName" label="Customer Name" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter customer Name"
							required
							value={customerName}
							onChange={(e) => setCustomerName(e.target.value)}
						/>
					</FloatingLabel>
					<Card.Text style={{ color: "red" }}>{customerNameError}</Card.Text>
					<FloatingLabel controlId="email" label="Email Address" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Email Address"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FloatingLabel>
					<Card.Text style={{ color: "red" }}>{emailError}</Card.Text>

					<FloatingLabel controlId="number" label="Mobile No" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Mobile No"
							required
							value={number}
							onChange={(e) => setNumber(e.target.value)}
						/>
					</FloatingLabel>
					<Card.Text style={{ color: "red" }}>{numberError}</Card.Text>

					<FloatingLabel controlId="password" label="Password" className="mb-3">
						<Form.Control
							type="text"
							placeholder="Enter Password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FloatingLabel>
					<Card.Text style={{ color: "red" }}>{passwordError}</Card.Text>

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
	);
};
export default UpdateCustomer;
