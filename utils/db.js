const mongoose = require("mongoose");
// const { UUID } = require("bson");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ScheduleDatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   pkFactory: { createPk: () => new UUID().toBinary() },
    });
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.error(err, "Not connected");
  }
};

module.exports = connectDB;
