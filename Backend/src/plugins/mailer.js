import fp from "fastify-plugin";
import fastifyMailer from "fastify-mailer";

export default fp(async (fastify) => {
  fastify.register(fastifyMailer, {
    defaults: {
      from: process.env.SMTP_USER, 
    },
    transport: {
    //   service: "smtp.gmail.com", // Use your preferred SMTP service
    host: "smtp.gmail.com", // Use 'host' instead of 'service'
    port: 465, // Use 465 for SSL, 587 for TLS
    secure: true, 
      auth: {
        user: process.env.SMTP_USER, // Environment variables
        pass: process.env.SMTP_PASS,
      },
    },
  });


});

