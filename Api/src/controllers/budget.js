const { Budget } = require("../db");
const jwt = require("jsonwebtoken");

async function addBudget(req, res, next) {
  try {
    const { date, description, amount, type, userId } = req.body;

    let budget = await Budget.create({
      date,
      description,
      amount,
      type,
      userId,
    });
    res.send({ message: "Budget created successfully" });
  } catch (error) {
    res.status(500).send({ message: "User already exists" });
  }
}

async function findBudget(req, res, next) {
  try {
    const { id } = req.params;

    let budget = await Budget.findAll({
      where: {
        userId: id,
      },
    });
    res.send(budget);
  } catch (error) {
    res.status(500).send({ message: "User already exists" });
  }
}

module.exports = {
  addBudget,
  findBudget,
};
