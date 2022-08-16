import React from "react";
import "./App.css";
import AddCustomer from "./components/Customer/AddCustomer";
import Login from "./components/Customer/Login";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetCustomerById from "./components/Customer/GetCustomerById";
import UpdateCustomer from "./components/Customer/UpdateCustomer";


function App() {
	return (
		<div className="App">
			<h1 align="center">LensCart React App</h1>
			<Router>
			<NavbarComponent />

				<Routes>

					<Route path="/addcustomer" element={<AddCustomer />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<GetCustomerById/>}/>
					<Route path="/updateCustomer/:customerId" element={<UpdateCustomer/>}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
