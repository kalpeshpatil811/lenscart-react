import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../../services/CustomerService";
import { getCustomerInfo, removeCustomerInfo } from "./CustomerInfo";

const Logout=()=>{
    const navigate = useNavigate();


    const handleLogout =  () =>{

        removeCustomerInfo();
            navigate("/login");

        };


    return(
        <div>
        <button type="submit" variant="contained" color="primary" onClick={handleLogout}>
              Logout
        </button>
        </div>
    )

}
export default Logout;