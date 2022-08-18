import React, { useEffect, useState } from "react";
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
import { getCustomerInfo } from "./components/Customer/CustomerInfo";
import Home from "./components/Home/Home";
import ShowAllCartItems from "./components/Cart/ShowAllCartItems";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [role, setRole] = useState("");

	useEffect(() => {
		if (getCustomerInfo() != null) {
			setIsLoggedIn(true);
			setRole(getCustomerInfo().role);
		}
	}, [isLoggedIn, role]);

	return (
		<div className="App">
			<Router>
				<NavbarComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} role={role} />
				<Routes>
					{isLoggedIn ? (
						<>
							<Route exact path="/home" element={<Home />} />
							<Route
								exact
								path="/profile"
								element={<GetCustomerById setIsLoggedIn={setIsLoggedIn} />}
							/>
							<Route exact path="/updateCustomer/:customerId" element={<UpdateCustomer />} />

							{role === "customer" ? (
								<>
									<Route exact path="/showallframes" element={<ShowAllFrames />} />
									<Route exact path="/showallglasses" element={<ShowAllGlass />} />
									<Route exact path="/showallsunglasses" element={<ShowAllSunGlasses />} />
									<Route exact path="/showalllenses" element={<ShowAllLenses />} />
									<Route path="/cart" element={<ShowAllCartItems />} />
								</>
							) : undefined}

							{role === "admin" ? (
								<>
									<Route exact path="/addnewframe" element={<AddFrame />} />
									<Route exact path="/updateframe/:frameId" element={<UpdateFrames />} />
									<Route exact path="/showallframesadmin" element={<ShowAllFramesAdmin />} />
									<Route exact path="/addglass" element={<AddGlass />} />
									<Route exact path="/updateglass/:glassId" element={<UpdateGlass />} />
									<Route exact path="/showallglassesadmin" element={<ShowAllGlassAdmin />} />
									<Route exact path="/addsunglass" element={<AddSunGlass />} />
									<Route exact path="/updatesunglass/:sunGlassId" element={<UpdateSunGlass />} />
									<Route exact path="/showallsunglassesadmin" element={<ShowAllSunGlassesAdmin />} />
									<Route exact path="/addlens" element={<AddLens />} />
									<Route exact path="/updatelens/:lensId" element={<UpdateLens />} />
									<Route exact path="/showalllensesadmin" element={<ShowAllLensesAdmin />} />
								</>
							) : undefined}
						</>
					) : (
						<>
							<Route exact path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
							<Route exact path="/addcustomer" element={<AddCustomer />} />
						</>
					)}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
