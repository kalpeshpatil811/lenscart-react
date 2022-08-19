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
		<div
			style={{
				backgroundColor: "#8EC5FC",
				backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					minHeight: "85vh",
					fontSize: "18px",
					fontWeight: "bold",
				}}
			>
				<Card
					style={{
						width: "30rem",
						padding: "40px",
						margin: "30px",
						backgroundColor: "#FFDEE9",
						backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
					}}
				>
					<Form onSubmit={(e) => handleSubmit(e)}>
						<Card.Body>
							<Card.Title>
								<h2>Profile Details</h2>
							</Card.Title>
							<hr />
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
		</div>
	);
}
export default GetCustomerById;
