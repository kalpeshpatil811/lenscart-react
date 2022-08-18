import React, { useState, useEffect } from "react";
import GlassAdmin from "./GlassAdmin";
import { Button, Container } from "react-bootstrap";
import GlassService from "../../services/GlassService";

const ShowAllGlassAdmin = () => {
	const [glass, setGlass] = useState([]);

	useEffect(() => {
		GlassService.getAllGlass().then((res) => {
			setGlass(res.data);
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
					minHeight: "85vh",
				}}
			>
				<Button style={{ margin: "5px", width: "60%" }} variant="outline-success" href="/addglass">
					Add Glass
				</Button>
				<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
					{glass.map((glass) => (
						<GlassAdmin key={glass.glassId} glass={glass} setGlass={setGlass} />
					))}
				</Container>
			</Container>
		</>
	);
};

export default ShowAllGlassAdmin;
