import React, { useState, useEffect } from "react";
import GlassService from "../../services/GlassService";
import Glass from "./Glass";
import { Container } from "react-bootstrap";

const ShowAllGlass = () => {
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
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					minHeight: "85vh",
				}}
			>
				{glass.map((glass) => (
					<Glass key={glass.glassId} glass={glass} />
				))}
			</Container>
		</>
	);
};

export default ShowAllGlass;
