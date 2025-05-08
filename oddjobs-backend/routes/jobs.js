const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST /api/jobs
// @desc    Create a new job
// @access  Private
router.post('/', authMiddleware, async (req, res) => {
  try {
    const job = new Job({ ...req.body, user: req.user.id }); // ✅ FIXED here
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route   GET /api/jobs/my
// @desc    Get all jobs created by the logged-in user
// @access  Private
router.get('/my', authMiddleware, async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user.id }).sort({ date: -1 });
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching user jobs:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});


// @route   GET /api/jobs/:id
// @desc    Get a single job by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate('user', 'email');
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (err) {
    console.error('Error fetching job by ID:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route   PUT /api/jobs/:id
// @desc    Update a job (only by creator)
// @access  Private
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    if (job.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );

    res.json(updatedJob);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/jobs/:id
// @desc    Delete a job (only by creator)
// @access  Private
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    if (job.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await job.deleteOne();

    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
