const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/send-email", (req, res) => {
  const { name, email, product, feedback } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourgmail@gmail.com",        // 🔐 your Gmail
      pass: "your_app_password"           // 🔐 Use Gmail App Password
    },
  });

  const mailOptions = {
    from: "yourgmail@gmail.com",
    to: email,
    subject: "Merci pour votre retour - Pureté Boudah",
    text: `Bonjour ${name},\n\nMerci d’avoir testé notre produit (${product}).\n\nVotre avis : "${feedback}"\n\nCordialement,\nL'équipe Pureté Boudah`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send email.");
    } else {
      console.log("Email sent:", info.response);
      res.send("Email sent successfully.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
