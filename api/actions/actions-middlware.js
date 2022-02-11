// add middlewares here related to actions
const Actions = require('./actions-model')

module.exports = {
    validateID,
    validateAction,
    validateActionPut
}

async function validateID(req, res, next) {
    let id = req.params.id;
    let result = await Actions.get(id);
    if(result == null) {
    res.status(404).json({ message: 'Action not found' });
    } else {
    req.action = result;
    next();
    }
}

function validateAction(req, res, next) {
    if(!req.body.notes) {
        res.status(400).json({ message: 'Needs notes!' });
    } else if (!req.body.description) {
        res.status(400).json({ message: 'no description!' });
    } else if (!req.body.project_id) {
        res.status(400).json({ message: 'no ID!' });
    } else {
        next();
    }
}

function validateActionPut(req, res, next) {
    if(req.body.completed !== true && req.body.completed !== false) {
        res.status(400).json({ message: 'Needs notes!' });
    } else {
        next()
    }
}