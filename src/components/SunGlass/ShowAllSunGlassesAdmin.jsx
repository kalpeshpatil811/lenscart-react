import React, { useState, useEffect } from "react";
import SunGlassService from "../../services/SunGlassService";
import SunGlassAdmin from "./SunGlassAdmin";
import { Button, Container } from "react-bootstrap";

const ShowAllSunGlassesAdmin = () => {
	const [sunGlasses, setSunGlasses] = useState([]);

	useEffect(() => {
		SunGlassService.getAllSunGlasses().then((res) => {
			setSunGlasses(res.data);
		});
	}, []);

	return (
		<>
			<Container
				style={{
					display: "flex",
					flexDirection: "column",
					padding: "10px",
					alignItems: "center",
				}}
			>
				<Button
					style={{ margin: "5px", width: "60%" }}
					variant="outline-success"
					href="/addsunglass"
				>
					Add Sun Glass
				</Button>
				<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
					{sunGlasses.map((sunGlass) => (
						<SunGlassAdmin
							key={sunGlass.sunGlassId}
							sunGlass={sunGlass}
							setSunGlasses={setSunGlasses}
						/>
					))}
				</Container>
			</Container>
		</>
	);
};

export default ShowAllSunGlassesAdmin;
