import React, { useState, useEffect } from "react";
import FrameService from "../../services/FrameService";
import Frames from "./Frames";
import { Container, CardGroup } from "react-bootstrap";

const ShowAllFrames = () => {
	const [frames, setFrames] = useState([]);

	useEffect(() => {
		FrameService.getAllFrames().then((res) => {
			setFrames(res.data);
		});
	}, []);

	return (
		<>
			<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
				<CardGroup>
					{frames.map((frame) => (
						<Frames key={frame.frameId} frame={frame} />
					))}
				</CardGroup>
			</Container>
		</>
	);
};

export default ShowAllFrames;
