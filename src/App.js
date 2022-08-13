import "./App.css";
import AddCustomer from "./components/Customer/AddCustomer";
import Login from "./components/Customer/Login";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
	return (
		<div className="App">
			<h1 align="center">LensCart React App</h1>
			<Router>
				<Routes>

					<Route path="/addcustomer" element={<AddCustomer />} />
					<Route path="/login" element={<Login />} />

				</Routes>
			</Router>
		</div>
	);
}

export default App;
