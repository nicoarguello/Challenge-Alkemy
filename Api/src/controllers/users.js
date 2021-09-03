const { Users } = require("../db");

async function addUsers(req, res, next) {
  try {
    const { name, lastName, email, userName, password } = req.body;

    let user = await Users.create({
      name,
      lastName,
      email,
      userName,
      password,
    });
    res.send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "User already exists" });
  }
}

async function findUsers(req, res, next) {
  try {
    
    let users = await Users.findAll();
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: "An error occurred" });
  }
}

module.exports = {
  addUsers,
  findUsers,
};
