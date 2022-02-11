// add middlewares here related to projects
const Projects = require('./projects-model')

module.exports = {
    validateID,
    validateProject,
    validateProjectPut
}

async function validateID(req, res, next) {
    let id = req.params.id;
    let result = await Projects.get(id);
    if(result == null) {
    res.status(404).json({ message: 'The hub could not be found!!!!' });
    } else {
    req.proj = result;
    next();
    }
}

function validateProject(req, res, next) {
    if(!req.body.name) {
        res.status(400).json({ message: 'we need a name!' });
    } else if (!req.body.description) {
        res.status(400).json({ message: 'no text!' });
    } else {
        next();
    }
}

function validateProjectPut(req, res, next) {
    if(req.body.completed !== true && req.body.completed !== false) {
        res.status(400).json({ message: 'Needs completed y/n' });
    } else {
        next();
    }
}

