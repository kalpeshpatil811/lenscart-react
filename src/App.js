import React from "react";
import "./App.css";
import AddSunGlass from "./components/SunGlass/AddSunGlass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddLens from "./components/Lens/AddLens";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import UpdateSunGlass from "./components/SunGlass/UpdateSunGlass";
import ShowAllSunGlassesAdmin from "./components/SunGlass/ShowAllSunGlassesAdmin";
import ShowAllGlass from "./components/Glass/ShowAllGlass";
import AddGlass from "./components/Glass/AddGlass";
import UpdateGlass from "./components/Glass/UpdateGlass";
import UpdateLens from "./components/Lens/UpdateLens";

import ShowAllLenses from "./components/Lens/ShowAllLenses"
import ShowAllLensesAdmin from "./components/Lens/ShowAllLensesAdmin";
function App() {
	return (
		<div className="App">
		<Router>
				<NavbarComponent />
			{/* <h1 align="center">LensCart React App</h1> */}
			{/* <ShowAllLenses />  */}
				<Routes>
					<Route path="/addsunglass" element={<AddSunGlass />} />
					<Route path="/showallsunglasses" element={<ShowAllSunGlasses />} />
					<Route path="/updatesunglass/:sunGlassId" element={<UpdateSunGlass />} />
					<Route path="/showallsunglassesadmin" element={<ShowAllSunGlassesAdmin />} />
					
					<Route path="/showallglasses" element={<ShowAllGlass />} />
					<Route path="/addglass" element={<AddGlass />} />
					<Route path="/updateglass/:glassId" element={<UpdateGlass /> } />
					
					<Route path="/addlens" element={<AddLens />} />
					<Route path="/showalllenses" element={<ShowAllLenses /> } />
					<Route path="/updatelens/:lensId" element={<UpdateLens /> } />
					<Route path="/showalllensesadmin" element={<ShowAllLensesAdmin />} />

				</Routes>
			</Router>
		</div>
	);
}

export default App;
