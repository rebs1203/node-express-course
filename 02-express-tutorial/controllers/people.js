const { people } = require('../data');


const addPerson = (req, res) => {
    const { name } = req.body
    if(name) {
        people.push({ id: people.length + 1, name: name });
        res.status(201).json({ success: true, name: name });
    } else {
        res.status(400).json({ success: false, message: "Please provide a name" })
    }
}

const getPeople = (req, res) => {
    res.json(people)
}

const findPerson = (req, res) => {
    const findId = people.find((person) => person.id === Number(req.params.id))
    if (findId) {
        res.status(200).json(findId)
    } else {
        res.status(404).json({ success: false, message: "Please provide a valid id" })
    }
}

const replacePerson = (req, res) => {
    const replacePerson = {
        id: Number(req.params.id),
        name: "Matthew"
    }

    const findIndex = people.findIndex((person) => person.id === Number(req.params.id))
    people[findIndex] = replacePerson
    res.json(people)
}

const deletePerson = (req, res) => {
    const findIndex = people.findIndex((person) => person.id === Number(req.params.id))
    if (findIndex > -1) {
        people.splice(findIndex, 1)
        res.status(200).json(people)
    } else {
        res.status(404).json({success: false, msg: `id ${req.params.id} not found`})
    }
}

module.exports = { addPerson, getPeople, findPerson, replacePerson, deletePerson}