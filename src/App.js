import "./App.css";
import AddCustomer from "./components/Customer/AddCustomer";
import Login from "./components/Customer/Login";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetCustomerById from "./components/Customer/GetCustomerById";
import UpdateCustomer from "./components/Customer/UpdateCustomer";

import ShowAllGlass from "./components/Glass/ShowAllGlass";
import AddGlass from "./components/Glass/AddGlass";
import UpdateGlass from "./components/Glass/UpdateGlass";
import ShowAllFrames from "./components/Frame/ShowAllFrames";
import AddFrame from "./components/Frame/AddFrame";
import UpdateFrames from "./components/Frame/UpdateFrames";
import UpdateSunGlass from "./components/SunGlass/UpdateSunGlass";
import ShowAllSunGlassesAdmin from "./components/SunGlass/ShowAllSunGlassesAdmin";
import ShowAllFramesAdmin from "./components/Frame/ShowAllFramesAdmin";

function App() {
	return (
		<div className="App">
			<h1 align="center">LensCart React App</h1>
			<Router>
				<NavbarComponent />

				<Routes>
					<Route path="/addcustomer" element={<AddCustomer />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<GetCustomerById />} />
					<Route path="/updateCustomer/:customerId" element={<UpdateCustomer />} />
					<Route path="/addnewframe" element={<AddFrame />} />
					<Route path="/showallframes" element={<ShowAllFrames />} />
					<Route path="/updateframe/:frameId" element={<UpdateFrames />} />
					<Route path="/showallglasses" element={<ShowAllGlass />} />
					<Route path="/addglass" element={<AddGlass />} />
					<Route path="/updateglass/:glassId" element={<UpdateGlass />} />
					<Route path="/updatesunglass/:sunGlassId" element={<UpdateSunGlass />} />
					<Route path="/showallsunglassesadmin" element={<ShowAllSunGlassesAdmin />} />
					<Route path="/showallframesadmin" element={<ShowAllFramesAdmin />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
