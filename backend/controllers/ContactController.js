const Contact = require('../models/Contact')

const listAll = (req, res) => {
    Contact.find()
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        res.status(404).json({
            message: 'No Contacts found to Display!!'
        })
    })
}

const show = (req, res) => {
    let contactId = req.body.contactId
    Contact.findById(contactId)
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        res.status(404).json({
            message: 'Contact not Found!!'
        })
    })
}

const add = (req, res) => {
    let contact = new Contact(req.body)
    contact.save()
    .then(response => {
        res.json({
            message: 'Contact Added Successfully!!',
            added_contact: response
        })
    })
    .catch(err => {
        res.status(404).json({
            message: 'Unable to add Contact some error occured!!'
        })
    })
}

const update = (req, res) => {
    let contactId = req.body.contactId

    let updatedContact = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }

    Contact.findByIdAndUpdate(contactId, {$set: updatedContact})
    .then(response => {
        res.json({
            message: 'Contact Updated Successfully!!',
            updated_contact: updatedContact
        })
    })
    .catch(err => {
        res.status(404).json({
            message: 'Unable to update Contact some error occured!!'
        })
    })
}

const remove = (req, res) => {
    let contactId = req.body.contactId

    Contact.findByIdAndDelete(contactId)
    .then(response => {
        res.json({
            message: 'Contact Deleted Successfully!!',
            deleted_contact: response
        })
    })
    .catch(err => {
        res.status(404).json({
            message: 'Unable to delete Contact some error occured!!'
        })
    })
}

module.exports = {
    listAll,
    show,
    add,
    update,
    remove
}