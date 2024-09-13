import React from 'react';
import AdminHeader from '../admin_components/Admin_Header';
import UserHeader from '../members_component/Member_Header';
import Header from './Headers';

const HeaderSelector = ({ userRole }) => {
  let headerComponent;
console.log(userRole)
  switch (userRole) {
    case 'admin':
      headerComponent = <AdminHeader />;
      break;
    case 'user':
      headerComponent = <UserHeader />;
      break;
    default:
      headerComponent = <Header />;
      break;
  }

  return <div>{headerComponent}</div>;
};

export default HeaderSelector;
