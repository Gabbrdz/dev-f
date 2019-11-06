// Mandamos llamar dotenv
require('dotenv').config();

// Asignamos dotenv a un objeto config
const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000
}

module.exports = { config }
