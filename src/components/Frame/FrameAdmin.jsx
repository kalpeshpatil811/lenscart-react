import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FrameService from "../../services/FrameService";

function FrameAdmin({frame, setFrames}) {
    const navigate = useNavigate();

const handleDelete = () => {
    FrameService.deleteFrame(frame.frameId)
        .then((res) => {
            let updatedFrames = res.data;
            alert("Frame Deleted Successfully");
            setFrames(updatedFrames);
        })
        .catch((err) => {
            alert("Error in deleting frame");
        });
};

const handleUpdate = () => {
    navigate(`/updateframe/${frame.frameId}`);
};

return (
    <Card style={{
        width: "18rem",
        margin: "10px",
        alignItems: "center",
        boxShadow: "0px 0px 10px 1px ",
        padding: "10px",
    }}>
        <Card.Img height={200} variant="top" src={frame.frameImage} alt={frame.frameName} />
        <Card.Body>
            <Card.Title>{frame.frameName}</Card.Title>
            <Card.Text><b>Brand: </b> {frame.brand}</Card.Text>
            <Card.Text><b>Color :</b> {frame.color}</Card.Text>
            <Card.Text><b>Price : </b> {frame.price}</Card.Text>
            <Card.Text><b>Description : </b>{frame.description}</Card.Text>
            <Card.Text><b>Shape: </b> {frame.shapeOptions}</Card.Text>
            <Card.Text><b>Size :</b> {frame.size}</Card.Text>
        </Card.Body>
        <Button variant="warning" style={{ width: "80%", margin: "5px" }} onClick={handleUpdate}>
				Update
			</Button>
			<Button variant="danger" style={{ width: "80%", margin: "5px" }} onClick={handleDelete}>
				Delete
			</Button>
    </Card>
);
};

export default FrameAdmin;