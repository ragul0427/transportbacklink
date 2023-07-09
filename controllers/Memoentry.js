const Memo = require("../model/memoentry");
//const authMiddleware = require("../middleware/Authmiddleware");

const getMemo = async (req, res) => {
    try {
        const { search } = req.query
        const regexQuery = { $regex: search, $options: "i" };
        
       
        if (search !== ""){
            const result = await Memo.find({
                $or: [
                    { gcno: !isNaN(search) ? Number(search) : null },
                  { vehicleno: !isNaN(search) ? Number(search) : null },
                  { driverphone: !isNaN(search) ? Number(search) : null },         
                ],
            });
            return res.status(200).json({ message: result });
        } else {
            const result = await Memo.find(); 
            return res.status(200).json({ message: result });
        }
        
    
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch memoentry" });
    }
  };

const createMemo = async (req, res) => {
    try {
        const result = await Memo.create({ ...req.body });
        return res.status(201).json({ message: "Memo  created successfully", data: result });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to create memo" });
    }
};

const deleteMemo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Vehicle.findByIdAndDelete(id);
        if (result) {
            return res.status(200).json({ message: "Memo deleted successfully" });
        } else {
            return res.status(404).json({ error: "Memo not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete memoentry" });
    }
};

const updateMemo = async (req, res) => {
    try {
        const { id } = req.params;
        const { internalno, gcno, date, vehicleno,driverphone, driverwhatsappno, locationfrom, locationto, commission  } = req.body;
        const result = await Memo.findByIdAndUpdate(id, { ...req.body }, { new: true });
        if (result) {
            return res.status(200).json({ message: "Memo updated successfully", data: result });
        } else {
            return res.status(404).json({ error: "Memo not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to update Memo" });
    }
};

module.exports = {
    getMemo,
    createMemo,
    deleteMemo,
    updateMemo
};