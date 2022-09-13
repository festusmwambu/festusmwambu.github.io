const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MyProjectsSchema = new Schema({
  src: {
    type: String
  },
  className: {
    type: String
  },
  title: {
    type: String
  },

  text: {
    type: String
  },

  alt: {
    type: String
  },

  tech: {
    type: String
  },

  link: {
    type: String
  },

  github: {
    type: String
  },

  userCreated: {
    type: Date,
    default: Date.now
  }

});

const MyProject = mongoose.model("MyProjects", MyProjectsSchema);

module.exports = MyProject;