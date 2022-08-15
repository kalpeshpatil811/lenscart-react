import React from "react";
import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSunGlass from "./components/SunGlass/AddSunGlass";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import ShowAllGlass from "./components/Glass/ShowAllGlass";
import AddGlass from "./components/Glass/AddGlass";
import UpdateGlass from "./components/Glass/UpdateGlass";
import ShowAllFrames from "./components/Frame/ShowAllFrames";
import AddFrame from "./components/Frame/AddFrame";
import UpdateFrames from "./components/Frame/UpdateFrames";

function App() {
	return (
		<div className="App">
			<Router>
				<NavbarComponent />
				<Routes>
					<Route path="/addsunglass" element={<AddSunGlass />} />
					<Route path="/showallsunglasses" element={<ShowAllSunGlasses />} />
					<Route path="/addnewframe" element={<AddFrame/>}/>
					<Route path="/showallframes" element={<ShowAllFrames />}/>
					<Route path="/updateframes/:frameId" element={<UpdateFrames/>}/>
					<Route path="/showallglasses" element={<ShowAllGlass />} />
					<Route path="/addglass" element={<AddGlass />} />
					<Route path="/updateglass/:glassId" element={<UpdateGlass /> } />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
