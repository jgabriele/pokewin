var router = require('express').Router()
const patrons = require('./patrons.json')

router.route('/patrons/:name')

  /**
   * Returns if an user is a patron or not
   */
  .get((req, res) => {
    const patronName = req.params.name
    const isPatron = patrons.indexOf(patronName) !== -1

    if (isPatron) {
      return res.status(200)
        .json({ result: 'ok' })
    } else {
      return res.status(401)
        .json({ result: 'error' })
    }
  })

module.exports = router
