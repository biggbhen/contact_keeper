const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  private
router.get('/', (req, res) => {
	res.send('get all contacts');
});

// @route   POST api/contacts
// @desc    ADD new contact
// @access  private
router.post('/', (req, res) => {
	res.send('add contacts');
});

// @route   PUT api/contacts
// @desc    Update contact
// @access  private
router.put('/:id', (req, res) => {
	res.send('Update contact');
});

// @route   DELETE api/contacts
// @desc    Delete contact
// @access  private
router.delete('/', (req, res) => {
	res.send('delete contact');
});

module.exports = router;
