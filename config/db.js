const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/DataNeutron", {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("DB Connetion Successfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};
module.exports = dbConnect;
