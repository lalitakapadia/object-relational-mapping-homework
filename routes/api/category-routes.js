const router = require('express').Router();
const { Model } = require('sequelize');
const { Category, Product } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/categories` endpoint
  // find all categories
  // be sure to include its associated Products
router.get('/', async(req, res) => {
  try {
    const category = await Category.findAll({
      include: [{model: Product}],
    })
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

 // find one category by its `id` value
 // be sure to include its associated Products
router.get('/:id', async(req, res) => {
  try{
    const singleCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if(!singleCategory) {
      res.status(404).json({ message: 'No category found for this id!'});
      return;
    }

    res.status(200).json(singleCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

 // create a new category
router.post('/', async(req, res) => {
 try {
  //console.log('HELLO', req.body);
  const newCategory = await Category.create(req.body, res);
  //console.log(newCategory);
  res.status(200).json(newCategory);
  } catch(err) {
    res.status(500).json(err);
 }
});

  // update a category by its `id` value
router.put('/:id', async(req, res) => {
  try {
    const checkID = await Category.findByPk(req.params.id)
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
    })
    if (!checkID) {
      res.status(404).json('No Category found for this id!');
      return;
    }
    res.status(200).json({ message: 'Category has been updated' })
  } catch (err) {
    res.status(500).json(err)
  }
});

  // delete a category by its `id` value
router.delete('/:id', async(req, res) => {
  try {
    const delCategory = await Category.destroy({
      where: {
        id: req.params.id
      },
    })
    if (!delCategory) {
      res.status(404).json({ message: 'No Category found for this id!' });
      return;
    }
    res.status(200).json('Category has been deleted')
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
