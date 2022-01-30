import React, { useCallback, memo } from 'react';
import { NotificationManager } from 'react-notifications';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import api from '../../services/api'

const DeleteModal = ({show, close, userId, name}) => {

    

    const removeUser = useCallback(() => {
        api.delete(`proexe-users/${userId}`)
        .then(({status}) => {
            if (status === 200) {
                NotificationManager.success("User Deleted successful")
            } else {
                NotificationManager.error("Error to delete new user")
            }
        })
        .catch(e => NotificationManager.error("Error to delete new user"))
        .finally(close)
    }, [close, userId])

    return (
        <MDBModal isOpen={show} toggle={close}>
            <MDBModalHeader toggle={close}><h2>Delete user</h2></MDBModalHeader>
            <MDBModalBody>Delete user {name}?</MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" onClick={close}>Cancel</MDBBtn>
            <MDBBtn color="primary" onClick={removeUser}>Delete</MDBBtn>
            </MDBModalFooter>
      </MDBModal>
    );
};

export default memo(DeleteModal);