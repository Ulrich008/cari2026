import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

/* ─────────────────────────── DATA ─────────────────────────── */
const programData = {
  title: "CARI'2026 PROGRAM",
  subtitle: "Program at a Glance — Cotonou, Benin — October 21–24, 2026",
  intro: [
    "The CARI'2026 program features a rich schedule of workshops, keynote speeches, parallel sessions, and special events. The conference brings together researchers and practitioners from across Africa and the world to share cutting-edge developments in computer science and applied mathematics."
  ],
  days: [
    {
      id: "day1",
      label: "Day 1 — October 21, 2026",
      sub: "Workshops & Welcome",
      sessions: [
        { time: "8:30–10:00",  type: "parallel", slots: [{ label: "DAAfrica Workshop – Part 1", track: "A" }, { label: "CybSecAfrica Workshop – Part 1", track: "B" }, { label: "ROM – Part 1", track: "C" }] },
        { time: "10:00–10:30", type: "break",    label: "Coffee Break" },
        { time: "10:30–12:00", type: "parallel", slots: [{ label: "DAAfrica Workshop – Part 2", track: "A" }, { label: "CybSecAfrica Workshop – Part 2", track: "B" }, { label: "ROM – Part 2", track: "C" }] },
        { time: "12:00–13:00", type: "parallel", slots: [{ label: "NLP-ARL Workshop – Part 1", track: "A" }, { label: "CybSecAfrica Workshop – Part 3", track: "B" }, { label: "ROM – Part 3", track: "C" }] },
        { time: "13:00–14:00", type: "break",    label: "Lunch" },
        { time: "14:00–16:00", type: "parallel", slots: [{ label: "NLP-ARL Workshop – Part 2", track: "A" }, { label: "CybSecAfrica Workshop – Part 4", track: "B" }, { label: "ROM – Part 4", track: "C" }] },
        { time: "16:00–16:30", type: "break",    label: "Break" },
        { time: "16:00–18:00", type: "plenary",  label: "International Cooperation Session" },
        { time: "18:00–19:00", type: "plenary",  label: "Welcoming Session" },
      ],
      legend: true,
    },
    {
      id: "day2",
      label: "Day 2 — October 22, 2026",
      sub: "Official Launch & Parallel Sessions",
      sessions: [
        { time: "8:30–9:30",   type: "plenary",  label: "Official Launch Ceremony of CARI'2026" },
        { time: "9:30–10:00",  type: "break",    label: "Coffee Break" },
        { time: "10:00–12:00", type: "plenary",  label: "Panel IA" },
        { time: "12:00–13:00", type: "plenary",  label: "Keynote 1" },
        { time: "13:00–14:00", type: "break",    label: "Lunch" },
        { time: "14:00–16:00", type: "parallel", slots: [{ label: "Parallel Session 1-1", track: "A" }, { label: "Parallel Session 1-2", track: "B" }, { label: "Parallel Session 1-3", track: "C" }] },
        { time: "16:00–16:30", type: "break",    label: "Coffee Break" },
        { time: "16:00–18:00", type: "parallel", slots: [{ label: "Parallel Session 2-1", track: "A" }, { label: "Parallel Session 2-2", track: "B" }, { label: "Parallel Session 2-3", track: "C" }] },
      ],
      legend: true,
    },
    {
      id: "day3",
      label: "Day 3 — October 23, 2026",
      sub: "Keynote, Tutorials & Gala Dinner",
      sessions: [
        { time: "8:30–9:30",   type: "plenary",  label: "Keynote 2" },
        { time: "9:30–10:00",  type: "break",    label: "Coffee Break" },
        { time: "10:00–12:00", type: "parallel", slots: [{ label: "Tutorial 1", track: "A" }, { label: "Tutorial 2", track: "B" }, { label: "Tutorial 3", track: "C" }] },
        { time: "12:00–13:00", type: "parallel", slots: [{ label: "Parallel Session 3-1", track: "A" }, { label: "Parallel Session 3-2", track: "B" }, { label: "Parallel Session 3-3", track: "C" }] },
        { time: "13:00–14:00", type: "break",    label: "Lunch" },
        { time: "14:00–16:00", type: "parallel", slots: [{ label: "Parallel Session 4-1", track: "A" }, { label: "Parallel Session 4-2", track: "B" }, { label: "Parallel Session 4-3", track: "C" }] },
        { time: "16:00–16:30", type: "break",    label: "Coffee Break" },
        { time: "16:00–18:00", type: "parallel", slots: [{ label: "Parallel Session 5-1", track: "A" }, { label: "Parallel Session 5-2", track: "B" }, { label: "Parallel Session 5-3", track: "C" }] },
        { time: "20:00–22:00", type: "special",  label: "🍽 Gala Dinner" },
      ],
      legend: true,
    },
    {
      id: "day4",
      label: "Day 4 — October 24, 2026",
      sub: "Closing & Assembly",
      sessions: [
        { time: "8:30–9:30",   type: "plenary",  label: "Keynote 3" },
        { time: "9:30–10:00",  type: "break",    label: "Coffee Break" },
        { time: "10:00–12:00", type: "parallel", slots: [{ label: "Parallel Session 6-1", track: "A" }, { label: "Parallel Session 6-2", track: "B" }, { label: "Parallel Session 6-3", track: "C" }] },
        { time: "12:00–13:00", type: "plenary",  label: "Closing Session" },
        { time: "13:00–14:00", type: "break",    label: "Lunch & Debrief (Committees only)" },
        { time: "14:00–16:00", type: "plenary",  label: "CARI Steering Committee & ASDS General Assembly" },
      ],
      legend: false,
    },
  ],
  navButtons: [
    { id: "day1", label: "Day 1" },
    { id: "day2", label: "Day 2" },
    { id: "day3", label: "Day 3" },
    { id: "day4", label: "Day 4" },
  ],
};

