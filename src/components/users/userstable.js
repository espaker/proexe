import React, { memo }from 'react';
import { useSelector } from 'react-redux';
import { MDBDataTableV5 } from "mdbreact";

const UsersTable = () => {
    const datatablesData = useSelector(store => store.data)

    return (
        <MDBDataTableV5 
            data={datatablesData}
            responsive
            hover 
            striped
        />
    );
};

export default memo(UsersTable);
