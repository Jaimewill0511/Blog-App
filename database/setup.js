const mongoose = require("mongoose");

const postsSchema = {
    title: String,
    content: String
  };
  
     
module.exports = mongoose.model("post", postsSchema);