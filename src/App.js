import "./App.css";
import AddSunGlass from "./components/SunGlass/AddSunGlass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";
import ShowAllGlass from "./components/Glass/ShowAllGlass";
import AddGlass from "./components/Glass/AddGlass";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/addsunglass" element={<AddSunGlass />} />
					<Route path="/showallsunglasses" element={<ShowAllSunGlasses />} />
					<Route path="/showallglass" element={<ShowAllGlass />} />
					<Route path="/addglass" element={<AddGlass />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
