const router = require('express').Router();
const { Thought, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const thoughtData = await Thought.find({});
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findOne({ _id: req.params.id })
      .populate({
        path: 'reactions',
        select: '-__v'
      })
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const thoughtData = await Thought.create(req.body);
    const userData = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { thoughts: thoughtData._id } },
      { new: true });
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// needs testing
router.post('/:thoughtId/reactions', async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { new: true }
    );
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// needs testing
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    );
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;