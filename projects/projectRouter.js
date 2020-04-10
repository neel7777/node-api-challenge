const express = require('express');

const projects = require('../data/helpers/projectModel');
const actions = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
    // do your magic!
    projects.get()
    .then(user=> {
      res.status(200).json(user);
    })
    .catch(error=>{
      console.log(error);
      res.status(500).json({ message: 'error finding projects'})
    })
  });

router.get('/:id', (req, res) => {
// do your magic!
const { id } = req.params;
projects.get(id)
.then(user=>{
    res.status(200).json(user);
})
.catch(error=>{
    console.log(error);
    res.status(500).json({message: 'error finding project'})
})
});

router.get('/:id/actions', (req, res) => {
    // do your magic!
    const { id } = req.params;
    projects.getProjectActions(id)
    .then(user=>{
        res.status(200).json(user);
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({message: 'error finding project'})
    })
    });

router.post('/', (req, res) => {
    // do your magic!
    projects.insert(req.body)
    .then(user=>{
      res.status(201).json(user)
    })
    .catch(error=>{
      console.log(error);
      res.status(500).json({message: 'error creating new project'})
    })
  });

router.put('/:id', (req, res) => {
// do your magic!
const { id } = req.params;
projects.update(id, req.body)
.then(update=>{
    projects.get(id)
    .then(user=>{
    res.status(200).json(user)
    })
    .catch(error=>{
    res.status(500).json({message: 'error updating project'})
    })
})
.catch(error=>{
    res.status(500).json({message: 'error making change'})
})
});

router.delete('/:id', (req, res) => {
    // do your magic!
    projects.remove(req.params.id)
    .then(user=>{
      res.status(200).json({message: `This project was deleted`})
    })
    .catch(error=>{
      res.status(500).json({message: 'error deleting project'})
    })
  });

module.exports = router;