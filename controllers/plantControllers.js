const express = require('express');
const router = express.Router();

const Plants = require('../models/plants');

// create a new plant
// Plants.create(req.body, (err, createdPlants) => {
// if (err) {
//   console.log(err)
// } else {
//   console.log(createdPlants)
//
//   res.redirect('/plants');
// }
// });

// create a home route
router.get('/', (req, res) => {

  Plants.find({}, (err, allPlants) => {
    if (err) {
      res.send(err);
    } else {
      res.render('index.ejs', {
        plants: allPlants
      })
    }
  })
});

// create a new route
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// when created return the router
router.post('/', (req, res) => {
  Plants.create(req.body, (err, createdPlant) =>{
    if (err) {
      res.send(err);
    } else {
      res.redirect(`/plants/${createdPlants.id}`);
    }
  })
});

// create a show route
router.get('/:id', (req, res) => {
  Plants.findById(req.params.id, (err, plant) => {
    if (err) {
      res.send(err);
    } else {
      res.render('show.ejs', {plant: plant});
    }
  })
});

// edit a route = display a single plant
router.get('/:id/edit', (req, res) => {
  Plants.findById(req.params.id, (err, plant) => {
    if (err) {
      res.send(err);
    } else {
      res.render('edit.ejs', {plant: plant});
    }
  })
});

// show a route
router.put('/:id', (req, res) => {
  Plants.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, plant) => {
    if(err) {
      res.send(err);
    } else {
    res.redirect('/plants');
    })
  })
});

// update a route
// router.put('/:id', (req, res) => {
// }

// delete a route with db and id
router.delete('/:id', (req, res) => {
  Plants.findbyIdAndRemove(req.params.id, (err, deletedPlant) => {
    if (err) {
    } else {
      res.redirect('/plants')
    }
  })
});




module.exports = router;
