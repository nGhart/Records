import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import ErrorPage from '../../components/error/ErrorPage';
import { useDispatch, useSelector } from 'react-redux';
//import { login } from '../../actions/userActions';

const LoginForm = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { loading, error, userInfo } = userLogin;
  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/');
  //   }
  // }, [navigate, userInfo]);

  return (
    <h1>login</h1>
    // <div>
    //   {error && <ErrorPage variant="danger">{error}</ErrorPage>}
    //   {loading && <Loading />}
    //   <Form onSubmit={submitHandler}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setEmail(e.target.value)}
    //         type="email"
    //         name="email"
    //         value={email}
    //         placeholder="Enter email"
    //       />
    //       <Form.Text className="text-muted">
    //         We'll never share your email with anyone else.
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setPassword(e.target.value)}
    //         type="password"
    //         name="password"
    //         value={password}
    //         placeholder="Password"
    //       />
    //     </Form.Group>

    //     <Button type="submit">Log in</Button>
    //   </Form>
    //   <div>
    //     <h6>Don't have an account</h6>
    //     <span>
    //       <Link to="/signup">Sign Up</Link>
    //     </span>
    //   </div>
    // </div>
  );
};

export default LoginForm;
