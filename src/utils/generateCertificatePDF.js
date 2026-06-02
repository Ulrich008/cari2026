import { jsPDF } from 'jspdf';
import LOGO_UAC  from '../../public/assets/logo2.png';
import LOGO_CARI from '../../public/assets/cari.png';
import LOGO_ASDS from '../../public/assets/logo3.png';


/**
 * @param {Object} participant
 * @param {string} participant.fullName  - Name printed on the certificate
 */
export function generateCertificatePDF({ fullName }) {
  // Landscape A4
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'landscape' });

  const pageW = 297;
  const pageH = 210;
  const mL    = 18;
  const mR    = 18;
  const cW    = pageW - mL - mR;

  let y = 12;

  // ── Top gold rule ──────────────────────────────────────────────────────────
  doc.setDrawColor(184, 148, 56);   // gold
  doc.setLineWidth(1.2);
  doc.line(mL, y, pageW - mR, y);
  y += 8;

  // ── Logos ──────────────────────────────────────────────────────────────────
  const logoH   = 20;
  const logoGap = cW / 3;

  // UAC (left)
  doc.addImage(LOGO_UAC,  'PNG', mL, y, logoH, logoH);
  // CARI (centre)
  doc.addImage(LOGO_CARI, 'PNG', mL + logoGap + (logoGap - logoH) / 2, y, logoH, logoH);
  // ASDS (right)
  doc.addImage(LOGO_ASDS, 'PNG', pageW - mR - logoH, y, logoH, logoH);
  y += logoH + 10;

  // ── Title ──────────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(31, 78, 121);   // #1F4E79
  doc.text('CERTIFICATE OF PARTICIPATION', pageW / 2, y, { align: 'center' });
  y += 12;

  // ── Subtitle ───────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(12);
  doc.setTextColor(80, 80, 80);
  doc.text('This certificate is proudly presented to', pageW / 2, y, { align: 'center' });
  y += 14;

  // ── Participant name ───────────────────────────────────────────────────────
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(30);
  doc.setTextColor(0, 0, 0);
  doc.text(fullName, pageW / 2, y, { align: 'center' });
  y += 4;

  // Underline under name
  const nameW = doc.getTextWidth(fullName);
  doc.setDrawColor(100, 100, 100);
  doc.setLineWidth(0.4);
  doc.line(pageW / 2 - nameW / 2, y, pageW / 2 + nameW / 2, y);
  y += 12;

  // ── Body text ──────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(30, 30, 30);
  doc.text(
    'for participating in the 18th African Conference on Research in Computer Science and Applied Mathematics (CARI 2026).',
    pageW / 2, y, { align: 'center', maxWidth: cW }
  );
  y += 14;

  // ── Conference details (bold, centred) ─────────────────────────────────────
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(
    '18th African Conference on Research in Computer Science and Applied Mathematics (CARI 2026)',
    pageW / 2, y, { align: 'center' }
  );
  y += 6;
  doc.text(
    'October 21\u201324, 2026  \u2022  University of Abomey-Calavi  \u2022  Abomey-Calavi, Benin',
    pageW / 2, y, { align: 'center' }
  );
  y += 22;

  // ── Signature block (centred) ──────────────────────────────────────────────
  const sigX = pageW / 2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text('{Signature}', sigX, y, { align: 'center' });
  y += 7;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('S. Arnaud R. M. AHOUANDJINOU', sigX, y, { align: 'center' });
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.text('General Chair, CARI 2026', sigX, y, { align: 'center' });
  y += 10;

  // ── Bottom gold rule ───────────────────────────────────────────────────────
  doc.setDrawColor(184, 148, 56);
  doc.setLineWidth(1.2);
  doc.line(mL, pageH - 10, pageW - mR, pageH - 10);

  // ── Save ───────────────────────────────────────────────────────────────────
  const safeName = fullName.replace(/\s+/g, '_');
  doc.save(`CARI2026_Certificate_${safeName}.pdf`);
}