import React, { memo, useEffect, useState }from 'react';
import { connect } from 'react-redux'
import { MDBDataTableV5 } from "mdbreact";

const UsersTable = ({rows}) => {
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
                actions: 'ls',

            }))
            return newData
        })
    }, [rows])

    return (
        <MDBDataTableV5 
            data={datatableData}
            responsive
            hover 
            striped
        />
    );
};

export default connect(state => ({rows: state.data}))(memo(UsersTable));
