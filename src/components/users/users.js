import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { 
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardHeader, 
    MDBCol, 
    MDBRow, 
    MDBBtn, 
    MDBIcon 
} from "mdbreact";

import update_rows from '../../store/actions'

import UsersTable from './userstable'

import './users.css'

function Users({dispatch}) {
    
    useEffect(() => update_rows(dispatch))

    return (
        <MDBCard className='users_card h-100'>
            <MDBCardHeader className='users_cardtitle'>
                <MDBRow>
                    <MDBCol>
                        <MDBCardTitle>
                            <strong>User List</strong>    
                        </MDBCardTitle>
                    </MDBCol>
                    <MDBCol className="offset-md-9">
                        <MDBBtn>
                            <MDBIcon icon="plus" />
                            <span> Add user</span>
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardHeader>
            <MDBCardBody className='users_card_body'>
                <UsersTable/>
            </MDBCardBody>
        </MDBCard>
    )
}

export default connect()(Users);