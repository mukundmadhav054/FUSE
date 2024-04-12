const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const existingUser = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(403).json({"message":"User already exists with this username!"})
      } else if (existingUser.email === email) {
        return res.status(403).json({"message":"User already exists with this email!"})

      }
    }

    const salt = await bcrypt.genSalt(12);
    password = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({ username, email, password });
    if (newUser) {
      return res.status(201).json({"message":"successfully singed up"});
    } else {
      return res.status(400).json({ error: "Failed to sign up new user." });
    }
  } catch (error) {
    console.error("Error occurred while signing up new user:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

const findUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await userModel.findOne({ $or: [{ email }, { username }] });
    if (!user) {
      return res.status(401).json({"message":"No user found!"});
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect) {
      return res.status(200).json({"message":"successfully logged in" });
    } else {
      return res.status(401).json({"message":"password is incorrect"});   

    }
  } catch (error) {
    console.error("Error occurred while logging in user:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

module.exports = { createUser, findUser };
