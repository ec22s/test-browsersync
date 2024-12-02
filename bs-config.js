require('dotenv').config();
module.exports = {
  "files": [
    "app.js",
    "public/**",
  ],
  "proxy": `localhost:${process.env.PORT_SERVER}`,
  "port": process.env.PORT_BROWSER
};
