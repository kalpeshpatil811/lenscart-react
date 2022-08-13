import "./App.css";
import AddSunGlass from "./components/SunGlass/AddSunGlass";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddLens from "./components/Lens/AddLens";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";

import ShowAllLenses from "./components/Lens/ShowAllLenses"
function App() {
	return (
		<div className="App">
			<h1 align="center">LensCart React App</h1>
			{/* <AddSunGlass /> */}
			<ShowAllSunGlasses />
			{/* <AddLens /> */}
			{/* <ShowAllLenses /> */}
		</div>
	);
}

export default App;
