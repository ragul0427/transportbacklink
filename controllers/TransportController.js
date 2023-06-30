const transport = require('../model/transport')

const getTransport = async (req, res) => {
    res.status(200).json({message:"get goals"})
}


const createTransport = async (req, res) => {
    res.status(200).json({message:"create goals"})
}


const updateTransport=async (req, res) => {
    res.status(200).json({message:`update goals ${req.params.id}`})
}

const deleteTransport=async (req, res) => {
    res.status(200).json({message:`delete goals ${req.params.id}`})
}




module.exports = {
    getTransport,
    createTransport,updateTransport,deleteTransport
}