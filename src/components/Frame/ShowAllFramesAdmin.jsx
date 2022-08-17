import React, { useState, useEffect } from "react";
import FrameService from "../../services/FrameService"
import FrameAdmin from "./FrameAdmin"
import { Button, Container } from "react-bootstrap";

const ShowAllFramesAdmin = () => {
	const [frames, setFrames] = useState([]);

	useEffect(() => {
		FrameService.getAllFrames().then((res) => {
			setFrames(res.data);
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
					href="/addnewframe"
				>
					Add Frame
				</Button>
				<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
					{frames.map((frame) => (
						<FrameAdmin
							key={frame.frameId}
							frame={frame}
							setFrames={setFrames}
						/>
					))}
				</Container>
			</Container>
		</>
	);
};
export default ShowAllFramesAdmin;