import { React, useState } from "react";
import CustomerService from "../../services/CustomerService";
import { useNavigate } from "react-router-dom";
import { setCustomerInfo } from "./CustomerInfo";

const initialData = { customerName: "", password: "" };

const Login = ({ setIsLoggedIn }) => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState(initialData);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle login
	const handleLogin = async (e) => {
		e.preventDefault();

		// Send login request to server
		CustomerService.login(formData)
			.then((res) => {
				setCustomerInfo({ ...res.data, customerId: res.data.customerId });

				if (res.data.role === "customer") {
					setIsLoggedIn(true);
					alert(" Customer Login Successfully");
					navigate("/home");
				}
				if (res.data.role === "admin") {
					setIsLoggedIn(true);
					alert("Admin Login Successfully");
					navigate("/home");
				}
			})
			.catch((error) => {
				alert("Invalid Username or Password");
			});
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card border-0 shadow rounded-3 my-5">
						<div className="card-body p-4 p-sm-5">
							<h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
							<form>
								<div className="form-floating mb-3">
									<input
										type="text"
										value={formData.customerName}
										className="form-control"
										id="customerName"
										placeholder="jhonDoe69"
										name="customerName"
										onChange={handleChange}
										required={true}
									/>
									<label htmlFor="floatingInput">User Name</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="password"
										value={formData.password}
										className="form-control"
										id="password"
										name="password"
										placeholder="Password"
										onChange={handleChange}
										required={true}
									/>
									<label htmlFor="floatingPassword">Password</label>
								</div>

								<div className="d-grid">
									<button
										className="btn btn-primary btn-login text-uppercase fw-bold"
										type="submit"
										onClick={handleLogin}
									>
										Login
									</button>
								</div>
								<hr className="my-4" />
							</form>
						</div>
					</div>
					<div className="">
						<p className="text-center">
							Don't have an account? <a href="/addcustomer">Register</a>
						</p>
					</div>
				</div>
			</div>
		</div>








	);























};
export default Login;
