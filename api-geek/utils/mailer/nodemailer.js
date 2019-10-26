const nodemailer = require('nodemailer');

module.exports = function (destino, text) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'alexandercos14@gmail.com',
            pass: 'Alexander1498'
        }
    });

    const mailOptions = {
        from: 'test@gmail.com',
        to: destino,
        subject: "Verificación",
        html: `<p>${text}</p>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}