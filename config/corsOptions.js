const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: "https://technotes-p8qn.onrender.com",
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
