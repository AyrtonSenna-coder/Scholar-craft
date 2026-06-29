import React, { useState, useEffect } from "react";
import {
  X, Menu, Check, Plus, Minus,
  Shield, Clock, Microscope, GraduationCap,
  PenLine, Pen, ClipboardList, BarChart2, Target, Globe,
  Bot, RefreshCw, Star, Mail, MessageCircle, Phone,
  ArrowRight, Award, Users, Lock,
} from "lucide-react";

const C = {
  forest950: "#071812",
  forest900: "#0D2B1F",
  forest700: "#163D2C",
  forest500: "#1E5038",
  amber500: "#F5A623",
  amber300: "#F9C264",
  cream50: "#FAF7F2",
  cream100: "#F0EBE2",
  sage500: "#5C7A6B",
  sage300: "#8EA99A",
  ink: "#1A1A1A",
  gray500: "#6B7280",
  white: "#FFFFFF",
};

const ANIMATIONS = `
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
  @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
  @keyframes wa-pulse { 0%, 100% { box-shadow: 0 4px 24px rgba(37,211,102,0.45); } 50% { box-shadow: 0 4px 40px rgba(37,211,102,0.75); } }
  .marquee-track { animation: marquee 36s linear infinite; white-space: nowrap; display: flex; }
  .blink { animation: blink 1.8s ease-in-out infinite; }
  .float { animation: float 7s ease-in-out infinite; }
  .wa-btn { animation: wa-pulse 2.5s ease-in-out infinite; }
  * { scrollbar-width: none; -ms-overflow-style: none; }
  *::-webkit-scrollbar { display: none; }
  .sc-nav-link { position: relative; color: rgba(255,255,255,0.72); font-size: 14px; font-weight: 500; text-decoration: none; padding-bottom: 4px; }
  .sc-nav-link::after { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 0; height: 2px; background: #F5A623; transition: width 0.22s ease; border-radius: 1px; }
  .sc-nav-link:hover { color: #fff; }
  .sc-nav-link:hover::after { width: 60%; }
  .sc-svc-card { background: #FAF7F2; border: 1px solid #F0EBE2; border-radius: 22px; padding: 32px 28px; box-shadow: 0 2px 8px rgba(13,43,31,.08); position: relative; overflow: hidden; transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .sc-svc-card:hover { transform: translateY(-5px); box-shadow: 0 6px 24px rgba(13,43,31,.13); }
  .sc-svc-card .accent-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(to right, #0D2B1F, #5C7A6B); transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }
  .sc-svc-card:hover .accent-bar { transform: scaleX(1); }
  .sc-why-card { transition: transform 0.25s ease, background 0.25s ease; }
  .sc-why-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.09) !important; }
  .sc-contact-card { transition: transform 0.2s ease, background 0.2s ease; }
  .sc-contact-card:hover { transform: translateX(5px); background: rgba(255,255,255,0.10) !important; }
  .sc-footer-link { font-size: 14px; color: rgba(255,255,255,0.48); text-decoration: none; display: block; margin-bottom: 10px; transition: color 0.18s; }
  .sc-footer-link:hover { color: #F5A623; }
  .sc-btn-primary { background: #F5A623; color: #0D2B1F; border: none; border-radius: 14px; font-weight: 700; font-size: 16px; cursor: pointer; transition: background 0.18s, transform 0.18s, box-shadow 0.18s; }
  .sc-btn-primary:hover { background: #F9C264; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(245,166,35,0.32); }
  .sc-btn-ghost { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.25); border-radius: 14px; font-weight: 600; font-size: 16px; cursor: pointer; transition: border-color 0.18s, color 0.18s; }
  .sc-btn-ghost:hover { border-color: #F5A623; color: #F5A623; }
  input[type=range] { -webkit-appearance: none; appearance: none; height: 4px; border-radius: 2px; outline: none; cursor: pointer; width: 100%; }
  input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #F5A623; cursor: pointer; border: 3px solid #0D2B1F; }
  input[type=range]::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: #F5A623; cursor: pointer; border: 3px solid #0D2B1F; }
  .sc-field { width: 100%; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14); border-radius: 10px; padding: 12px 14px; color: #fff; font-size: 15px; outline: none; box-sizing: border-box; font-family: 'DM Sans', sans-serif; transition: border-color 0.18s, box-shadow 0.18s; }
  .sc-field:focus { border-color: #F5A623; box-shadow: 0 0 0 3px rgba(245,166,35,0.15); }
  .sc-field::placeholder { color: rgba(255,255,255,0.32); }
  select.sc-field { background-color: #163D2C; }
  select.sc-field option { background: #0D2B1F; color: #fff; }
  .sc-faq-answer { overflow: hidden; transition: max-height 0.35s ease, opacity 0.28s ease; }
`;

