import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../../services/CustomerService";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { getCustomerInfo, removeCustomerInfo } from "./CustomerInfo";


function GetCustomerById({ setIsLoggedIn }) {
	const [customer, setCustomer] = useState("");
	const customerId = getCustomerInfo().customerId;

	const navigate = useNavigate();

	useEffect(() => {
		CustomerService.getCustomerById(customerId).then((resp) => {
			setCustomer(resp.data);
		});
	}, [customerId]);
	const handleSubmit = () => {
		navigate(`/updateCustomer/${customerId}`);
	};
	const handleDelete = () => {
		CustomerService.deleteCustomerById(customerId).then((res) => {
			removeCustomerInfo();
			setIsLoggedIn(false);
			alert("Deleted Successfully");
			navigate("/login");
		});
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Card style={{ width: "30rem", padding: "40px", margin: "30px" }}>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<Card.Body>
						<Card.Title>Profile Details</Card.Title>
						<Card.Text>Name: {customer.customerName}</Card.Text>
						<Card.Text>Email Address: {customer.email}</Card.Text>
						<Card.Text>Password: {customer.password}</Card.Text>
						<Card.Text>Mobile No: {customer.number}</Card.Text>
						<Card.Text>Address: {customer.address}</Card.Text>
						<Row>
							<Col>
								<Button variant="primary" type="submit">
									Update
								</Button>
							</Col>
							<Col>
								<Button variant="danger" onClick={handleDelete}>
									Delete
								</Button>
							</Col>
						</Row>
					</Card.Body>
				</Form>
			</Card>
		</div>
	);
}
export default GetCustomerById;
