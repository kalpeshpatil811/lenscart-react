import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Lens from "./Lens";
import LensService from "../../services/LensService";

const ShowAllLenses = () => {
	const [lenses, setLenses] = useState([]);

	useEffect(() => {
		LensService.getAllLenses().then((res) => {
			setLenses(res.data);
		});
	}, []);

	return (
		<>
			<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
				{lenses.map((lens) => (
					<Lens key={lens.lensId} lens={lens} />
				))}
			</Container>
		</>
	);
};

export default ShowAllLenses;
