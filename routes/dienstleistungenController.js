const express = require('express');
const fs = require("fs");
const path = require("path");
const router = express.Router();
const mailerService = require("../services/mailerService");
const pdfService = require('../services/pdfService');
const PDFDocument = require("pdfkit");

router.get("/dienstleistungen/expressformular", function (req, res) {
    res.render("dienstleistungen/expressformular");
});

router.post("/dienstleistungen/expressformular", function (req, res) {
    let random2 = Math.floor(Math.random() * 1000000000);
    const doc2 = new PDFDocument({size: 'A4'});
    doc2.pipe(fs.createWriteStream(path.join(__dirname, `../public/pdf/dienstleistungsangebote/${random2}.pdf`)));
    pdfService.header(doc2, "Dienstleistungsanfrage", random2, req.body.genderdienst, req.body.vornamedienst, req.body.nachnamedienst);
    pdfService.customerData(doc2, req.body.vornamedienst, req.body.nachnamedienst, req.body.emaildienst, req.body.telefondienst);
    pdfService.dienstleistung(doc2, req.body.dienst);
    pdfService.adresse(doc2, req.body.addressdienst);
    doc2.end();
    mailerService.sendEmailDienstlestungen(res, random2);
});

module.exports = router;