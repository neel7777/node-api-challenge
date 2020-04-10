const express = require('express');

const projects = require('../data/helpers/projectModel');
const actions = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
    // do your magic!
    actions.get()
    .then(user=> {
      res.status(200).json(user);
    })
    .catch(error=>{
      console.log(error);
      res.status(500).json({ message: 'error finding actions'})
    })
});

router.get('/:id', (req, res) => {
// do your magic!
const { id } = req.params;
actions.get(id)
.then(user=>{
    res.status(200).json(user);
})
.catch(error=>{
    console.log(error);
    res.status(500).json({message: 'error finding action'})
})
});

router.post('/', (req, res) => {
    // do your magic!
    if (!req.body.project_id) {
        res.status(400).json({ error: 'please provide valid project id'})
    }
    else {
    actions.insert(req.body)
    .then(user=>{
      res.status(201).json(user)
    })
    .catch(error=>{
      console.log(error);
      res.status(500).json({message: 'error creating new action'})
    })
}
});

router.put('/:id', (req, res) => {
    // do your magic!
    const { id } = req.params;
    actions.update(id, req.body)
    .then(update=>{
        actions.get(id)
        .then(user=>{
        res.status(200).json(user)
        })
        .catch(error=>{
        res.status(500).json({message: 'error updating action'})
        })
    })
    .catch(error=>{
    res.status(500).json({message: 'error making change'})
    })
});

router.delete('/:id', (req, res) => {
    // do your magic!
    actions.remove(req.params.id)
    .then(user=>{
      res.status(200).json({message: `This action was deleted`})
    })
    .catch(error=>{
      res.status(500).json({message: 'error deleting action'})
    })
});

module.exports = router;