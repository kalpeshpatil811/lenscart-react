import React, { useState, useEffect } from "react";
import FrameService from "../../services/FrameService";
import Frames from "./Frames";
import { Container } from "react-bootstrap";

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
				{frames.map((frame) => (
					<Frames key={frame.frameId} frame={frame} />
				))}
			</Container>
		</>
	);
};

export default ShowAllFrames;