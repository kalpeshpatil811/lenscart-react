import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { makeStyles, TextField, Button } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		display: "flex",
// 		flexDirection: "column",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		padding: theme.spacing(2),
// 		"& .MuiTextField-root": {
// 			margin: theme.spacing(1),
// 			width: "300px",
// 		},
// 		"& .MuiButtonBase-root": {
// 			margin: theme.spacing(2),
// 		},
// 	},
// 	loginpage: {
// 		height: "100vh",
// 		backgroundImage: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
// 	},
// }));

const Register = () => {
// 	const classes = useStyles();
// 	// create state variables for each input
// 	const [userName, setUserName] = useState("");
// 	const [password, setPassword] = useState("");
// 	const navigate = useNavigate();
// 	const handleClose = () => {
// 		navigate("/login");
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log(userName, password);
// 		if (userName === "Admin" && password === "Pass@123") {
// 			navigate("/");
// 		} else {
// 			alert("Wrong Username or Password");
// 			handleClose();
// 		}
// 	};

return (
    <div>
        <form>
  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" />
        <label class="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" />
        <label class="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
  </div>

  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" id="form3Example3" class="form-control" />
    <label class="form-label" for="form3Example3">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="form3Example4" class="form-control" />
    <label class="form-label" for="form3Example4">Password</label>
  </div>

  {/* <!-- Checkbox --> */}
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label class="form-check-label" for="form2Example33">
      Subscribe to our newsletter
    </label>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">
    <p>or sign up with:</p>
    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>


    </div>
);

};
export default Register;