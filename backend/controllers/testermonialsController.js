const Testermonials = require("../models/Testermonials");
const mongoose = require('mongoose');

//GET Testermonials
exports.getTestermonials = async (req, res) => {
    try {

        const data = await Testermonials.find();
        res.json(data);

    } catch (error) {
        res.status(500).json({ message: "Faild to fetch Testermonials data" });
    }
}

//POST Testermonials
exports.createTestermonials = async (req,res)=>{

    try {
        
        const newTestermonials = new Testermonials(req.body);
        await newTestermonials.save();
        res.status(201).json(newTestermonials);

    } catch (error) {
        res.status(400).json({ message: "Failed to create Testermonials data", error: error.message });
    }

}