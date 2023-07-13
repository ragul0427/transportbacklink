const Report = require("../model/report");
// const authMiddleware = require("../middleware/Authmiddleware");

const getReport = async (req, res) => {
    try {
        const { search } = req.query
        const regexQuery = { $regex: search, $options: "i" };
        
       
        if (search !== ""){
            const result = await Report.find({
                $or: [
                  { brokername: regexQuery },
                  { vehicleno: !isNaN(search) ? Number(search) : null },
                  { lrno: !isNaN(search) ? Number(search) : null },
                  { consignor: regexQuery },
                  { consignee: regexQuery },
                ],
            });
            return res.status(200).json({ message: result });
        } else {
            const result = await Report.find(); 
            return res.status(200).json({ message: result });
        }
        
    
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch report" });
    }
  };

const createReport = async (req, res) => {
    try {
        const result = await Report.create({ ...req.body });
        return res.status(201).json({ message: "Report created successfully", data: result });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to create report" });
    }
};

const deleteReport = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Report.findByIdAndDelete(id);
        if (result) {
            return res.status(200).json({ message: "Report deleted successfully" });
        } else {
            return res.status(404).json({ error: "Report not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete report" });
    }
};

const updateReport = async (req, res) => {
    try {
        const { id } = req.params;
        const { fromdate, todate, vehicleno,panno, rcname, locationfrom, locationto, consignor,consignee, brokername, lrno,lramount } = req.body;
        const result = await Report.findByIdAndUpdate(id, { ...req.body }, { new: true });
        if (result) {
            return res.status(200).json({ message: "Report updated successfully", data: result });
        } else {
            return res.status(404).json({ error: "Report not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to update report" });
    }
};

module.exports = {
    getReport,
    createReport,
    deleteReport,
    updateReport,
};
