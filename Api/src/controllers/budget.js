const {Budget} = require("../db")

async function addBudget(req, res, next) {
    try {
      const { date, description, amount, type, userId } = req.body;
  
      let budget = await Budget.create({
        date, 
        description, 
        amount, 
        type,
        userId
      });
      res.send({ message: "Budget created successfully" });
    } catch (error) {
      res.status(500).send({ message: "User already exists" });
    }
  }

  
module.exports = {
    addBudget,
  };
  