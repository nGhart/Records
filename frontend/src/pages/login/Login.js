import './login.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import ErrorPage from '../../components/error/ErrorPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        '/api/users/login',
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
        }}
      >
        {loading && <Loading />}
        {error && <ErrorPage>{error}</ErrorPage>}
      </div>
      <div
        style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
        className="startPage"
      >
        <div className="startImage">hi</div>
        <div className="startForm">
          <h1>Log in</h1>

          <div>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  value={email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  value={password}
                />
              </Form.Group>

              <Button type="submit">Log in</Button>
            </Form>
            <div>
              <h6>Don't have an account</h6>
              <span>
                <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
