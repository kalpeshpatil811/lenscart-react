import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import CartService from "../../services/CartService";

function Cart({ cart, setCart }) {

    const handleDelete = () => {
        console.log(cart.itemId)
        CartService.removeFromCart(cart.itemId).then((res) => {
            let updatedCart = res.data;
            setCart(updatedCart);
            alert("Cart Item Deleted Successfully");
            console.log(updatedCart);
        }).catch((err) => {
            console.log(err);
            alert("Error in Deleting Cart Item");
        });
    }
    return (

        <Card
            style={{
                width: "400px",
                margin: "10px",
                alignItems: "center",
                boxShadow: "0px 0px 10px 1px ",
                padding: "10px",
            }}
        >
            <Card.Img height={200} variant="top" src={cart.image} alt={cart.name} />
            <Card.Body>
                <Card.Title>{cart.name}</Card.Title>
                <Card.Text>
                    <b>Brand: </b>
                    {cart.brand}
                </Card.Text>
                <Card.Text>
                    <b>Price: </b>
                    ₹{cart.price}
                </Card.Text>
            </Card.Body>
            <Button variant="danger" style={{ width: "80%" }} onClick={handleDelete}>
                Delete
            </Button>
        </Card>
    );
}

export default Cart;
