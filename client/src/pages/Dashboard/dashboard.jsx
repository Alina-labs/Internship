import React from 'react';
import PropTypes from 'prop-types'

import { useState } from "react";

const Products = () => {
    return (
      <div className="bg-white p-4">
        <h1>Products Page</h1>
        {/* Add your products content here */}
      </div>
    );
  };

const Content = () => {
    const [activePage, setActivePage] = useState('dashboard');

    const handleSetActivePage = (page) => {
        setActivePage(page);
    };
    console.log(handleSetActivePage);

    return (
      <div className="flex flex-col flex-1">
        <div className="bg-white p-4">
            {activePage === 'dashboard' && <div>Main Content</div>}
            {activePage === 'products' && <Products />}
            {/* <button onClick={() => handleSetActivePage('products')}> Go To Products</button> */}
        </div>
      </div>
    );
  };

const Sidebar = ({ setActivePage }) => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
      <div className="text-center py-4 bg-gray-900">Dashboard</div>
      <ul className="flex-1">
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer" onClick={() => setActivePage('dashboard')}>Dashboard</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer" onClick={() => setActivePage('products')}>Products</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Orders</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Customers</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Settings</li>
      </ul>
      <div className="py-4 text-center">Logout</div>
    </div>
  );
};

Sidebar.propTypes = {
    setActivePage: PropTypes.func.isRequired,
  };

const Header = () => {
  return (
    <div className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <div>Logo</div>
      <div>Search</div>
    </div>
  );
};



const Dashboard = () => {
    const [activePage, setActivePage] = useState('dashboard');
  return (
    <div className="flex h-screen">
      <Sidebar setActivePage={ setActivePage } />
      <div className="flex flex-col flex-1">
        <Header />
        <Content activePage={activePage}/>
      </div>
    </div>
  );
};

export default Dashboard;