export default function App() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calcType, setCalcType] = useState("Essay");
  const [calcLevel, setCalcLevel] = useState("Undergrad");
  const [calcDeadlineIdx, setCalcDeadlineIdx] = useState(2);
  const [calcPages, setCalcPages] = useState(1);
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const deadlines = ["6h", "12h", "24h", "3d", "7d", "14d", "30d"];
  const basePx: Record<string, number> = { Essay: 15, Research: 18, Dissertation: 22, Editing: 10, Assignment: 12 };
  const lvlMx: Record<string, number> = { "High School": 1.0, Undergrad: 1.2, "Master's": 1.5, PhD: 1.8 };
  const dlMx = [2.5, 2.0, 1.7, 1.4, 1.2, 1.1, 1.0];
  const base = basePx[calcType] ?? 15;
  const lm = lvlMx[calcLevel] ?? 1.2;
  const dm = dlMx[calcDeadlineIdx];
  const totalPrice = (base * lm * dm * calcPages).toFixed(2);

  const toggleFaq = (i: number) => {
    setOpenFaqs((prev) => {
      const n = new Set(prev);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setTimeout(() => setFormState("success"), 2000);
  };

  const services = [
    { Icon: PenLine, name: "Essay Writing", desc: "From undergraduate essays to complex argumentative papers, crafted to your institution's exact standards.", items: ["Literary analysis", "Argumentative essays", "Reflective pieces", "Critical reviews"] },
    { Icon: Microscope, name: "Research Papers", desc: "Peer-reviewed quality research with proper methodology, original analysis, and accurate citations.", items: ["Literature reviews", "Empirical research", "Systematic reviews", "Annotated bibliographies"] },
    { Icon: GraduationCap, name: "Dissertation Support", desc: "End-to-end support for your thesis — from proposal through to final submission.", items: ["Full dissertations", "Chapter-by-chapter", "Proposal writing", "Data analysis"] },
    { Icon: Pen, name: "Editing & Proofreading", desc: "Expert editing that sharpens your argument, flow, and academic voice without changing your meaning.", items: ["Grammar & style", "Structure editing", "Citation formatting", "Plagiarism check"] },
    { Icon: ClipboardList, name: "Assignment Help", desc: "Clear, well-structured answers to any assignment brief, any subject, any level.", items: ["STEM assignments", "Business case briefs", "Law problem questions", "Psychology reports"] },
    { Icon: BarChart2, name: "Case Studies", desc: "In-depth analytical case studies with evidence-based conclusions and proper methodology.", items: ["Business analysis", "Clinical case studies", "Legal case analysis", "Marketing studies"] },
  ];

  const whyUs = [
    { Icon: Award, title: "PhD-Qualified Writers", body: "Every writer holds at least a Master's degree in their field. 60% hold PhDs. Matched by subject and institution.", stat: "340+", label: "expert writers", pct: 100 },
    { Icon: Shield, title: "100% Confidential", body: "Zero data sharing. No third-party tracking. Your order never leaves our secure encrypted system.", stat: "0", label: "data breaches ever", pct: 100 },
    { Icon: Clock, title: "On-Time Guarantee", body: "We have never missed a deadline in 8 years of operation. If we do, you receive a full refund.", stat: "100%", label: "on-time delivery", pct: 100 },
    { Icon: RefreshCw, title: "Unlimited Revisions", body: "Free revisions for 14 days after delivery. We keep working until you are completely satisfied.", stat: "14 days", label: "revision window", pct: 98 },
    { Icon: Users, title: "Direct Writer Access", body: "Message your assigned writer directly throughout. No middlemen, no delays, no surprises.", stat: "12 min", label: "avg response time", pct: 95 },
    { Icon: Lock, title: "Plagiarism-Free Work", body: "Every paper includes a Turnitin originality report. 100% original, written from scratch.", stat: "98%", label: "satisfaction rate", pct: 98 },
  ];

  const steps = [
    { n: "01", title: "Submit Requirements", body: "Fill in topic, deadline, level, and style. The whole brief takes under 90 seconds." },
    { n: "02", title: "Get Matched + Quoted", body: "We match you to the right expert and return a fixed quote within 15 minutes." },
    { n: "03", title: "Writer Builds Your Paper", body: "Direct messaging available throughout. You are never out of the loop." },
    { n: "04", title: "Review, Approve & Download", body: "Full revision window included. Download only when you are fully satisfied." },
  ];

  const testimonials = [
    { stars: 5, quote: "I was skeptical at first, but the quality completely blew me away. My supervisor even asked if I had hired a professional editor.", name: "Priya S.", meta: "MBA · India" },
    { stars: 5, quote: "The writer matched my university's exact citation style — something I hadn't even mentioned. That level of detail is rare.", name: "Tom B.", meta: "Law · United Kingdom" },
    { stars: 5, quote: "My dissertation came back with tracked changes explained in plain English. I actually understood what was improved and why.", name: "Aisha K.", meta: "PhD Candidate · UAE" },
    { stars: 5, quote: "Three writers on our course used ScholarCraft. We all got firsts. That speaks for itself.", name: "Daniel O.", meta: "BA Politics · Ireland" },
    { stars: 5, quote: "Delivered 6 hours early, formatted perfectly in APA 7th, and the bibliography was flawless. I would not go anywhere else.", name: "Sofia L.", meta: "MSc Psychology · Australia" },
  ];

  const faqs = [
    { q: "How is pricing calculated?", a: "Pricing depends on academic level, deadline, and paper type. Use our instant calculator above to see your exact price — no sign-up required." },
    { q: "Can you handle a 6-hour deadline?", a: "Yes. We have writers available 24/7 for urgent orders. Rush orders carry a deadline multiplier, shown transparently in your quote." },
    { q: "Is my information confidential?", a: "Absolutely. We use end-to-end encryption and never share personal data with third parties. Your order exists only between you and your assigned writer." },
    { q: "What referencing styles do you support?", a: "All major styles: APA, MLA, Harvard, Chicago, OSCOLA, Vancouver, IEEE, and more. Specify in your order brief and it is handled." },
    { q: "How do free revisions work?", a: "You have 14 days from delivery to request revisions. Send your notes and the writer revises within the agreed timeframe — at no extra cost." },
    { q: "What payment methods are accepted?", a: "We accept all major cards (Visa, Mastercard, Amex), PayPal, and bank transfer. All payments processed securely via Stripe." },
    { q: "Is the paper checked for plagiarism?", a: "Yes. Every order includes a Turnitin originality report at no additional cost. We guarantee 0% plagiarism on all delivered work." },
    { q: "Can I communicate with my writer?", a: "Yes. Our platform includes a direct messaging feature. You can message your writer at any point — and they respond fast, typically within 12 minutes." },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.cream50, color: C.ink }}>
      <style>{ANIMATIONS}</style>

      {/* ── ANNOUNCEMENT RIBBON ── */}
      {bannerVisible && (
        <div style={{ background: C.amber500, height: 44, position: "relative" }} className="flex items-center justify-center px-4">
          <div className="flex items-center gap-2">
            <span className="blink" style={{ width: 8, height: 8, borderRadius: "50%", background: C.white, display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: C.forest900 }}>
              Limited slots this month — mention <strong>SCHOLAR10</strong> for 10% off
            </span>
            <a href="#contact" style={{ color: C.forest900, fontWeight: 700, fontSize: 13, textDecoration: "underline", marginLeft: 6 }}>
              Claim now →
            </a>
          </div>
          <button onClick={() => setBannerVisible(false)} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: C.forest900, opacity: 0.7, display: "flex", alignItems: "center" }}>
            <X size={16} />
          </button>
        </div>
      )}

      {/* ── NAVIGATION ── */}
      <nav style={{
        background: "rgba(13,43,31,0.97)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        boxShadow: navScrolled ? "0 6px 24px rgba(13,43,31,.14)" : "none",
        position: "sticky", top: 0, zIndex: 100, height: 68,
        transition: "box-shadow 0.3s ease",
      }} className="flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
            <div style={{ width: 8, height: 8, background: C.amber500, borderRadius: 2 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: C.white }}>
              Scholar<span style={{ color: C.amber500 }}>Craft</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Services", "Why Us", "Process", "Reviews", "FAQ"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="sc-nav-link">{l}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button style={{ border: "1px solid rgba(255,255,255,0.28)", color: C.white, background: "transparent", height: 36, padding: "0 18px", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
              Log In
            </button>
            <a href="#contact">
              <button style={{ background: C.amber500, color: C.forest900, height: 36, padding: "0 18px", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: "pointer", border: "none", transition: "background 0.18s" }}
                onMouseOver={(e) => ((e.target as HTMLElement).style.background = C.amber300)}
                onMouseOut={(e) => ((e.target as HTMLElement).style.background = C.amber500)}>
                Place an Order
              </button>
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", color: C.white, cursor: "pointer", display: "flex" }}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div style={{ position: "absolute", top: 68, left: 0, right: 0, background: C.forest900, borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "16px 24px 24px", zIndex: 99 }}>
            {["Services", "Why Us", "Process", "Reviews", "FAQ"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} onClick={() => setMobileOpen(false)}
                style={{ display: "block", color: "rgba(255,255,255,0.80)", fontSize: 16, fontWeight: 500, padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}>
                {l}
              </a>
            ))}
            <div className="flex gap-3 mt-5">
              <button style={{ flex: 1, border: "1px solid rgba(255,255,255,0.28)", color: C.white, background: "transparent", height: 44, borderRadius: 8, fontSize: 15, fontWeight: 500, cursor: "pointer" }}>Log In</button>
              <a href="#contact" style={{ flex: 2 }} onClick={() => setMobileOpen(false)}>
                <button style={{ width: "100%", background: C.amber500, color: C.forest900, height: 44, borderRadius: 8, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer" }}>Place an Order</button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{ background: C.forest900, minHeight: "92vh", position: "relative", overflow: "hidden" }} className="flex items-center">
        {/* BG effects */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: "65%", height: "90%", background: "radial-gradient(ellipse at 90% 50%, rgba(245,166,35,0.08) 0%, transparent 65%)" }} />
          <div style={{ position: "absolute", left: 0, bottom: 0, width: "50%", height: "60%", background: "radial-gradient(ellipse at 0% 100%, rgba(92,122,107,0.15) 0%, transparent 65%)" }} />
          <div style={{ position: "absolute", left: 72, top: 0, bottom: 0, width: 1, background: "rgba(245,166,35,0.13)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 48px)" }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div className="lg:col-span-7">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,166,35,0.12)", border: "1px solid rgba(245,166,35,0.28)", borderRadius: 9999, padding: "6px 16px", marginBottom: 28 }}>
                <span className="blink" style={{ width: 8, height: 8, borderRadius: "50%", background: C.amber500, display: "inline-block" }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: C.amber500, letterSpacing: "1.5px", textTransform: "uppercase" }}>Trusted by 12,000+ students worldwide</span>
              </div>

              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(42px, 5.5vw, 64px)", color: C.white, lineHeight: 1.08, letterSpacing: "-0.5px", marginBottom: 24 }}>
                Your Deadline.<br />
                Our{" "}
                <span style={{ color: C.amber500, position: "relative", display: "inline-block" }}>
                  Expertise.
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, background: "rgba(245,166,35,0.38)", borderRadius: 2, boxShadow: "0 0 20px rgba(245,166,35,0.20)" }} />
                </span>
                <br />Zero Compromise.
              </h1>

              <p style={{ fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.70)", lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                From first-year essays to PhD dissertations — we deliver original, well-researched academic work that meets your exact requirements. Confidential, on time, every time.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#contact">
                  <button className="sc-btn-primary" style={{ height: 52, padding: "0 32px" }}>Get a Free Quote</button>
                </a>
                <a href="#services">
                  <button className="sc-btn-ghost" style={{ height: 52, padding: "0 32px" }}>Browse Services</button>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: Lock, text: "100% Confidential" },
                  { Icon: Check, text: "Plagiarism-Free" },
                  { Icon: Clock, text: "On-Time Delivery" },
                ].map(({ Icon, text }) => (
                  <div key={text} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 9999, padding: "8px 16px" }}>
                    <Icon size={15} color={C.sage300} />
                    <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.80)" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Live Activity Card */}
            <div className="lg:col-span-5 float">
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 24, padding: "36px 32px", backdropFilter: "blur(12px)", boxShadow: "0 16px 56px rgba(13,43,31,.20)" }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: C.white }}>Live Activity</div>
                    <div style={{ fontSize: 12, color: C.sage300, marginTop: 3 }}>Updated in real time</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="blink" style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#4ADE80" }}>Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { num: "12,400+", label: "Papers Delivered" },
                    { num: "98%", label: "Satisfaction Rate" },
                    { num: "340+", label: "Expert Writers" },
                    { num: "8 Yrs", label: "In Business" },
                  ].map(({ num, label }) => (
                    <div key={label} style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.15)", borderRadius: 12, padding: "20px 16px" }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 27, color: C.amber500, lineHeight: 1 }}>{num}</div>
                      <div style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.58)", marginTop: 6 }}>{label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "14px 18px", display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span className="blink" style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
                    <strong style={{ color: C.amber300 }}>47</strong> writers working on orders right now
                  </span>
                </div>

                <a href="#contact" style={{ display: "block" }}>
                  <button style={{ width: "100%", background: C.amber500, color: C.forest900, height: 46, borderRadius: 12, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", transition: "background 0.18s, transform 0.18s" }}
                    onMouseOver={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = C.amber300; b.style.transform = "translateY(-2px)"; }}
                    onMouseOut={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = C.amber500; b.style.transform = "none"; }}>
                    Start My Order →
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF TICKER ── */}
      <div style={{ background: C.forest700, height: 56, overflow: "hidden", position: "relative" }} className="flex items-center">
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 72, background: `linear-gradient(to right, ${C.forest700}, transparent)`, zIndex: 2 }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 72, background: `linear-gradient(to left, ${C.forest700}, transparent)`, zIndex: 2 }} />
        <div className="marquee-track" style={{ gap: 0 }}>
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex items-center" style={{ gap: 0 }}>
              {[
                "📄 Essay · 24hrs · MBA Level — Just Delivered",
                "✅ Dissertation Chapter · PhD · Submitted 2 hrs ago",
                "⭐ 5-Star Review — James O., United Kingdom",
                "🔬 Research Paper · 48hrs · Grade A Received",
                "🔄 Revision Completed · 4hrs — Client Approved",
              ].map((item, i) => (
                <span key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "rgba(255,255,255,0.68)", paddingRight: 0 }}>
                  &nbsp;&nbsp;&nbsp;{item}&nbsp;&nbsp;&nbsp;<span style={{ color: C.sage500 }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: C.white, padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: C.sage500, marginBottom: 14 }}>WHAT WE DO</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 48px)", color: C.ink, marginBottom: 16, letterSpacing: "-0.3px" }}>
              Six services. One standard: excellent.
            </h2>
            <p style={{ fontSize: 16, color: C.gray500, maxWidth: 560, margin: "0 auto", lineHeight: 1.72 }}>
              Whether it's a midnight essay or a three-year dissertation, our experts deliver work that matches your institution's exact expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ Icon, name, desc, items }) => (
              <div key={name} className="sc-svc-card">
                <div className="accent-bar" />
                <div style={{ width: 50, height: 50, borderRadius: 12, background: C.forest900, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon size={22} color={C.amber500} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: C.forest900, marginBottom: 10 }}>{name}</h3>
                <p style={{ fontSize: 14, color: C.gray500, lineHeight: 1.72, marginBottom: 16 }}>{desc}</p>
                <ul style={{ marginBottom: 20, listStyle: "none", padding: 0 }}>
                  {items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                      <Check size={13} color={C.sage500} />
                      <span style={{ fontSize: 13, color: C.ink }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 14, fontWeight: 700, color: C.forest900, textDecoration: "none", transition: "color 0.18s, gap 0.18s" }}
                  onMouseOver={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.color = C.sage500; }}
                  onMouseOut={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.color = C.forest900; }}>
                  Get a quote <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM DIFFERENTIATOR ── */}
      <section style={{ background: C.cream50, padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: C.sage500, marginBottom: 14 }}>THE SCHOLARCRAFT DIFFERENCE</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 40px)", color: C.ink, marginBottom: 18, lineHeight: 1.22 }}>
                Not just written.<br />Engineered for your institution.
              </h2>
              <p style={{ fontSize: 16, color: C.gray500, lineHeight: 1.75, marginBottom: 36 }}>
                Our writers are matched by institution type, country grading standard, and subject field — not just pulled from a generic pool.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { Icon: Target, title: "Institution-Matched Writing", body: "Your writer knows your university's citation standards, grading rubric style, and expected academic register." },
                  { Icon: Globe, title: "Country-Aware Academic Style", body: "UK first-class, US grade-A, Australian HD — we write to the exact standard your grade requires." },
                  { Icon: Bot, title: "AI-Assisted Quality Check", body: "Every paper passes an AI coherence and consistency scan before human review — catching what editors miss." },
                  { Icon: RefreshCw, title: "Tracked Revision History", body: "See every change made in revision. Full transparency, like Google Docs track changes — but for your paper." },
                ].map(({ Icon, title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: C.cream100, border: `1px solid ${C.cream100}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={19} color={C.amber500} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 4 }}>{title}</div>
                      <div style={{ fontSize: 14, color: C.gray500, lineHeight: 1.70 }}>{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div style={{ position: "relative" }}>
              <div style={{ background: C.white, borderRadius: 24, padding: "28px 24px", boxShadow: "0 32px 80px rgba(13,43,31,.20)", border: `1px solid ${C.cream100}` }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 20, paddingBottom: 14, borderBottom: `1px solid ${C.cream100}` }}>
                  Writer Match Report
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, background: C.cream50, borderRadius: 14, padding: 16, marginBottom: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.forest900, display: "flex", alignItems: "center", justifyContent: "center", color: C.amber500, fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 17, flexShrink: 0 }}>DR</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: C.ink }}>Dr. Rebecca Chen</div>
                    <div style={{ fontSize: 12, color: C.sage500 }}>PhD · Business &amp; Management</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: C.amber500, fontWeight: 700 }}>97%</div>
                    <div style={{ fontSize: 11, color: C.gray500 }}>match score</div>
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.sage500, marginBottom: 12, letterSpacing: "1px", textTransform: "uppercase" }}>Quality Analysis</div>
                  {[
                    { label: "Coherence", pct: 98 },
                    { label: "Originality", pct: 100 },
                    { label: "Structure", pct: 96 },
                    { label: "Citations", pct: 97 },
                  ].map(({ label, pct }) => (
                    <div key={label} className="flex items-center gap-3 mb-2">
                      <div style={{ fontSize: 12, color: C.gray500, width: 76, flexShrink: 0 }}>{label}</div>
                      <div style={{ flex: 1, height: 5, background: C.cream100, borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(to right, ${C.forest700}, ${C.sage500})`, borderRadius: 3 }} />
                      </div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.amber500, width: 30, textAlign: "right" }}>{pct}%</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: C.cream50, borderRadius: 12, padding: "14px 16px" }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.sage500, marginBottom: 10, letterSpacing: "1px", textTransform: "uppercase" }}>Revision Log</div>
                  {[
                    { action: "Strengthened conclusion argument", time: "2h ago" },
                    { action: "Updated Harvard citations to 7th ed.", time: "3h ago" },
                  ].map(({ action, time }) => (
                    <div key={action} className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.sage500, flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: C.ink }}>{action}</span>
                      </div>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.gray500, flexShrink: 0, marginLeft: 8 }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "absolute", top: -14, right: -14, background: C.forest900, borderRadius: 14, padding: "12px 16px", boxShadow: "0 8px 32px rgba(13,43,31,.22)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: 11, color: C.sage300, marginBottom: 2 }}>Institution Match</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: C.amber500 }}>King's College</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why-us" style={{ background: C.forest900, padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: C.amber300, marginBottom: 14 }}>WHY STUDENTS CHOOSE US</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 42px)", color: C.white, marginBottom: 12, letterSpacing: "-0.3px" }}>
              Six reasons students keep coming back.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.60)", maxWidth: 460 }}>We don't compete on price. We compete on the standard of work delivered.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map(({ Icon, title, body, stat, label, pct }) => (
              <div key={title} className="sc-why-card" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 22, padding: "30px 26px" }}>
                <Icon size={34} color={C.amber500} style={{ marginBottom: 16 }} />
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.white, marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.60)", lineHeight: 1.72, marginBottom: 20 }}>{body}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 16 }}>
                  <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden", marginBottom: 8 }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: C.amber500, borderRadius: 2 }} />
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.sage300 }}>
                    <span style={{ color: C.amber300, fontWeight: 700 }}>{stat}</span> {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ background: C.cream50, padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: C.sage500, marginBottom: 14 }}>HOW IT WORKS</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 42px)", color: C.ink, letterSpacing: "-0.3px" }}>
              From brief to delivery in four steps.
            </h2>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block" style={{ position: "relative", paddingTop: 24, paddingBottom: 24 }}>
            <div style={{ position: "absolute", left: "12.5%", right: "12.5%", top: "50%", height: 2, background: C.sage300, transform: "translateY(-50%)" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative", minHeight: 320 }}>
              {steps.map(({ n, title, body }, i) => {
                const above = i % 2 === 0;
                return (
                  <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {above ? (
                      <div style={{ flex: 1, textAlign: "center", paddingBottom: 28, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 6 }}>{title}</h3>
                        <p style={{ fontSize: 13, color: C.gray500, lineHeight: 1.65, maxWidth: 180, margin: "0 auto" }}>{body}</p>
                      </div>
                    ) : <div style={{ flex: 1 }} />}
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: C.forest900, border: `2px solid ${C.amber500}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 20, color: C.amber500 }}>{n}</span>
                    </div>
                    {!above ? (
                      <div style={{ flex: 1, textAlign: "center", paddingTop: 28 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 6 }}>{title}</h3>
                        <p style={{ fontSize: 13, color: C.gray500, lineHeight: 1.65, maxWidth: 180, margin: "0 auto" }}>{body}</p>
                      </div>
                    ) : <div style={{ flex: 1 }} />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden">
            {steps.map(({ n, title, body }, i) => (
              <div key={n} style={{ display: "flex", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: C.forest900, border: `2px solid ${C.amber500}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 17, color: C.amber500 }}>{n}</span>
                  </div>
                  {i < steps.length - 1 && <div style={{ width: 2, flex: 1, background: C.sage300, minHeight: 28, margin: "8px 0" }} />}
                </div>
                <div style={{ paddingTop: 12, paddingBottom: i < steps.length - 1 ? 8 : 0 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: C.gray500, lineHeight: 1.70, marginBottom: 20 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="reviews" style={{ background: C.white, padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: C.sage500, marginBottom: 14 }}>STUDENT REVIEWS</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 42px)", color: C.ink, letterSpacing: "-0.3px" }}>
              What students say.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Col 1 */}
            <div className="flex flex-col gap-6">
              {[testimonials[0], testimonials[3]].map((t) => (
                <div key={t.name} style={{ background: C.cream50, border: `1px solid ${C.cream100}`, borderRadius: 22, padding: "28px 24px", boxShadow: "0 2px 8px rgba(13,43,31,.07)" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-1">{[...Array(t.stars)].map((_, i) => <Star key={i} size={13} fill={C.amber500} color={C.amber500} />)}</div>
                    <span style={{ fontSize: 34, color: C.amber500, opacity: 0.18, fontFamily: "Georgia, serif", lineHeight: 1 }}>"</span>
                  </div>
                  <p style={{ fontSize: 14, color: C.gray500, fontStyle: "italic", lineHeight: 1.78, marginBottom: 16 }}>{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.forest900, display: "flex", alignItems: "center", justifyContent: "center", color: C.amber500, fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{t.name[0]}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: C.ink }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: C.sage500 }}>{t.meta}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Col 2 — featured */}
            <div className="flex flex-col gap-6">
              <div style={{ background: C.forest900, borderRadius: 22, padding: "36px 32px", boxShadow: "0 16px 56px rgba(13,43,31,.18)" }}>
                <div className="flex gap-1 mb-5">{[...Array(5)].map((_, i) => <Star key={i} size={13} fill={C.amber500} color={C.amber500} />)}</div>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", fontStyle: "italic", lineHeight: 1.75, marginBottom: 22 }}>
                  "{testimonials[2].quote}"
                </p>
                <div style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 22, marginBottom: 22 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 800, color: C.amber500, lineHeight: 1 }}>A−</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 6 }}>Final dissertation grade after using ScholarCraft</div>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(245,166,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: C.amber500, fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{testimonials[2].name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: C.white }}>{testimonials[2].name}</div>
                    <div style={{ fontSize: 12, color: C.sage300 }}>{testimonials[2].meta}</div>
                  </div>
                </div>
              </div>

              {/* Rating card */}
              <div style={{ background: C.cream50, borderRadius: 22, padding: 24, border: `1px solid ${C.cream100}` }}>
                <div style={{ textAlign: "center", marginBottom: 18 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: C.amber500, lineHeight: 1 }}>4.9</div>
                  <div className="flex justify-center gap-1 my-2">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill={C.amber500} color={C.amber500} />)}</div>
                  <div style={{ fontSize: 12, color: C.gray500 }}>Based on 2,847 verified reviews</div>
                </div>
                {[{ s: 5, p: 92 }, { s: 4, p: 6 }, { s: 3, p: 1.5 }, { s: 2, p: 0.3 }, { s: 1, p: 0.2 }].map(({ s, p }) => (
                  <div key={s} className="flex items-center gap-2 mb-1">
                    <span style={{ fontSize: 11, color: C.gray500, width: 10 }}>{s}</span>
                    <Star size={10} fill={C.amber500} color={C.amber500} />
                    <div style={{ flex: 1, height: 5, background: C.cream100, borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ width: `${p}%`, height: "100%", background: C.amber500, borderRadius: 3 }} />
                    </div>
                    <span style={{ fontSize: 11, color: C.gray500, width: 28, textAlign: "right" }}>{p}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-6">
              {[testimonials[1], testimonials[4]].map((t) => (
                <div key={t.name} style={{ background: C.cream50, border: `1px solid ${C.cream100}`, borderRadius: 22, padding: "28px 24px", boxShadow: "0 2px 8px rgba(13,43,31,.07)" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-1">{[...Array(t.stars)].map((_, i) => <Star key={i} size={13} fill={C.amber500} color={C.amber500} />)}</div>
                    <span style={{ fontSize: 34, color: C.amber500, opacity: 0.18, fontFamily: "Georgia, serif", lineHeight: 1 }}>"</span>
                  </div>
                  <p style={{ fontSize: 14, color: C.gray500, fontStyle: "italic", lineHeight: 1.78, marginBottom: 16 }}>{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.forest900, display: "flex", alignItems: "center", justifyContent: "center", color: C.amber500, fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{t.name[0]}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: C.ink }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: C.sage500 }}>{t.meta}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING CALCULATOR ── */}
      <section id="pricing" style={{ background: C.forest900, padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: C.amber300, marginBottom: 14 }}>INSTANT PRICING</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 42px)", color: C.white, marginBottom: 12, letterSpacing: "-0.3px" }}>
              Your instant quote. No sign-up.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 440, margin: "0 auto" }}>
              See your price adjust in real time as you configure your order.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Controls */}
            <div className="flex flex-col gap-8">
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>Paper Type</div>
                <div className="flex flex-wrap gap-2">
                  {["Essay", "Research", "Dissertation", "Editing", "Assignment"].map((t) => (
                    <button key={t} onClick={() => setCalcType(t)} style={{ background: calcType === t ? C.amber500 : "rgba(255,255,255,0.07)", color: calcType === t ? C.forest900 : C.white, border: "none", borderRadius: 9999, padding: "9px 20px", fontSize: 14, fontWeight: calcType === t ? 700 : 400, cursor: "pointer", transition: "all 0.18s" }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>Academic Level</div>
                <div style={{ display: "flex", background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 4, border: "1px solid rgba(255,255,255,0.08)" }}>
                  {["High School", "Undergrad", "Master's", "PhD"].map((l) => (
                    <button key={l} onClick={() => setCalcLevel(l)} style={{ flex: 1, background: calcLevel === l ? C.amber500 : "transparent", color: calcLevel === l ? C.forest900 : "rgba(255,255,255,0.68)", border: "none", borderRadius: 8, padding: "10px 6px", fontSize: 13, fontWeight: calcLevel === l ? 700 : 400, cursor: "pointer", transition: "all 0.18s" }}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
                  Deadline — <span style={{ color: C.amber300 }}>{deadlines[calcDeadlineIdx]}</span>
                </div>
                <input
                  type="range" min={0} max={6} step={1} value={calcDeadlineIdx}
                  onChange={(e) => setCalcDeadlineIdx(Number(e.target.value))}
                  style={{ background: `linear-gradient(to right, ${C.amber500} ${(calcDeadlineIdx / 6) * 100}%, rgba(255,255,255,0.14) ${(calcDeadlineIdx / 6) * 100}%)` }}
                />
                <div className="flex justify-between mt-2">
                  {deadlines.map((d, i) => (
                    <span key={d} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: i === calcDeadlineIdx ? C.amber300 : "rgba(255,255,255,0.35)", fontWeight: i === calcDeadlineIdx ? 700 : 400 }}>{d}</span>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 14 }}>Number of Pages</div>
                <div className="flex items-center gap-8">
                  <button onClick={() => setCalcPages(Math.max(1, calcPages - 1))} style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", color: C.white, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.18s" }}
                    onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.14)")}
                    onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)")}>
                    <Minus size={17} />
                  </button>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 44, color: C.amber500, lineHeight: 1 }}>{calcPages}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.40)", marginTop: 5 }}>~{calcPages * 275} words</div>
                  </div>
                  <button onClick={() => setCalcPages(calcPages + 1)} style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", color: C.white, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.18s" }}
                    onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.14)")}
                    onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)")}>
                    <Plus size={17} />
                  </button>
                </div>
              </div>
            </div>

            {/* Quote card */}
            <div style={{ background: "rgba(255,255,255,0.06)", border: `1px solid rgba(245,166,35,0.22)`, borderRadius: 24, padding: "36px 32px", position: "sticky", top: 90, alignSelf: "start" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>Your Instant Quote</div>
              <div style={{ marginBottom: 22, display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontWeight: 700, fontSize: 22, color: C.sage300, alignSelf: "flex-start", marginTop: 8 }}>$</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 64, color: C.amber500, lineHeight: 1 }}>{totalPrice}</span>
                <span style={{ fontSize: 17, color: "rgba(255,255,255,0.42)", alignSelf: "flex-end", marginBottom: 4 }}>/order</span>
              </div>

              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "14px 16px", marginBottom: 22 }}>
                {[
                  { l: "Base rate", v: `$${base.toFixed(2)}/page` },
                  { l: "Level multiplier", v: `×${lm.toFixed(1)}` },
                  { l: "Deadline multiplier", v: `×${dm.toFixed(1)}` },
                  { l: "Pages", v: `×${calcPages}` },
                ].map(({ l, v }) => (
                  <div key={l} className="flex justify-between mb-2">
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.48)" }}>{l}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "rgba(255,255,255,0.78)" }}>{v}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 24 }}>
                {["Plagiarism Report (Turnitin)", "Free Revisions (14 days)", "Direct Writer Access", "On-Time Guarantee"].map((item) => (
                  <div key={item} className="flex items-center gap-2 mb-2">
                    <Check size={14} color={C.sage500} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.68)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" style={{ display: "block" }}>
                <button style={{ width: "100%", background: C.amber500, color: C.forest900, height: 52, borderRadius: 12, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", transition: "all 0.18s" }}
                  onMouseOver={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = C.amber300; b.style.transform = "translateY(-2px)"; b.style.boxShadow = "0 8px 32px rgba(245,166,35,0.28)"; }}
                  onMouseOut={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = C.amber500; b.style.transform = "none"; b.style.boxShadow = "none"; }}>
                  Order at This Price
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: C.cream50, padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: C.sage500, marginBottom: 14 }}>FAQ</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 42px)", color: C.ink, letterSpacing: "-0.3px" }}>
              Questions answered.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[faqs.slice(0, 4), faqs.slice(4)].map((col, ci) => (
              <div key={ci} className="flex flex-col gap-3">
                {col.map((faq, i) => {
                  const idx = ci * 4 + i;
                  const isOpen = openFaqs.has(idx);
                  return (
                    <div key={faq.q} style={{ background: C.white, borderRadius: 14, border: `1px solid ${C.cream100}`, overflow: "hidden" }}>
                      <button onClick={() => toggleFaq(idx)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <span style={{ fontSize: 15, fontWeight: 600, color: C.forest900, flex: 1, paddingRight: 12 }}>{faq.q}</span>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.amber500, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.2s", transform: isOpen ? "rotate(0deg)" : "rotate(0deg)" }}>
                          {isOpen ? <Minus size={15} color={C.forest900} /> : <Plus size={15} color={C.forest900} />}
                        </div>
                      </button>
                      <div className="sc-faq-answer" style={{ maxHeight: isOpen ? 160 : 0, opacity: isOpen ? 1 : 0 }}>
                        <div style={{ padding: "0 22px 18px", fontSize: 14, color: C.gray500, lineHeight: 1.75 }}>{faq.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: C.forest900, padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: C.sage300, marginBottom: 14 }}>GET IN TOUCH</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(26px, 3vw, 38px)", color: C.white, marginBottom: 14, lineHeight: 1.22 }}>
                Start your order.<br />We handle the rest.
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.62)", marginBottom: 40, lineHeight: 1.7 }}>
                A fixed quote in 15 minutes. No commitment required.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  { Icon: Mail, label: "Email us", val: "hello@scholarcraft.com", clr: C.amber500 },
                  { Icon: MessageCircle, label: "WhatsApp", val: "+1 (888) 000-CRAFT", clr: "#25D366" },
                  { Icon: Phone, label: "Call us", val: "+1 (888) 000-WRITE", clr: C.amber500 },
                ].map(({ Icon, label, val, clr }) => (
                  <div key={label} className="sc-contact-card" style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "16px 20px", cursor: "pointer" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={20} color={clr} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: C.sage300, marginBottom: 2 }}>{label}</div>
                      <div style={{ fontSize: 15, color: C.white, fontWeight: 500 }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(74,222,128,0.10)", border: "1px solid rgba(74,222,128,0.20)", borderRadius: 9999, padding: "10px 18px" }}>
                <span className="blink" style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#4ADE80" }}>Response time: &lt; 15 minutes</span>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 24, padding: "40px 36px" }}>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.white, marginBottom: 5 }}>Request Your Free Quote</div>
                <div style={{ fontSize: 13, color: C.sage300 }}>Average response: 12 minutes</div>
              </div>

              {formState === "success" ? (
                <div style={{ textAlign: "center", padding: "52px 0" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(74,222,128,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                    <Check size={28} color="#4ADE80" />
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: C.white, marginBottom: 8 }}>Request Received!</div>
                  <div style={{ fontSize: 14, color: C.sage300 }}>We'll be in touch shortly — usually within 12 minutes.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {[{ label: "Name", type: "text", ph: "Your full name" }, { label: "Email", type: "email", ph: "your@email.com" }].map(({ label, type, ph }) => (
                      <div key={label}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 7 }}>{label}</label>
                        <input type={type} placeholder={ph} required className="sc-field" />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {[
                      { label: "Paper Type", opts: ["Essay", "Research Paper", "Dissertation", "Editing", "Assignment", "Case Study"] },
                      { label: "Academic Level", opts: ["High School", "Undergraduate", "Master's", "PhD"] },
                    ].map(({ label, opts }) => (
                      <div key={label}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 7 }}>{label}</label>
                        <select className="sc-field">
                          <option value="">Select...</option>
                          {opts.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 7 }}>Pages</label>
                      <input type="number" min="1" defaultValue="1" className="sc-field" />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 7 }}>Deadline</label>
                      <select className="sc-field">
                        <option value="">Select...</option>
                        {["6 hours", "12 hours", "24 hours", "3 days", "7 days", "14 days", "30 days"].map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 7 }}>WhatsApp Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="sc-field" />
                  </div>
                  <div className="mb-6">
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 7 }}>Additional Instructions</label>
                    <textarea rows={3} placeholder="Topic, requirements, specific sources, formatting preferences..." className="sc-field" style={{ resize: "vertical" }} />
                  </div>
                  <button type="submit" disabled={formState === "loading"} style={{ width: "100%", height: 52, background: formState === "loading" ? C.sage500 : C.amber500, color: C.forest900, borderRadius: 12, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", transition: "all 0.18s" }}
                    onMouseOver={(e) => { if (formState !== "loading") { const b = e.currentTarget as HTMLButtonElement; b.style.background = C.amber300; b.style.transform = "translateY(-2px)"; b.style.boxShadow = "0 8px 32px rgba(245,166,35,0.28)"; } }}
                    onMouseOut={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = formState === "loading" ? C.sage500 : C.amber500; b.style.transform = "none"; b.style.boxShadow = "none"; }}>
                    {formState === "loading" ? "Sending your request…" : "Submit Request — Free Quote in 15 Minutes"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.forest950, padding: "72px 0 28px" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div style={{ width: 8, height: 8, background: C.amber500, borderRadius: 2 }} />
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: C.white }}>
                  Scholar<span style={{ color: C.amber500 }}>Craft</span>
                </span>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.75, marginBottom: 16, maxWidth: 200 }}>
                Premium academic writing services for students worldwide. Confidential, original, on time.
              </p>
              <a href="mailto:hello@scholarcraft.com" className="sc-footer-link">hello@scholarcraft.com</a>
              <a href="tel:+18880000000" className="sc-footer-link">+1 (888) 000-CRAFT</a>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.white, marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Services</div>
              {["Essay Writing", "Research Papers", "Dissertation Support", "Editing & Proofreading", "Assignment Help", "Case Studies"].map((l) => (
                <a key={l} href="#services" className="sc-footer-link">{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.white, marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Company</div>
              {["About Us", "How It Works", "Why Choose Us", "Reviews", "Blog", "Careers"].map((l) => (
                <a key={l} href="#" className="sc-footer-link">{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.white, marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Legal</div>
              {["Privacy Policy", "Terms of Service", "Refund Policy", "Cookie Policy", "Plagiarism Policy"].map((l) => (
                <a key={l} href="#" className="sc-footer-link">{l}</a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 22, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.32)" }}>© 2025 ScholarCraft. Papers for reference use only.</div>
            <a href="#" style={{ fontSize: 12, color: C.amber500, textDecoration: "none", fontWeight: 600 }}>Engineered by ScholarCraft</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp float */}
      <a href="https://wa.me/18880000000" target="_blank" rel="noopener noreferrer" className="wa-btn" style={{ position: "fixed", bottom: 28, right: 28, width: 56, height: 56, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, textDecoration: "none" }}>
        <MessageCircle size={26} color="white" fill="white" />
      </a>
    </div>
  );
}
