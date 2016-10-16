const project = require('../blogs/projects.js')
const hobbies = require('../blogs/hobbies.js')

exports.getProjectList = (req, res) => {
  res.json(project.projectList);
};

exports.getProject = (req, res) => {
  const projectBlog = project.project[req.params.name];
  if( projectBlog ) {
    res.json(projectBlog);
  } else {
    res.sendStatus(404);
  }
};

exports.getHobbyList = (req, res) => {
  res.json(hobbies.hobbyList);
};

exports.getHobby = (req, res) => {
  const blog = hobbies.hobby[req.params.name];
  if( blog ) {
    res.json(blog);
  } else {
    res.sendStatus(404);
  }
};
