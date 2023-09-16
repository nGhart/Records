import './signupForm.scss';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignupForm = () => {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [message, setMessage] = useState('');
  // const [number1, setNumber1] = useState('');
  // const [number2, setNumber2] = useState('');
  // const [building, setBuilding] = useState('');
  // const [street, setStreet] = useState('');
  // const [city, setCity] = useState('');
  // const [pic, setPic] = useState(
  //   'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  // );
  // const [picMessage, setPicMessage] = useState('');
  // const [country, setCountry] = useState('');

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const userRegister = useSelector((state) => state.userRegister);
  // const { loading, error, userInfo } = userRegister;

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/');
  //   }
  // }, [navigate]);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     setMessage('Enter same password');
  //   } else {
  //     dispatch(
  //       register(
  //         name,
  //         email,
  //         number1,
  //         number2,
  //         building,
  //         street,
  //         city,
  //         country,
  //         pic,
  //         password
  //       )
  //     );
  //     navigate('/');
  //   }
  // };

  // const postDetails = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) {
  //     return setPicMessage('Upload image');
  //   }
  //   setPicMessage(null);

  //   if (file.type === 'image/jpeg' || file.type === 'image/png') {
  //     const data = new FormData();
  //     data.append('file', file);
  //     data.append('upload_preset', 'rabbitRecords');
  //     data.append('cloud_name', 'dquz47ysg');
  //     fetch('https://api.cloudinary.com/v1_1/dquz47ysg/image/upload', {
  //       method: 'post',
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setPic(data.url.toString());
  //       })
  //       .catch((error) => {
  //         console.error('Fetch Error:', error);
  //       });
  //   } else {
  //     setPicMessage('Upload a .png or .jpeg file');
  //   }
  // };

  return (
    // <div>
    //   {error && <ErrorPage variant="danger">{error}</ErrorPage>}
    //   {message && <ErrorPage variant="danger">{message}</ErrorPage>}
    //   {loading && <Loading />}
    //   <h1>Signup</h1>
    //   <Form onSubmit={submitHandler}>
    //     <Form.Group className="mb-3" controlId="formBasicName">
    //       <Form.Label>Business Name</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setName(e.target.value)}
    //         type="text"
    //         name="name"
    //         value={name}
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setEmail(e.target.value)}
    //         type="email"
    //         name="email"
    //         value={email}
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setPassword(e.target.value)}
    //         type="password"
    //         name="password"
    //         value={password}
    //       />
    //       <Form.Label> Re-enter Password</Form.Label>
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicPassword2">
    //       <Form.Control
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //         type="password"
    //         name="confirmPassword"
    //         value={confirmPassword}
    //       />
    //       <Form.Text className="text-muted">{message}</Form.Text>
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicNumber">
    //       <Form.Label>Contact Number</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setNumber1(e.target.value)}
    //         type="text"
    //         name="number1"
    //         value={number1}
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicNumber2">
    //       <Form.Label>Contact Number</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setNumber2(e.target.value)}
    //         type="text"
    //         name="number2"
    //         value={number2}
    //       />
    //       <Form.Text className="text-muted">Optional</Form.Text>
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicBuilding">
    //       <Form.Label>Building Address</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setBuilding(e.target.value)}
    //         type="text"
    //         name="building"
    //         value={building}
    //       />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicStreet">
    //       <Form.Label>Street Name</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setStreet(e.target.value)}
    //         type="text"
    //         name="street"
    //         value={street}
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicCity">
    //       <Form.Label>City</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setCity(e.target.value)}
    //         type="text"
    //         name="city"
    //         value={city}
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicCountry">
    //       <Form.Label>Country</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setCountry(e.target.value)}
    //         type="text"
    //         name="country"
    //         value={country}
    //       />
    //     </Form.Group>

    //     <Form.Group className="position-relative mb-3" controlId="pic">
    //       <Form.Label>Upload logo</Form.Label>
    //       <Form.Control
    //         type="file"
    //         name="pic"
    //         onChange={postDetails}
    //         // isInvalid={!!errors.file}
    //       />

    //       {picMessage && <ErrorPage variant="danger">{picMessage}</ErrorPage>}
    //     </Form.Group>

    //     <Button type="submit">Sign Up</Button>
    //   </Form>
    // </div>
    <h1>isgnup </h1>
  );
};

export default SignupForm;

//  <Form.Group className="position-relative mb-3" controlId="pic">
//    <Form.Label>Upload logo</Form.Label>
//    <Form.Control type="file" name="pic" onChange={postDetails} />
//    {picMessage && <ErrorPage variant="danger">{picMessage}</ErrorPage>}
//  </Form.Group>;
// Update the postDetails function to handle file uploads
// const postDetails = (e) => {
//   const file = e.target.files[0];
//   if (!file) {
//     return setPicMessage('Upload image');
//   }
//   setPicMessage(null);

//   if (file.type === 'image/jpeg' || file.type === 'image/png') {
//     const data = new FormData();
//     data.append('file', file);
//     data.append('upload_preset', 'rabbitRecords');
//     data.append('cloud_name', 'dquz47ysg');
//     fetch('https://api.cloudinary.com/v1_1/dquz47ysg', {
//       method: 'post',
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setPic(data.url.toString());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } else {
//     setPicMessage('Upload a .png or .jpeg file');
//   }
// };

// // Update the file input
// <Form.Group className="position-relative mb-3" controlId="pic">
//   <Form.Label>Upload logo</Form.Label>
//   <Form.Control
//     type="file"
//     name="pic"
//     onChange={postDetails}
//   />
//   {picMessage && <ErrorPage variant="danger">{picMessage}</ErrorPage>}
// </Form.Group>

// const postDetails = (pics) => {
//   if (!pics) {
//     return setPicMessage('Upload image');
//   }
//   setPicMessage(null);
//   if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
//     const data = new FormData();
//     data.append('file', pics);
//     data.append('upload_preset', 'rabbitRecords');
//     data.append('cloud_name', 'dquz47ysg');
//     fetch('https://api.cloudinary.com/v1_1/dquz47ysg', {
//       method: 'post',
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setPic(data.url.toString());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } else return setPicMessage('Upload a .png or .jpeg file');
// };
// const postDetails = (pics) => {
//   if (
//     pics ===
//     'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
//   ) {
//     return setPicMessage('Please Select an Image');
//   }
//   setPicMessage(null);
//   if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
//     const data = new FormData();
//     data.append('file', pics);
//     data.append('upload_preset', 'notezipper');
//     data.append('cloud_name', 'dquz47ysg');
//     fetch('hhttps://api.cloudinary.com/v1_1/dquz47ysg', {
//       method: 'post',
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setPic(data.url.toString());
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     return setPicMessage('Please Select an Image');
//   }
// };
// Update the postDetails function to handle file uploads