/* ─────────────────────── TRACK STYLES ─────────────────────── */
const trackStyle = {
  A: { bg: "#eff6ff", border: "#3b82f6", text: "#1e40af" },
  B: { bg: "#faf5ff", border: "#8b5cf6", text: "#6b21a8" },
  C: { bg: "#fff7ed", border: "#f97316", text: "#9a3412" },
};

/* ─────────────────────── SESSION ROW ─────────────────────── */
const SessionRow = ({ session }) => {
  if (session.type === "break") {
    return (
      <div className="flex gap-2 py-0.5">
        <span className="w-[100px] flex-shrink-0 text-xs text-gray-400 pt-1.5 font-mono text-right pr-2">
          {session.time}
        </span>
        <div className="flex-1">
          <div className="rounded px-3 py-1.5 text-xs leading-relaxed font-normal border-l-2 border-gray-400 bg-gray-100 text-gray-600">
            {session.label}
          </div>
        </div>
      </div>
    );
  }

  if (session.type === "plenary") {
    return (
      <div className="flex gap-2 py-0.5">
        <span className="w-[100px] flex-shrink-0 text-xs text-gray-400 pt-1.5 font-mono text-right pr-2">
          {session.time}
        </span>
        <div className="flex-1">
          <div className="rounded px-3 py-1.5 text-xs leading-relaxed font-semibold border-l-2 border-green-600 bg-green-50 text-green-800">
            {session.label}
          </div>
        </div>
      </div>
    );
  }

  if (session.type === "special") {
    return (
      <div className="flex gap-2 py-0.5">
        <span className="w-[100px] flex-shrink-0 text-xs text-gray-400 pt-1.5 font-mono text-right pr-2">
          {session.time}
        </span>
        <div className="flex-1">
          <div className="rounded px-3 py-1.5 text-xs leading-relaxed font-semibold border-l-2 border-yellow-500 bg-yellow-50 text-yellow-800">
            {session.label}
          </div>
        </div>
      </div>
    );
  }

  if (session.type === "parallel") {
    return (
      <div className="flex gap-2 py-0.5">
        <span className="w-[100px] flex-shrink-0 text-xs text-gray-400 pt-1.5 font-mono text-right pr-2">
          {session.time}
        </span>
        <div className="flex-1 grid grid-cols-3 gap-1.5">
          {session.slots.map((slot, i) => {
            const s = trackStyle[slot.track] || trackStyle.A;
            return (
              <div
                key={i}
                className="rounded px-3 py-1.5 text-xs leading-relaxed font-semibold"
                style={{ borderLeft: `3px solid ${s.border}`, background: s.bg, color: s.text }}
              >
                {slot.label}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

/* ─────────────────────── LEGEND ─────────────────────── */
const Legend = () => (
  <div className="flex flex-wrap gap-2.5 mb-2.5">
    {[
      { label: "Track A", color: "#3b82f6" },
      { label: "Track B", color: "#8b5cf6" },
      { label: "Track C", color: "#f97316" },
      { label: "Plenary", color: "#16a34a" },
    ].map(({ label, color }) => (
      <div key={label} className="flex items-center gap-1 text-xs text-gray-500">
        <div className="w-2.5 h-2.5 rounded-sm" style={{ background: color }} />
        {label}
      </div>
    ))}
  </div>
);

/* ─────────────────────── MAIN COMPONENT ─────────────────────── */
const Program = () => {
  const [openSections, setOpenSections] = useState(
    programData.days.reduce((acc, day) => { acc[day.id] = true; return acc; }, {})
  );

  const toggleSection = (id) =>
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Navigation />

      <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-4xl font-bold text-red-600 mb-6 uppercase">
            {programData.title}
          </h1>

          <p className="text-gray-600 mb-8 text-base">
            {programData.subtitle}
          </p>

          <div className="mb-8 space-y-4 text-gray-900 leading-relaxed text-justify">
            {programData.intro.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {programData.days.map((day) => (
            <div key={day.id} id={day.id} className="mb-4">
              <button
                onClick={() => toggleSection(day.id)}
                className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <h2 className="text-lg md:text-xl font-bold text-green-600">
                    {day.label}
                  </h2>
                  {day.sub && (
                    <p className="text-sm text-gray-500 mt-0.5">{day.sub}</p>
                  )}
                </div>
                <svg
                  className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                    openSections[day.id] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openSections[day.id] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-100 p-6">
                  {day.legend && <Legend />}
                  <div className="flex flex-col gap-1">
                    {day.sessions.map((session, idx) => (
                      <SessionRow key={idx} session={session} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-12 pt-6 border-t border-gray-300">
            <div className="flex flex-wrap justify-center gap-4">
              {programData.navButtons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => scrollToSection(button.id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Program;
