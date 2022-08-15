import React from "react";
import "./App.css";
import AddSunGlass from "./components/SunGlass/AddSunGlass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import UpdateSunGlass from "./components/SunGlass/UpdateSunGlass";
import ShowAllSunGlassesAdmin from "./components/SunGlass/ShowAllSunGlassesAdmin";

function App() {
	return (
		<div className="App">
			<Router>
				<NavbarComponent />
				<Routes>
					<Route path="/addsunglass" element={<AddSunGlass />} />
					<Route path="/showallsunglasses" element={<ShowAllSunGlasses />} />
					<Route path="/updatesunglass/:sunGlassId" element={<UpdateSunGlass />} />
					<Route path="/showallsunglassesadmin" element={<ShowAllSunGlassesAdmin />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
