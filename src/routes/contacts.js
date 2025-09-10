const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

// const contactsController = new ContactsController();

// Route to create a new contact
router.post('/', contactsController.createContact);

// Route to get all contacts
router.get('/', contactsController.getContacts);

// Route to get a contact by ID
router.get('/:id', contactsController.getContactById);

// Route to update a contact by ID
router.put('/:id', contactsController.updateContact);

// Route to delete a contact by ID
router.delete('/:id', contactsController.deleteContact);

module.exports = router;