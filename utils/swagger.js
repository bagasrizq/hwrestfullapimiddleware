const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API with Swagger',
            version: '1.0.0',
            description: 'Simple Express API Documentation'
        },
        servers: [
            {
                url: "http://localhost:3000"    
            },
        ],
    },
    apis: ['./routes/*.js'],
};
const specs = swaggerJSDoc(options);


module.exports = specs;

