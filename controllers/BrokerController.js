const Broker = require("../model/broker");
const authMiddleware = require("../middleware/Authmiddleware");

const getBroker = async (req, res) => {
    try {
        const { search } = req.query
        const regexQuery = { $regex: search, $options: "i" };
        
       
        if (search !== ""){
            const result = await Broker.find({
                $or: [
                  { name: regexQuery }
                ],
            });
            return res.status(200).json({ message: result });
        } else {
            const result = await Broker.find(); 
            return res.status(200).json({ message: result });
        }
        
    
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch brokers" });
    }
  };

const createBroker = async (req, res) => {
    try {
        await authMiddleware(req, res); // Assuming this middleware handles the authentication
        console.log(req.user.userId, "user")
        req.body.userId=req.user.userId
        const result = await Broker.create({ ...req.body });
        return res.status(201).json({ message: "Broker created successfully", data: result });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to create Broker" });
    }
};

const deleteBroker = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Broker.findByIdAndDelete(id);
        if (result) {
            return res.status(200).json({ message: "Broker deleted successfully" });
        } else {
            return res.status(404).json({ error: "Broker not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete Broker" });
    }
};

const updateBroker = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const result = await Broker.findByIdAndUpdate(id, { ...req.body }, { new: true });
        if (result) {
            return res.status(200).json({ message: "Broker updated successfully", data: result });
        } else {
            return res.status(404).json({ error: "Broker not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to update broker" });
    }
};

module.exports = {
    getBroker,
    createBroker,
    deleteBroker,
    updateBroker
};
