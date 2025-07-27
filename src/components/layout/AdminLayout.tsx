import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <h1>This is admin navbar</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;