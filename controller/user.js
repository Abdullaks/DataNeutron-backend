const User = require("../models/user")

//desc create User Data
//@route POST /api/users/add
//@access Public 
const addData = async (req, res) => {
  console.count("addData"); 
  try {
    //create a new user
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      place: req.body.place,
      age: req.body.age,
    });

    //save the new user and response
    const user = await newUser.save();
    if (user) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        place: user.place,
        age: user.age,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//desc update User Data
//@route PUT /api/users/update
//@access Public
const updateData = async (req, res) => {
console.count("updateData"); 
  const { id } = req.params;
  const editUser = await User.findByIdAndUpdate(id, req.body,{new:true});
  res.json(editUser);
};




module.exports = {
  addData,
  updateData,
};