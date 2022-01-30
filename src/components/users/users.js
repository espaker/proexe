import React, { useCallback, useEffect, useState } from 'react';
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
import UsersModal from './usersmodal'
import DeleteModal from './deletemodal'

import './users.css'

function Users({dispatch}) {
    const [userModalType, setUserModalType] = useState('Add')
    const [userModalShow, setUserModalShow] = useState(false)
    const [deleteModalShow, setDeleteModalShow] = useState(false)
    const [userId, setUserId] = useState(false)
    const [userFullName, setUserFullName] = useState('')

    const handleUserModalOpen = useCallback((title, id) => {
        setUserModalType(title)
        setUserId(id)
        setUserModalShow(true)
    }, [])
    
    const handleUserModalClose = useCallback(() => {
        setUserModalType('Add')
        setUserId(false)
        setUserModalShow(false)
    }, [])

    const handleDeleteModalOpen = useCallback((name, id) => {
        setUserId(id)
        setUserFullName(name)
        setDeleteModalShow(true)
    }, [])
    
    const handleDeleteModalClose = useCallback(() => {
        setUserFullName('')
        setUserId(false)
        setDeleteModalShow(false)
    }, [])
    
    useEffect(() => update_rows(dispatch))

    return (
        <>
            <UsersModal title={userModalType} userId={userId} show={userModalShow} close={handleUserModalClose}/>
            <DeleteModal userId={userId} name={userFullName} show={deleteModalShow} close={handleDeleteModalClose}/>
            <MDBCard className='users_card h-100'>
                <MDBCardHeader className='users_cardtitle'>
                    <MDBRow>
                        <MDBCol>
                            <MDBCardTitle>
                                <strong>User List</strong>    
                            </MDBCardTitle>
                        </MDBCol>
                        <MDBCol className="offset-md-9">
                            <MDBBtn onClick={() => handleUserModalOpen('Add', false)}>
                                <MDBIcon icon="plus" />
                                <span> Add user</span>
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardHeader>
                <MDBCardBody className='users_card_body'>
                    <UsersTable userModal={handleUserModalOpen} deleteModal={handleDeleteModalOpen}/>
                </MDBCardBody>
            </MDBCard>
        </>
    )
}

export default connect()(Users);