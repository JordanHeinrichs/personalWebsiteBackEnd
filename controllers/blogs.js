const blogIndex = require('../blogs/blogIndex.js')
const path = require('path');

const fileOptions = {
   root: path.join(__dirname, '../blogs/')
};

exports.getProjectList = (req, res) => {
  res.json(blogIndex.projectList);
};

exports.getProject = (req, res) => {
  const blog = blogIndex.projectList[req.params.name];
  if( blog ) {
    res.sendFile(`${req.params.name}.html`, fileOptions);
  } else {
    res.sendStatus(404);
  }
};

exports.getHobbyList = (req, res) => {
  res.json(blogIndex.hobbyList);
};

exports.getHobby = (req, res) => {
  const blog = blogIndex.hobbyList[req.params.name];
  if( blog ) {
    res.sendFile(`${req.params.name}.html`, fileOptions);
  } else {
    res.sendStatus(404);
  }
};
