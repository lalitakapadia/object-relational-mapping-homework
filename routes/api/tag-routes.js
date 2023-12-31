const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
  // be sure to include its associated Product data
router.get('/', async(req, res) => {
  //console.log('getTags');
  try {
    const allTags = await Tag.findAll({
      include: [{model: Product}]
    });
      res.status(200).json(allTags)
  } catch (err) {
    res.status(500).json(err)
  };
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const singleTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    if (!singleTag) {
      res.status(404).json({ message: 'No Tag found for that id!' })
      return;
    }
    res.status(200).json(singleTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body, res);
    res.status(200).json(newTag)
    console.log('New Tag Created');
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const checkID = await Tag.findByPk(req.params.id)
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!checkID) {
      res.status(404).json('No Tag found for this id!')
      return;
    }
    res.status(200).json('Tag has been updated')
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const delTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (!delTag) {
      res.status(404).json({ message: 'No Tag found for that id!' })
      return;
    }
    res.status(200).json({ mesage: 'Tag Deleted' })
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
