const {Users} = require("../db")

async function login(req, res, next) {
    try {
      const { email, password } = req.body;
  
      let budget = await Users.findOne({
        where: {
            email,
            password
        }
      });
      if(budget){ 
      res.json({ message: "User found"});
    } else {
        res.status(401).send({ message: "Wrong username or password"});
    }
    } catch (error) {
      res.status(400).json({ message: "A problem has occurred"});
    }
  }

  
module.exports = {
    login,
  };