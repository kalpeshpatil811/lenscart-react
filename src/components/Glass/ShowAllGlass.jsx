import React, { useState, useEffect } from "react";
import GlassService from "../../services/GlassService";
import Glass from "./Glass";
import { Container, CardGroup } from "react-bootstrap";

const ShowAllGlass = () => {
	const [glass, setGlass] = useState([]);

	useEffect(() => {
		GlassService.getAllGlass().then((res) => {
			setGlass(res.data);
		});
	}, []);

	return (
		<>
			<Container className="p-4">
				<CardGroup>
					{glass.map((glass) => (
						<Glass key={glass.glassId} glass={glass} />
					))}
				</CardGroup>
			</Container>
		</>
	);
};

export default ShowAllGlass;
