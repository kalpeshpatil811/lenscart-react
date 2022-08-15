import React, { useState, useEffect } from "react";
import { Container, CardGroup } from "react-bootstrap";
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
			<Container className="p-4">
				<CardGroup>
					{lenses.map((lens) => (
						<Lens key={lens.id} lens={lens} />
					))}
				</CardGroup>
			</Container>
		</>
	);
};

export default ShowAllLenses;
