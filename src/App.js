import "./App.css";
import AddSunGlass from "./components/SunGlass/AddSunGlass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddLens from "./components/Lens/AddLens";
import ShowAllSunGlasses from "./components/SunGlass/ShowAllSunGlasses";
import UpdateLens from "./components/Lens/UpdateLens";

import ShowAllLenses from "./components/Lens/ShowAllLenses"
import DeleteLens from "./components/Lens/deleteLens";
function App() {
	return (
		<div className="App">
		<Router>
			{/* <h1 align="center">LensCart React App</h1> */}
			{/* <ShowAllLenses />  */}
				<Routes>
					<Route path="/addsunglass" element={<AddSunGlass />} />
					<Route path="/showallsunglasses" element={<ShowAllSunGlasses />} />
					<Route path="/addlens" element={<AddLens />} />
					<Route path="/showalllenses" element={<ShowAllLenses /> } />
					<Route path="/updatelens/:lensId" element={<UpdateLens /> } />
					<Route path="/deletelens/:lensId" element={<DeleteLens /> } />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
