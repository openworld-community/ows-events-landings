import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';

import { fileURLToPath } from 'url';

const server = fastify({ logger: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const landingName = process.argv[2];

const landings = {
   'parsing-landing': 'parsing-landing',
};

if (!landingName || !landings[landingName]) {
   console.log('Please provide a landing name, one of: ' + Object.keys(landings).join(', '));
   process.exit(1);
}

server.register(fastifyStatic, {
   root: path.join(__dirname, '..', 'assets', landingName),
   decorateReply: false,
});

server.register(fastifyStatic, {
   root: path.join(__dirname, '..', 'assets', 'common'),
   prefix: '/common',
   decorateReply: false,
});

server.post('/add/contact', async request => {
   console.log(request.body);
   const body = request.body;
   const tg = body.tg;
   const email = body.email;
   console.log(tg, email);
});

const start = async () => {
   try {
      await server.listen({ host: '0.0.0.0', port: 3000 });
   } catch (err) {
      server.log.error(err);
      process.exit(1);
   }
};
start();
