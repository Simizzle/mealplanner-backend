const User = require("./users.model");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    const token = await user.generateAuthToken(user._id)
    res
      .status(200)
      .send({ user: savedUser, token: token, message: "User created in database" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.authUsers = async (req, res) => {
    res.status(200).send(req.user)
  };

// const User = require("./users.model");

// exports.createUser = async (req, res) => {
//   try {
//     const user = new User(req.body);
//     const savedUser = await user.save();
//     res
//       .status(200)
//       .send({ user: savedUser, message: " User created in database " });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

exports.findUser = async (req, res) => {
  try {
    const user = req.params.username;
    const targetUser = await User.findOne({ username: user });
    res.status(200).send({ user: targetUser });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.removeUser = async (req, res) => {
  try {
    const user = req.body.username;
    const password = req.body.password;
    const removedUser = await User.findOneAndDelete({
      username: user,
      password: password,
    });
    res.status(200).send({ user: removedUser, message: "User removed" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    console.log(req.body.oldPassword);
    let updateUser;
    const filter = req.body.oldUsername;
    const oldPass = req.body.oldPassword;
    const user = req.body.newUsername;
    const newPass = req.body.newPassword;
    const email = req.body.email;
    console.log(req.body.newPassword);
    if (user) {
      updateUser = await User.updateOne(
        { username: filter },
        { username: user }
      );
    } else if (newPass) {
      console.log({ username: filter, password: oldPass });
      updateUser = await User.updateOne(
        { username: filter, password: oldPass },
        { password: newPass }
      );
    } else if (email) {
      updateUser = await User.updateOne(
        { username: filter, password: oldPass },
        { email: email }
      );
    }
    res.status(200).send({ user: updateUser, message: "User modified" });
  } catch (error) {
    res.status(500).send(error);
  }
};