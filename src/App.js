import "./App.css";
import AddSunGlass from "./components/SunGlass/AddSunGlass";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";

function App() {
	return (
		<div className="App">
			<h1 align="center">LensCart React App</h1>
			{/* <AddSunGlass /> */}
			<ShowAllSunGlasses />
		</div>
	);
}

export default App;
