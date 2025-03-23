export default async function mailRoutes(fastify) {
    if (!fastify.mailer) {
      console.error(" Fastify Mailer is NOT registered!");
      return;
    }
  
    //  Route for sending emails (Handles both Contact Us & Forgot Password)
    fastify.post("/send-mail", async (req, reply) => {
      const { type, to, subject, text, fullName, message } = req.body;
  
      console.log("Email Data:", { type, to, subject, text, fullName, message });
  
      // Check if required fields are provided
      if (type === "contact") {
        if (!fullName || !to || !message) {
          return reply.code(400).send({ error: "Missing required fields for Contact Us" });
        }
      } else if (type === "forgot-password") {
        if (!to || !text) {
          return reply.code(400).send({ error: "Missing required fields for Forgot Password" });
        }
      } else {
        return reply.code(400).send({ error: "Invalid email type" });
      }
  
      try {
        let emailContent = {};
  
        if (type === "contact") {
          emailContent = {
            to,
            subject: subject || "New Contact Us Inquiry", // Default subject
            text: `Full Name: ${fullName}\nEmail: ${to}\nMessage: ${message}`,
            html: `<p><strong>Full Name:</strong> ${fullName}</p>
                   <p><strong>Email:</strong> ${to}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
          };
        } else if (type === "forgot-password") {
          emailContent = {
            to,
            subject: subject || "Reset Your Password",
            text: `Click the following link to reset your password: ${text}`,
            html: `<p>Click <a href="${text}">here</a> to reset your password.</p>`,
          };
        }
  
        const info = await fastify.mailer.sendMail(emailContent);
  
        console.log("Email sent:", info);
        return reply.send({ success: "Email sent successfully", info });
      } catch (error) {
        console.error("Error sending email:", error);
        return reply.code(500).send({ error: "Email sending failed" });
      }
    });
  }
  