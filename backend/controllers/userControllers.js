const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
const generateToken = require('../util/generateToken');

const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    number1,
    number2,
    building,
    street,
    city,
    country,
    pic,
    password,
  } = req.body;

  //check if email already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  //creating the user
  const user = await User.create({
    name,
    email,
    number1,
    number2,
    building,
    street,
    city,
    country,
    pic,
    password,
  });

  //after user has been created
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      number1: user.number1,
      number2: user.number2,
      building: user.building,
      street: user.street,
      city: user.city,
      country: user.country,
      pic: user.pic,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Error occurred while creating user');
  }
});

//login
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //find user by email
  const user = await User.findOne({ email });

  //if user exist and checks if password matches
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      number1: user.number1,
      number2: user.number2,
      building: user.building,
      street: user.street,
      city: user.city,
      country: user.country,
      pic: user.pic,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid email or password');
  }
});

module.exports = { registerUser, authUser };
