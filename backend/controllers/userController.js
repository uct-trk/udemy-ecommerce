import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route post / api/users/login
// @access public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc register
// @route post / api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc logout user / clear cookie
// @route post / api/users/logout
// @access private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc get user profile
// @route get / api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc update user profile
// @route put / api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc get users
// @route get / api/users
// @access private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc get user
// @route delete / api/users/:id
// @access private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// @desc get user by id
// @route get / api/users/:id
// @access private/admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc update user
// @route put / api/users/:id
// @access private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
};
