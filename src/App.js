import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSunGlass from "./components/SunGlass/AddSunGlass";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";
import ShowAllFrames from "./components/Frame/ShowAllFrames";
import AddFrame from "./components/Frame/AddFrame";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/addsunglass" element={<AddSunGlass />} />
					<Route path="/showallsunglasses" element={<ShowAllSunGlasses />} />
					<Route path="/addnewframe" element={<AddFrame/>}/>
					<Route path="/showallframes" element={<ShowAllFrames />}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
