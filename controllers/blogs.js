const project = require('../blogs/projects.js')

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
