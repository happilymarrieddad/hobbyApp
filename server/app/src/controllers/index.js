const ControllerFactory = require('./Controller')
const ArmiesFactory = require('./ArmiesController')
const UnitsFactory = require('./UnitsController')

module.exports = {
	'handler':new ControllerFactory(),
	'armies':new ArmiesFactory(),
	'units':new UnitsFactory()
}