import { useDispatch, useSelector } from 'react-redux';
//import { logout } from '../../actions/userActions';
import './navigation.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Navigation = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // console.log('userLogin', userLogin);
  // console.log('userLogin.userinfo', userLogin.userinfo);
  // console.log('userLogin.userInfo.name', userLogin.userinfo.name);
  // useEffect(() => {}, [userInfo]);
  // const logOut = () => {
  //   dispatch(logout());
  //   navigate('/landing');
  // };
  return (
    <div className="navSection">
      <div className="logo">
        <Link to="/" className="listItem">
          <span>records</span>
        </Link>
      </div>
      <div className="icons">
        {/* <div className="user">
          <img src={userLogin.userinfo.pic} alt="" />
          <Link to="profile"></Link>
          <span>{userLogin.userinfo.name}</span>
        </div> */}
        <Link to="/">
          <button
            onClick={() => {
              localStorage.removeItem('userInfo');
            }}
          >
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
