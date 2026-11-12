const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "server.log");

const writeLog = (message) => {
  const time = new Date().toISOString();

  const finalMessage = `[${time}] ${message}\n`;

  fs.appendFileSync(logPath, finalMessage);
};

module.exports = writeLog;