const express = require("express");
const connectDB = require("./utils/db");
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");
//load env vars
require("dotenv").config();
//Connect to database
connectDB();

//route files
const userRoutes = require("./routes/user.routes");
const scheduleRoutes = require("./routes/schedule.routes");
const roomRoutes = require("./routes/room.routes");
const app = express();
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*",
  })
);
//body parser
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//mount routers
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/room", roomRoutes);
app.use("/api/v1/schedule", scheduleRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("schedule-management-react/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "schedule-management-react", "build", "index.html")
    );
  });
}
const server = app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});

//handle unhandled PromiseRejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`.red);

  //Close Server & exit process
  server.close(() => process.exit(1));
});
