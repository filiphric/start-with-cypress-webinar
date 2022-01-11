const dotenvPlugin = require('cypress-dotenv');

module.exports = (on, config) => {
  
  config = dotenvPlugin(config)
  
  return config
}

require('@applitools/eyes-cypress')(module)
