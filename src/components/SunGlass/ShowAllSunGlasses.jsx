import React, { useState, useEffect } from "react";
import SunGlassService from "../../services/SunGlassService";
import SunGlass from "./SunGlass";
import { Container } from "react-bootstrap";

const ShowAllSunGlasses = () => {
	const [sunGlasses, setSunGlasses] = useState([]);

	useEffect(() => {
		SunGlassService.getAllSunGlasses().then((res) => {
			setSunGlasses(res.data);
		});
	}, []);

	return (
		<>
			<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
				{sunGlasses.map((sunGlass) => (
					<SunGlass key={sunGlass.sunGlassId} sunGlass={sunGlass} />
				))}
			</Container>
		</>
	);
};

export default ShowAllSunGlasses;
