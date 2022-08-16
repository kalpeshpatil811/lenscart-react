import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Cart, PersonFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { getCustomerInfo, removeCustomerInfo } from "../Customer/CustomerInfo";

function NavbarComponent() {
	const navigate = useNavigate();

    let isLoggedIn=false;
	if(getCustomerInfo()!=null){
		isLoggedIn=true;
	}

	const handleLogout = () => {

		removeCustomerInfo();
		navigate("/login");

	};



	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand onClick={() => navigate("/")}>LensCart</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				{isLoggedIn &&
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link onClick={() => navigate("/showallframes")}>Frames</Nav.Link>
						<Nav.Link onClick={() => navigate("/showallglasses")}>Glasses</Nav.Link>
						<Nav.Link onClick={() => navigate("/showallsunglasses")}>Sun Glasses</Nav.Link>
						<Nav.Link onClick={() => navigate("/showalllenses")}>Contact Lenses</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link onClick={() => navigate("/cart")}>
							<Button variant="outline-primary">
								<Cart size={20} />
								Cart
							</Button>
						</Nav.Link>
						<NavDropdown title={<PersonFill size={20} />} id="collasible-nav-dropdown">
							<NavDropdown.Item disabled>Welcome User,</NavDropdown.Item>
							<NavDropdown.Item onClick={() => navigate("/profile")}>Profile</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>

						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				}
			</Container>
		</Navbar>
	);
}

export default NavbarComponent;