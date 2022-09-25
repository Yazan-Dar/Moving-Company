const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require('fs');
const multer = require("multer");

const mailerService = require("../services/mailerService");
const pdfService = require('../services/pdfService');
const PDFDocument = require('pdfkit');

const randomstring = require("randomstring");
const imgRandomName = randomstring.generate();


// Upload image Handling
let storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: (req, file, cb) => {
        cb(null, imgRandomName + file.originalname)
    }
});

// Upload files
let upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        checkImgType(file, cb);
    }
});


// check img type
function checkImgType(file, cb) {
    const imgTypes = /png|gif|jpeg|jpg|bmp/;
    const extname = imgTypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
        return cb(null, true);
    } else {
        cb('Please add only image with types: PNG,GIF,JPG/JPEG,BMP');
    }
}

let date;

router.get('/umzug/umzugsangebot', (req, res) => {
    res.render('umzug/umzugsangebot');
});

router.post('/umzug/index', (req, res) => {
    if (req.body.date === undefined || req.body.date === "") {
        date = "Flexibel";
        console.log(date);
    } else {
        date = "Am: " + req.body.date;
        console.log(date);
    }
    res.redirect('umzugsangebot');
});

router.post('/umzug/umzugsangebot', upload.array("images"), (req, res) => {
    let random = Math.floor(Math.random() * 1000000000);
    const doc = new PDFDocument({size: 'A4'});
    doc.pipe(fs.createWriteStream(path.join(__dirname, `../public/pdf/umzugsangebote/${random}.pdf`)));
    pdfService.header(doc, "Umzugsanfrage", random, req.body.gender, req.body.vorname, req.body.nachname);
    pdfService.customerData(doc, req.body.vorname, req.body.nachname, req.body.email, req.body.telefon);
    pdfService.date(doc, date);
    pdfService.details(doc, req.body.strasse1, req.body.hausnummer1, req.body.plz1, req.body.ort1, req.body.umzug_von, req.body.zimmer, req.body.flaeche, req.body.strasse2, req.body.hausnummer2, req.body.plz2, req.body.ort2, req.body.umzug_nach, req.body.kosten);
    pdfService.extraServices(doc, req.body.kartoneinpacken, req.body.moebeldemontieren, req.body.moebelmontieren, req.body.kuechedemontieren, req.body.kuechemontieren);
    pdfService.commentField(doc, req.body.bemerkung);
    doc.addPage()
    let n = 75;
    for (let i = 0; i < req.files.length; i++) {
        doc.image(path.join(__dirname, `../public/uploads/${req.files[i].filename}`),
            190, n, {fit: [280, 250], align: 'center', valign: 'center'})
        n += 220;
        if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14 || i === 17 || i === 20 || i === 23 || i === 26) {
            doc.addPage()
            n = 75;
        }
    }
    doc.end();
    mailerService.sendEmailUmzug(res, random);
});

module.exports = router;