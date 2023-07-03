const Vehicle = require("../model/vehicle")

const getVehicle = async (req, res) => {
    
    try {
        const result = await Vehicle.find()
        return res.status(200).json({ message: result })
        
    } catch (err) {
        return res.status(200).json({ message: "failed" })
    }
}


const createVehicle = async (req, res) => {
    console.log(req.body)
   
    try {
        const result = await Vehicle.create({ ...req.body })
        return res.status(200).send({ message: result})
    } catch (err) {
        return res.status(404).send({ message: "failed" })
    }
}


const deleteVehicle=async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Vehicle.findByIdAndDelete(id)
        return res.status(200).send({message:"successfully deleted"})
    } catch (err) {
        return res.status(404).json({error:"failed"})
   }
}

const updateVehicle = async (req, res) => {
    console.log(req.body)
    try {
        const { id } = req.params;
        const {docentry, vehicleno, drivername, driverphone, whatsappno, pan, accno, ifsccode}=req.body
        const result = await Vehicle.findByIdAndUpdate(id, { ...req.body })
        return res.status(200).send({ message: result})
    } catch (err) {
        return res.status(404).json({error:"failed"})
        
    }
}




module.exports = {
    getVehicle,createVehicle,deleteVehicle,updateVehicle
}