const { Users } = require("../db");
const jwt = require("jsonwebtoken");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    let user = await Users.findOne({
      where: {
        email,
        password,
      },
    });
    // if (user) {
    //   res.json({ message: "User found" });
    // } else {
    //   res.status(401).json({ message: "Wrong username or password" });
    // }
    // console.log(token)
    jwt.sign({ user }, "secretkey", { expiresIn: "60s" }, (error, token) => {
      console.log({token})
      res.json({ token });
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "A problem has occurred" });
  }
}

const verifyToken = (req, res, next) => {
  const bearerHeaders = req.headers["authorization"];
  
  if (typeof bearerHeaders !== "undefined") {
    const bearerToken = bearerHeaders.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403).json({ message: "No Auntorization" });
  }
};

module.exports = {
  login,
  verifyToken,
};
