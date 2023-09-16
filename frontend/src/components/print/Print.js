import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Print = () => {
  const handlePrint = () => {
    window.print();
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log('userLogin', userLogin);
  console.log('userLogin.userinfo', userLogin.userinfo);
  console.log('userLogin.userInfo.name', userLogin.userinfo.name);
  useEffect(() => {}, [userInfo]);
  return (
    <div>
      Print
      <span onClick={handlePrint}>print</span>
      <p>{userLogin.userinfo.name}</p>
      <p>{userLogin.userinfo.email}</p>
      <p>{userLogin.userinfo.building}</p>
      <p>{userLogin.userinfo.number1}</p>
    </div>
  );
};

export default Print;
