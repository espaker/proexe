import React, { memo, useEffect, useState }from 'react';
import { connect } from 'react-redux'
import { MDBDataTableV5, MDBTooltip, MDBBtnGroup, MDBBtn, MDBIcon } from "mdbreact";

const UsersTable = ({rows, userModal, deleteModal}) => {
    const [datatableData, setDatatableData] = useState({
        columns: [
            {
                label: 'Id',
                field: 'id'
            },
            {
                label: 'Name',
                field: 'name'
            },
            {
                label: 'Username',
                field: 'username'
            },
            {
                label: 'City',
                field: 'city'
            },
            {
                label: 'E-Mail',
                field: 'email'
            },
            {
                label: 'Actions',
                field: 'actions',
                sort: 'disabled'
            }
        ],
        rows: []
    })

    useEffect(() => {
        setDatatableData(oldData => {
            const newData = {...oldData}
            newData.rows = []
            rows.forEach(row => newData.rows.push({
                id: row.id,
                name: row.name,
                username: row.username,
                city: row.address.city,
                email: row.email,
                actions: (
                    <MDBBtnGroup size='sm'>
                        <MDBTooltip> 
                            <MDBBtn color="primary" onClick={() => userModal('Edit', row._id)}><MDBIcon icon="edit" size='lg'/></MDBBtn>
                            <div>Edit</div>
                        </MDBTooltip>
                        <MDBTooltip>
                            <MDBBtn color="danger" onClick={() => deleteModal(row.name, row._id)}><MDBIcon icon="trash" size='lg'/></MDBBtn>
                            <div>Delete</div>
                        </MDBTooltip>
                    </MDBBtnGroup>
                )
            }))
            return newData
        })
    }, [rows, userModal, deleteModal])

    return (
        <MDBDataTableV5 
            data={datatableData}
            noRecordsFoundLabel='No Users Found' 
            responsive
            hover 
            striped
        />
    );
};

export default connect(state => ({rows: state.data}))(memo(UsersTable));
