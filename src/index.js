const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', function handler (request, reply) {
    reply.send({ hello: 'world' });
});

const port = process.env.PORT || 10000;
const host = process.env.HOST || 'localhost';

// Run the server!
fastify.listen({ host, port }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
});
