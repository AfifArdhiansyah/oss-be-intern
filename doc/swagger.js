const swaggerAutogen = require('swagger-autogen')()

const outputFile = './doc/swagger_output.json'
const endpointsFiles = ['./app/routers/greetingRoute.js']

swaggerAutogen(outputFile, endpointsFiles)