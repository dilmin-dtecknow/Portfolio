const About = require("../models/About");

// GET About Data
exports.getAbout = async (req, res) => {
  const data = await About.find();
  res.json(data);
};

// CREATE About Data
exports.createAbout = async (req, res) => {
  const newAbout = new About(req.body);
  await newAbout.save();
  res.json(newAbout);
};

//update about data
exports.updateAbout = async(req,res)=>{
    const {id} = req.params;
    const updatedAbout = await About.findByIdAndUpdate(id, req.body, {new: true});
    res.json(updatedAbout);
}