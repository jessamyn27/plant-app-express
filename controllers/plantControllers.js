const express = require('express');
const router = express.Router();
const Plants = require('../models/plants');

// create a new plant
Plants.create(req.body, (err, createdPlants) => {
if (err) {
  console.log(err)
} else {
  console.log(createdPlants)

  res.redirect('/plants');
}
})
});

// create a new route
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// edit a route = display a single plant
router.get('/:id/edit', (req, res) => {
  Plants.findById(req.params.id, (err, fountPlant) => {
    res.render('edit.ejs', {
      plant: foundPlant
    });
  })
});

// show a route
router.get('/:id', (req, res) => {
  Plants.findById(req.params.id, err, foundPlant) => {
    res.render('show.ejs', {
      plant: foundPlant
    });
  }
});

// update a route
// router.put('/:id', (req, res) => {
// }

// delete a route with db and id
router.delete('/:id', (req, res) => {
  console.log(req.params.id, ' this is params in my delete')

  Plants.findbyIdAndRemove(req.params.id, (err, deletedPlant) => {
    if (err) {
      console.log(err)
    } else {
      console.log(deletedPlant, ' this is deletedPlant in the deleted route')
      res.redirect('/plants')
    }
  })
})




module.exports = router;
