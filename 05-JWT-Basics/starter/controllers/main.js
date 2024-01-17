const {BadRequest} = require('../errors/index')

const dashboard = async (req, res) => {


    const luckyNumber = Math.floor( Math.random() * 100 )

    res.status(200).json({msg: `Hello, ${req.user.username}`,
    secret: `Here's your authorized data, your lucky number is ${luckyNumber}`})

}

module.exports = {
    login,
    dashboard
}