const {Budget} = require("../db")

async function addUsers(req, res, next) {
    try {
      const { date, description, amount, type } = req.body;
  
      let budget = await Budget.create({
        date, 
        description, 
        amount, 
        type
      });
      res.send({ message: "Budget created successfully" });
    } catch (error) {
      res.status(500).send({ message: "User already exists" });
    }
  }
