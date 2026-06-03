// src/utils/generateCertificatePDF.js
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

/**
 * @param {Object} participant
 * @param {string} participant.fullName  - Name printed on the certificate
 */
export async function generateCertificatePDF({ fullName }) {
  // Pré-charger les logos depuis /public/assets/
  const [uacData, cariData, asdsData] = await Promise.all([
    loadImageAsDataURL('/assets/logo2.png'),
    loadImageAsDataURL('/assets/cari.png'),
    loadImageAsDataURL('/assets/logo3.png'),
  ]);

  // Landscape A4
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'landscape' });

  const pageW = 297;
  const pageH = 210;
  const mL    = 18;
  const mR    = 18;
  const cW    = pageW - mL - mR;

  let y = 12;

  // Top gold rule
  doc.setDrawColor(184, 148, 56);
  doc.setLineWidth(1.2);
  doc.line(mL, y, pageW - mR, y);
  y += 8;

  // Logos
  const logoH   = 20;
  const logoGap = cW / 3;

  doc.addImage(uacData,  'PNG', mL, y, logoH, logoH);
  doc.addImage(cariData, 'PNG', mL + logoGap + (logoGap - logoH) / 2, y, logoH, logoH);
  doc.addImage(asdsData, 'PNG', pageW - mR - logoH, y, logoH, logoH);
  y += logoH + 10;

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(31, 78, 121);
  doc.text('CERTIFICATE OF PARTICIPATION', pageW / 2, y, { align: 'center' });
  y += 12;

  // Subtitle
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(12);
  doc.setTextColor(80, 80, 80);
  doc.text('This certificate is proudly presented to', pageW / 2, y, { align: 'center' });
  y += 14;

  // Participant name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(30);
  doc.setTextColor(0, 0, 0);
  doc.text(fullName, pageW / 2, y, { align: 'center' });
  y += 4;

  const nameW = doc.getTextWidth(fullName);
  doc.setDrawColor(100, 100, 100);
  doc.setLineWidth(0.4);
  doc.line(pageW / 2 - nameW / 2, y, pageW / 2 + nameW / 2, y);
  y += 12;

  // Body text
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(30, 30, 30);
  doc.text(
    'for participating in the 18th African Conference on Research in Computer Science and Applied Mathematics (CARI 2026).',
    pageW / 2, y, { align: 'center', maxWidth: cW }
  );
  y += 14;

  // Conference details
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(
    '18th African Conference on Research in Computer Science and Applied Mathematics (CARI 2026)',
    pageW / 2, y, { align: 'center' }
  );
  y += 6;
  doc.text(
    'October 21–24, 2026  •  University of Abomey-Calavi  •  Abomey-Calavi, Benin',
    pageW / 2, y, { align: 'center' }
  );
  y += 22;

  // Signature block
  const sigX = pageW / 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text('{Signature}', sigX, y, { align: 'center' });
  y += 7;
  doc.text('S. Arnaud R. M. AHOUANDJINOU', sigX, y, { align: 'center' });
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.text('General Chair, CARI 2026', sigX, y, { align: 'center' });

  // Bottom gold rule
  doc.setDrawColor(184, 148, 56);
  doc.setLineWidth(1.2);
  doc.line(mL, pageH - 10, pageW - mR, pageH - 10);

  const safeName = fullName.replace(/\s+/g, '_');
  doc.save(`CARI2026_Certificate_${safeName}.pdf`);
}
