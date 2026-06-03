// src/utils/generateInvitationPDF.js
// Les logos sont dans public/assets/ — chargés via fetch pour compatibilité Vite
import { jsPDF } from 'jspdf';

async function loadImageAsDataURL(url) {
  const res  = await fetch(url);
  const blob = await res.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function wrapText(doc, text, maxWidth) {
  return doc.splitTextToSize(text, maxWidth);
}

function hRule(doc, y, color = [200, 200, 200]) {
  doc.setDrawColor(...color);
  doc.setLineWidth(0.3);
  doc.line(20, y, 190, y);
}

// ── Main generator ────────────────────────────────────────────────────────────

export async function generateInvitationPDF({ fullName, affiliation, nationality, passportNumber = 'N/A' }) {
  // Pré-charger les logos depuis /public/assets/
  const [uacData, cariData, asdsData] = await Promise.all([
    loadImageAsDataURL('/assets/logo2.png'),
    loadImageAsDataURL('/assets/cari.png'),
    loadImageAsDataURL('/assets/logo3.png'),
  ]);

  const doc   = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageW = 210;
  const mL    = 20;
  const mR    = 20;
  const cW    = pageW - mL - mR;
  let y       = 14;

  // ── Logos ─────────────────────────────────────────────────────────────────
  const logoH   = 18;
  const logoGap = cW / 3;
  doc.addImage(uacData,  'PNG', mL, y, logoH, logoH);
  doc.addImage(cariData, 'PNG', mL + logoGap + (logoGap - logoH) / 2, y, logoH, logoH);
  doc.addImage(asdsData, 'PNG', pageW - mR - logoH - 2, y, logoH, logoH);
  y += logoH + 5;

  hRule(doc, y);
  y += 5;

  // ── Main title ────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(17);
  doc.setTextColor(31, 78, 121);
  doc.text('CARI 2026 – Conference Invitation Letter', pageW / 2, y, { align: 'center' });
  y += 6;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(64, 64, 64);
  doc.text('18th African Conference on Research in Computer Science and Applied Mathematics', pageW / 2, y, { align: 'center' });
  y += 4.5;
  doc.text('October 21–24, 2026  •  University of Abomey-Calavi  •  Abomey-Calavi, Benin', pageW / 2, y, { align: 'center' });
  y += 6;

  hRule(doc, y, [220, 220, 220]);
  y += 6;

  // ── Info block ────────────────────────────────────────────────────────────
  const labelW = 36;
  const valueX = mL + labelW;
  const lineH  = 5.5;

  const fields = [
    ['Full Name',       fullName],
    ['Affiliation',     affiliation],
    ['Nationality',     nationality],
    ['Passport Number', passportNumber],
  ];

  fields.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(label + ':', mL, y);
    doc.setFont('helvetica', 'normal');
    doc.text(value, valueX, y);
    y += lineH;
  });

  y += 4;

  // ── Subject line ──────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const subjectText = 'Subject: Invitation to attend CARI 2026 Conference – Abomey-Calavi, Benin';
  doc.text(subjectText, mL, y);
  const subLen = doc.getTextWidth('Subject');
  doc.setDrawColor(0);
  doc.setLineWidth(0.3);
  doc.line(mL, y + 0.8, mL + subLen, y + 0.8);
  y += 8;

  // ── Body paragraphs ───────────────────────────────────────────────────────
  const bodyLineH = 5.2;

  function renderMixedLine(line, lineY, segments) {
    let x         = mL;
    const boldParts = segments.filter(s => s.bold).map(s => s.text.trim()).filter(Boolean);

    let tokens = [{ text: line, bold: false }];
    boldParts.forEach(bp => {
      const newTokens = [];
      tokens.forEach(tok => {
        if (tok.bold) { newTokens.push(tok); return; }
        const idx = tok.text.indexOf(bp);
        if (idx === -1) { newTokens.push(tok); return; }
        if (idx > 0) newTokens.push({ text: tok.text.slice(0, idx), bold: false });
        newTokens.push({ text: bp, bold: true });
        const after = tok.text.slice(idx + bp.length);
        if (after) newTokens.push({ text: after, bold: false });
      });
      tokens = newTokens;
    });

    tokens.forEach(tok => {
      doc.setFont('helvetica', tok.bold ? 'bold' : 'normal');
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(tok.text, x, lineY);
      x += doc.getTextWidth(tok.text);
    });
  }

  function addParagraph(segments, extraAfter = 5) {
    const plain = segments.map(s => s.text).join('');
    const lines = wrapText(doc, plain, cW);
    lines.forEach(line => {
      renderMixedLine(line, y, segments);
      y += bodyLineH;
    });
    y += extraAfter - bodyLineH;
  }

  addParagraph([
    { text: 'On behalf of the organizing committee, we are pleased to invite ' },
    { text: fullName, bold: true },
    { text: ' to participate in the ' },
    { text: '18th African Conference on Research in Computer Science and Applied Mathematics', bold: true },
    { text: ' (CARI 2026), which will be held from ' },
    { text: 'October 21 to 24, 2026', bold: true },
    { text: ' at the ' },
    { text: 'University of Abomey-Calavi', bold: true },
    { text: ' in Benin.' },
  ]);

  addParagraph([
    { text: 'CARI is the flagship conference of the ' },
    { text: 'African Society in Digital Science', bold: true },
    { text: ' (ASDS). It brings together researchers, academics, engineers, and practitioners from Africa and around the world to discuss recent advances in computer science, applied mathematics, artificial intelligence, data science, scientific computing, and digital technologies.' },
  ]);

  addParagraph([
    { text: 'The conference program will include keynote talks, technical sessions, poster presentations, workshops, tutorials, and panel discussions focused on both fundamental and applied research addressing African challenges in areas such as agriculture, healthcare, education, transportation, environment, and logistics.' },
  ]);

  addParagraph([
    { text: fullName, bold: true },
    { text: ' has successfully registered for the conference and is invited to attend the event in person in ' },
    { text: 'Abomey-Calavi', bold: true },
    { text: ', Benin. We kindly request the competent authorities to facilitate the issuance of any required travel documents or visa to enable participation in this scientific event.' },
  ]);

  addParagraph([
    { text: 'Please note that conference participants are responsible for their own travel, accommodation, insurance, and related expenses unless otherwise specified by the organizers.' },
  ]);

  // ── Website line ──────────────────────────────────────────────────────────
  const webPre  = 'For additional information about the conference, please visit the official website: ';
  const webUrl  = 'https://cari-conf.bj/';
  const webLines = wrapText(doc, webPre + webUrl, cW);
  webLines.forEach(line => {
    const urlIdx = line.indexOf('https://');
    if (urlIdx === -1) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(line, mL, y);
    } else {
      const before = line.slice(0, urlIdx);
      const url    = line.slice(urlIdx);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(before, mL, y);
      const bW = doc.getTextWidth(before);
      doc.setTextColor(17, 85, 204);
      doc.text(url, mL + bW, y);
      doc.link(mL + bW, y - 3.5, doc.getTextWidth(url), 4.5, { url: webUrl });
    }
    y += bodyLineH;
  });
  y += 2;

  // ── Contact line ──────────────────────────────────────────────────────────
  const contactEmail = 'caribj2026@gmail.com';
  const contactPhone = '+(229) 01 63 70 51 53';
  const contactFull  =
    'Should you require any further information, please do not hesitate to contact ' +
    'the conference organizing committee at ' + contactEmail +
    ' or by phone: ' + contactPhone;

  const contactLines = wrapText(doc, contactFull, cW);
  contactLines.forEach(line => {
    let x      = mL;
    let tokens = [{ text: line }];

    [
      { text: contactEmail, color: [17, 85, 204] },
      { text: contactPhone, color: [17, 85, 204] },
    ].forEach(({ text, color }) => {
      tokens = tokens.flatMap(tok => {
        if (tok.colored) return [tok];
        const idx = tok.text.indexOf(text);
        if (idx === -1) return [tok];
        const result = [];
        if (idx > 0) result.push({ text: tok.text.slice(0, idx) });
        result.push({ text, colored: true, color });
        const after = tok.text.slice(idx + text.length);
        if (after) result.push({ text: after });
        return result;
      });
    });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    tokens.forEach(({ text, colored, color }) => {
      doc.setTextColor(...(colored ? color : [0, 0, 0]));
      doc.text(text, x, y);
      x += doc.getTextWidth(text);
    });
    y += bodyLineH;
  });

  y += 6;

  // ── Closing ───────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('Yours sincerely,', mL, y);
  y += 14;

  doc.setFont('helvetica', 'bold');
  doc.text('S. Arnaud R. M. AHOUANDJINOU', mL, y);
  y += 5.5;
  doc.setFont('helvetica', 'normal');
  doc.text('CARI 2026 General Chair', mL, y);
  y += 10;

  // ── Footer ────────────────────────────────────────────────────────────────
  hRule(doc, y, [200, 200, 200]);
  y += 4;
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text(
    'CARI 2026  •  University of Abomey-Calavi  •  Abomey-Calavi, Benin',
    pageW / 2, y, { align: 'center' }
  );

  // ── Save ──────────────────────────────────────────────────────────────────
  const safeName = fullName.replace(/\s+/g, '_');
  doc.save(`CARI2026_Invitation_${safeName}.pdf`);
}
