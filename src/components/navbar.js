import React from "react";
import Carbon from "../image/carbon.png"
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import "../App.css"
function Navbar() {
  return (
    <div className="navbar-wrapper">
     <div className="container-xxl px-4">
            <div className="row justify-content-between">
                <Link to="/" className="col-2 d-flex">
                    <div className="border-end border-light my-2">
                        <img src={Carbon} className="" width="55px" height="65px" alt="" />
                    </div>
                    <div className="ms-3 mt-2">
                        <h4 className="mb-0 text-light">Footprint</h4>
                        <h4 className=" text-light">Calculator</h4>
                    </div>
                </Link>
                <div className="col-4">
                <div className="d-flex justify-content-end my-4">
                            <Link><h5 className="text-light fw-normal fs-5 me-3">About</h5></Link>
                            <Link to="/login"><h5 className="text-light fw-normal me-3">Login</h5></Link>
                            <Link to="/signup"><h5 className="text-light fw-normal me-3">Sign up</h5></Link>
                    </div>
                    <div >
    
                    </div>
                </div>
            </div>
     </div>
    </div>
  );
}

export default Navbar;
