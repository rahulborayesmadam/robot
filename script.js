var robot = require("robotjs");
var x = 0;
setInterval(() => {
  robot.setMouseDelay(2);
  var y = robot.getScreenSize().height / 2 - 10;
  x = (x + 100) % robot.getScreenSize().width;
  robot.moveMouse(x, y);
}, 10000);
