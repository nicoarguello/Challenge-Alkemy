const { Users } = require("../db");

async function addUsers(req, res, next) {
  try {
    const { name, lastName, email, age, userName, password } = req.body;

    let user = await Users.create({
      name,
      lastName,
      email,
      age,
      userName,
      password,
    });
    res.send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "User already exists" });
  }
}

module.exports = {
  addUsers,
};
