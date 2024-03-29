const { signupService, findUserByEmail } = require("../services/user.service");
const { generateToken } = require("../utils/token");
const User = require("../models/user.model");

exports.getAllUser = async (req, res, next) => {
  const allUser = await User.find({});
  res.status(200).json({
    status: "Success",
    data: allUser,
  });
};


exports.singup = async (req, res) => {
  try {
    const user = await signupService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Successfully SingUp",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

/**
 * 1. Check if email and password are given
 * 2. Load user with email
 * 3. If not user sent res
 * 4. Compare password
 * 5. If password not correct send res
 * 6. Check if user is active
 * 7. If not active send res
 * 8. Generate token
 * 9. Send user and token
 */

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please provide your credentials",
      });
    }

    //..Find User In Database with email..//
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: "No user found. Please create an account",
      });
    }

    //...User Password hash and database password hash compare ..//
    const isPasswordValid = user.comparePassword(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Password is not correct",
      });
    }

    if (user.status != "active") {
      return res.status(401).json({
        status: "fail",
        error: "Your account is not active",
      });
    }
    //..Generate JWT Access Token ...//
    const token = generateToken(user);

    //..Set Access Token In Cokies ..//
    res.cookie(String(user.id),token,{
      path:"/",
      expires: new Date(Date.now() + 10000*30),
      httpOnly: true,
      sameSite:"lax"
    })

    const { password: pwd, ...others } = user.toObject();
    res.status(200).json({
      status: "Success",
      message: "Successfully LogedIn",
      data: {
        user: others
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

//....
    //...When User Get His Personal Info.....//

exports.getMe = async (req, res) => {
  try {
    const user = await findUserByEmail(req.user?.email);
    const { password: pwd, ...others } = user.toObject();
    res.status(200).json({
      status: "Success",
      data: others,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};
