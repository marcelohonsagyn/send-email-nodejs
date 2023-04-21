const nodeMailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')


const sendEmailEthereal = async (req, res) => {

    const testAccount = nodeMailer.createTestAccount();

    const transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'matteo.wilderman86@ethereal.email',
            pass: 'zUCNwn3YcSrBbUZ1hK'
        }
    });

    let info = await transporter.sendMail({
        from: 'Codding Addict <marcelohonsa@gmail.com>',
        to: 'marcelohonsa@gmail.com',
        subject: 'Hello NodeJS',
        html: '<h2>Send Emails with NodeJS</h2>',
    })

    res.json(info)
}


const sendEmail = async (req, res) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: 'marcelohonsa@gmail.com',
        from: 'learncodeetutorial@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, event with Node.js</strong>'
    }

    const info = await sgMail.send(msg);

    res.json(info);
}

module.exports = sendEmail;