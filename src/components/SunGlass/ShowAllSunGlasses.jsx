import React, { useState, useEffect } from "react";
import SunGlassService from "../../services/SunGlassService";
import SunGlass from "./SunGlass";
import { Container, CardGroup } from "react-bootstrap";

const ShowAllSunGlasses = () => {
	const [sunGlasses, setSunGlasses] = useState([]);

	useEffect(() => {
		SunGlassService.getAllSunGlasses().then((res) => {
			setSunGlasses(res.data);
		});
	}, []);

	return (
		<>
			<Container className="p-4">
				<CardGroup>
					{sunGlasses.map((sunGlass) => (
						<SunGlass key={sunGlass.id} sunGlass={sunGlass} />
					))}
				</CardGroup>
			</Container>
		</>
	);
};

export default ShowAllSunGlasses;
