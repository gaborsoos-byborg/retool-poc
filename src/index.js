const fastify = require('fastify')({ logger: true });

const videos = [{ id: 0, name: 'Dummy Video', payload: '{}', headers: '{}' }];

// Declare a route
fastify.get('/', function handler (request, reply) {
  reply.send({ hello: 'world' });
});

fastify.get('/videos', function handler (request, reply) {
  reply.send(videos);
});

fastify.post('/videos', function handler (request, reply) {
  const video = {
    id: videos.length,
    name: request.body.name || 'undefined',
    payload: JSON.stringify(request.body),
    headers: JSON.stringify(request.headers)
  };
  videos.push(video);

  reply.send(video);
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
