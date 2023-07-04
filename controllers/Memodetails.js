const Memodetails = require("../model/memodetails");
const authMiddleware = require("../middleware/Authmiddleware");

const getMemodetails = async (req, res) => {
    try {
        const { search } = req.query
        const regexQuery = { $regex: search, $options: "i" };
        
       
        if (search !== ""){
            const result = await Memodetails.find({
                $or: [
                  { consignor: regexQuery },
                  { consignee: regexQuery },
                  { brokername: regexQuery },  
                ],
            });
            return res.status(200).json({ message: result });
        } else {
            const result = await Memodetails.find(); 
            return res.status(200).json({ message: result });
        }
        
    
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch memodetails" });
    }
  };

const createMemodetails = async (req, res) => {
    try {
        await authMiddleware(req, res); // Assuming this middleware handles the authentication
        console.log(req.user.userId, "user")
        req.body.userId=req.user.userId
        const result = await Memodetails.create({ ...req.body });
        return res.status(201).json({ message: "Memodetails  created successfully", data: result });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to create memodetails" });
    }
};

const deleteMemodetails = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Memodetails.findByIdAndDelete(id);
        if (result) {
            return res.status(200).json({ message: "Memodetails deleted successfully" });
        } else {
            return res.status(404).json({ error: "Memodetails not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete memodetails" });
    }
};

const updateMemodetails = async (req, res) => {
    try {
        const { id } = req.params;
        const { locationfrom, locationto, consignor, consignee, lotno, prnofrom, prnoto, quantity, lramount, brokername, brokercommission, memomethod, lorryfoeight, remarks, accountpaid, invoiceno, valueofgoods, quality, pressmark  } = req.body;
        const result = await Memodetails.findByIdAndUpdate(id, { ...req.body }, { new: true });
        if (result) {
            return res.status(200).json({ message: "Memodetails updated successfully", data: result });
        } else {
            return res.status(404).json({ error: "Memodetails not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to update Memodetails" });
    }
};

module.exports = {
    getMemodetails,
    createMemodetails,
    deleteMemodetails,
    updateMemodetails
};