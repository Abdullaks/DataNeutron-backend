const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      text: true,
    },
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },
    place:{
        type:String,
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
