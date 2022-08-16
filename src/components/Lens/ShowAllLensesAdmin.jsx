import React, { useState, useEffect } from "react";
import LensService from "../../services/LensService";
import LensAdmin from "./LensAdmin";
import { Button, Container } from "react-bootstrap";

const ShowAllLensesAdmin = () => {
	const [lens, setLens] = useState([]);

	useEffect(() => {
		LensService.getAllLenses().then((res) => {
			setLens(res.data);
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
				<Button style={{ margin: "5px", width: "60%" }} variant="outline-success" href="/addlens">
					Add Lens
				</Button>
				<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
					{lens.map((lens) => (
						<LensAdmin key={lens.lensId} lens={lens} setLens={setLens} />
					))}
				</Container>
			</Container>
		</>
	);
};
export default ShowAllLensesAdmin;
