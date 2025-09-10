const { ObjectId } = require('mongodb');
const contactModel = require('../models/contact');

const contC = {}
contC.createContact = async function(req, res) {
    try {
        const result = await contactModel.insertContact(req.body);
        res.status(201).json({ _id: result.insertedId, ...req.body });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

contC.getContacts = async function(req, res) {
    try {
        const contacts = await contactModel.findAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

contC.getContactById = async function (req, res) {
    try {
        const col = await contactModel.findAllContacts();
        const contact = col.find(c => c._id.toString() === req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

contC.updateContact = async function (req, res) {
    try {
        const col = await contactModel.connect();
        const result = await col.findOneAndUpdate(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body },
            { returnDocument: 'after' }
        );
        if (!result.value) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(result.value);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

contC.deleteContact = async function (req, res) {
    try {
        const col = await contactModel.connect();
        const result = await col.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = contC;