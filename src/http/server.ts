import fastify from "fastify";

const app = fastify();

app.listen({
    port:3331,
}).then(() => {
    console.log('HTTP server running!');
})  