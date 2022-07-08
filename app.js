const express = require("express");
const cron = require("node-cron");
const app = express();
const sendMail = require("./sendAMail");

const port = process.env.PORT || 3500;

app.use("/", (req, res) => {
  res.send({ msg: "hello world" });
});

// function runEverySecond() {
//   console.log("running a task every minute");
// }

const task = cron.schedule("* * * * * *", () => {
  console.log("running a task every minute");
  sendMail.sendNewAppointmentAlertMail();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  task.start();
});
