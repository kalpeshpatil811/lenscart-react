import React from "react";
import "./App.css";
import AddCustomer from "./components/Customer/AddCustomer";
import Login from "./components/Customer/Login";
import AddLens from "./components/Lens/AddLens";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetCustomerById from "./components/Customer/GetCustomerById";
import UpdateCustomer from "./components/Customer/UpdateCustomer";
import ShowAllGlass from "./components/Glass/ShowAllGlass";
import AddSunGlass from "./components/SunGlass/AddSunGlass";
import AddGlass from "./components/Glass/AddGlass";
import UpdateGlass from "./components/Glass/UpdateGlass";
import ShowAllFrames from "./components/Frame/ShowAllFrames";
import AddFrame from "./components/Frame/AddFrame";
import UpdateFrames from "./components/Frame/UpdateFrames";
import UpdateSunGlass from "./components/SunGlass/UpdateSunGlass";
import ShowAllSunGlassesAdmin from "./components/SunGlass/ShowAllSunGlassesAdmin";
import ShowAllFramesAdmin from "./components/Frame/ShowAllFramesAdmin";
import ShowAllLenses from "./components/Lens/ShowAllLenses";
import ShowAllLensesAdmin from "./components/Lens/ShowAllLensesAdmin";
import UpdateLens from "./components/Lens/UpdateLens";
import ShowAllGlassAdmin from "./components/Glass/ShowAllGlassAdmin";
import ShowAllCartItems from "./components/Cart/ShowAllCartItems";

function App() {
	return (
		<div className="App">
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
					<Route path="/showallframesadmin" element={<ShowAllFramesAdmin />} />

					<Route path="/showallglasses" element={<ShowAllGlass />} />
					<Route path="/showallglassesadmin" element={<ShowAllGlassAdmin />} />
					<Route path="/addglass" element={<AddGlass />} />
					<Route path="/updateglass/:glassId" element={<UpdateGlass />} />

					<Route path="/addsunglass" element={<AddSunGlass />} />
					<Route path="/updatesunglass/:sunGlassId" element={<UpdateSunGlass />} />
					<Route path="/showallsunglasses" element={<ShowAllSunGlasses />} />
					<Route path="/showallsunglassesadmin" element={<ShowAllSunGlassesAdmin />} />

					<Route path="/showalllenses" element={<ShowAllLenses />} />
					<Route path="/showalllensesadmin" element={<ShowAllLensesAdmin />} />
					<Route path="/addlens" element={<AddLens />} />
					<Route path="/updatelens/:lensId" element={<UpdateLens />} />
					
					<Route path="/cart" element={<ShowAllCartItems />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
