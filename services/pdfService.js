const path = require("path");

function header(doc, anfrage, random, gender, vorname, nachname) {
    doc.fillColor('#222')
        .font("Helvetica-Bold", 25)
        .text(`${anfrage}`, 200, 60, {align: 'right'})
        .moveDown(2)
        .font("Helvetica", 12)
        .text(`Anfragenummer: ${random} - Anfrage von: ${gender} ${vorname} ${nachname}`, 50, 125)
        .moveDown(1)
}

function customerData(doc, vorname, nachname, email, nummer) {
    doc.font("Helvetica-Bold", 12)
        .text("Kundendaten: ")
        .moveDown(0.5)
        .font("Helvetica", 12)
        .text(`Name: ${vorname} ${nachname}`)
        .moveDown(0.5)
        .text(`E-Mail: ${email}`)
        .moveDown(0.5)
        .text(`Telefonnummer: ${nummer}`)
        .moveDown(2)
}

function date(doc, date) {
    doc.font("Helvetica-Bold", 12)
        .text("Datum des Umzuges: ")
        .moveDown(0.5)
        .font("Helvetica", 12)
        .text(`${date}`)
        .moveDown(2)
}

function details(doc, strasse1, hn1, plz1, ort1, umzug_von, zimmer, flaeche, strasse2, hn2, plz2, ort2, umzug_nach, kosten) {
    doc.font("Helvetica-Bold", 12)
        .text("Umzugsdetails: ")
        .moveDown(0.5)
        .font("Helvetica", 12)
        .text(`Straße / Hausnummer: ${strasse1} ${hn1}`)
        .moveDown(0.5)
        .text(`PLZ / Ort: ${plz1} ${ort1}`)
        .moveDown(0.5)
        .text(`Umzug von: ${umzug_von}`)
        .moveDown(0.5)
        .text(`Zimmer: ${zimmer}`)
        .moveDown(0.5)
        .text(`Fläche: ${flaeche}`)
        .moveDown(1)
        .text(`Straße / Hausnummer: ${strasse2} ${hn2}`)
        .moveDown(0.5)
        .text(`PLZ / Ort: ${plz2} ${ort2}`)
        .moveDown(0.5)
        .text(`Umzug nach: ${umzug_nach}`)
        .moveDown(0.5)
        .text(`Kostenübernahme: ${kosten}`)
        .moveDown(2)
}

function extraServices(doc, karton, moebil1, moebil2, kueche1, kueche2) {
    doc.font("Helvetica-Bold", 12)
        .text("Zusatzservice: ")
        .moveDown(0.5)
        .font("Helvetica", 12)
        .text(`Karton einpacken: ${karton}`)
        .moveDown(0.5)
        .text(`Möbel demontieren: ${moebil1}`)
        .moveDown(0.5)
        .text(`Möbel montieren: ${moebil2}`)
        .moveDown(0.5)
        .text(`Küche demontieren: ${kueche1}`)
        .moveDown(0.5)
        .text(`Küche montieren: ${kueche2}`)
        .moveDown(2)
}

function commentField(doc, comment) {
    doc.font("Helvetica-Bold", 12)
        .text("Bemerkung: ")
        .moveDown(0.5)
        .font("Helvetica", 12)
        .text(`${comment}`)
        .moveDown(2)
}

function dienstleistung(doc, dienst) {
    doc.font("Helvetica-Bold", 12)
        .text("Dienstleistung: ")
        .moveDown(0.5)
        .font("Helvetica", 12)
        .text(`${dienst}`)
        .moveDown(2)
}

function adresse(doc, adresse) {
    doc.font("Helvetica-Bold", 12)
        .text("Adresse: ")
        .moveDown(0.5)
        .font("Helvetica", 12)
        .text(`${adresse}`)
        .moveDown(2)
}

module.exports = {header, customerData, date, details, extraServices, commentField, dienstleistung, adresse};

