import React from "react";

import { MDBNavbar } from "mdbreact";

function Header() {
    return (
        <MDBNavbar className="header" color="elegant-color" dark flex> 
            <h2 className="white-text">
                <strong>Dashboard</strong>
            </h2>
        </MDBNavbar>
    )
}


export default Header;