import React from "react";
import { getCustomerInfo } from "../Customer/CustomerInfo";

const Home = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				minHeight: "85vh",
				backgroundImage: "url(https://wallpaperaccess.com/full/4433202.jpg)",
				backgroundSize: "cover",
			}}
		>
			<h1 style={{ color: "black", marginTop: "20vh", fontSize: "50px", fontWeight: "bold" }}>
				Welcome, {getCustomerInfo().customerName}!
			</h1>
		</div>
	);
};

export default Home;
