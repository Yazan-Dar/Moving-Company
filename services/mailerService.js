const mailerService = require("nodemailer");
const path = require("path");

function sendEmailUmzug(res, random) {
    let smtpTransportUmzug = mailerService.createTransport({
        host: '',
        port: 587,
        secure: false, // secure:true for port 465, secure:false for port 587
        starttls: {
            enable: true
        },
        secureConnection: true,
        auth: {
            user: '',
            pass: '',
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptionsUmzug = {
        from: '',
        to: '',
        subject: 'Umzugsanfrage',
        text: 'Sie haben eine neue Umzugsanfrage erhalten',
        attachments: [
            {
                filename: `${random}.pdf`,
                path: path.join(__dirname, `../public/pdf/umzugsangebote/${random}.pdf`),
                contentType: 'application/pdf'
            }
        ]
    };

    smtpTransportUmzug.sendMail(mailOptionsUmzug, function (error, info) {
        if (error) {
            console.log(error);
            res.redirect('index');
        }
        else {
            console.log("Success");
            res.redirect('index');
        }
    });
}

function sendEmailDienstlestungen(res, random) {
    let smtpTransportDienstlestungen = mailerService.createTransport({
        host: '',
        port: 587,
        secure: false, // secure:true for port 465, secure:false for port 587
        starttls: {
            enable: true
        },
        secureConnection: true,
        auth: {
            user: '',
            pass: '',
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptionsDienstleistungen = {
        from: '',
        to: '',
        subject: 'Dienstleistungsanfrage',
        text: 'Sie haben eine neue Dienstleistungsanfrage erhalten',
        attachments: [
            {
                filename: `${random}.pdf`,
                path: path.join(__dirname, `../public/pdf/dienstleistungsangebote/${random}.pdf`),
                contentType: 'application/pdf'
            }
        ]
    };

    smtpTransportDienstlestungen.sendMail(mailOptionsDienstleistungen, function (error, info) {
        if (error) {
            console.log(error);
            res.redirect('index');
        }
        else {
            console.log("Success");
            res.redirect('index');
        }
    });
}

module.exports = { sendEmailUmzug, sendEmailDienstlestungen };
