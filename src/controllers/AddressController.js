const Address = require("../models/Address");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.statuc(400).json({ error: "User not found" });
    }

    const address = await Address.create({ zipcode, street, number, user_id });

    return res.json(address);
  }
};
