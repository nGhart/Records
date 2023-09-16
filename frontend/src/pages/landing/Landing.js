import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Landing = () => {
  //  useEffect(() => {
  //    const userInfo = localStorage.getItem('userInfo');
  //    if (userInfo) {
  //      navigate('/');
  //    }
  //  }, [navigate]);
  return (
    <div className="landingSection">
      <h1>Welcome</h1>
      <div
        className="landingContainer"
        style={{ height: '400px', width: '50%' }}
      >
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
