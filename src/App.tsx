/*
  Magic Analysis - Football Livescore & Highlights
  ScoreBat iframe component MUST NOT BE MODIFIED
  Pages: Livescore, Highlights, Contact, About, Terms, Privacy
*/
import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

/* ── TYPES ───────────────────────────────────────────────────────── */
type Page = 'livescore' | 'highlights' | 'contact' | 'about' | 'terms' | 'privacy';

/* ── ICONS ────────────────────────────────────────────────────────── */
const LogoIcon = () => (
  <img src="/logo-icon.png?v=2" alt="Magic Analysis" className="w-10 h-10 rounded-xl shadow-sm" />
);
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const RefreshIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>;
const LiveDot = () => <span className="w-2.5 h-2.5 rounded-full bg-[#ff4757] inline-block animate-pulse" />;
const VideoIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18"/><path d="M7 2v20"/><path d="M17 2v20"/><path d="M2 12h20"/><path d="M2 7h5"/><path d="M2 17h5"/><path d="M17 17h5"/><path d="M17 7h5"/></svg>;
const MailIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const ChevronRight = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>;
const HomeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const PlayCircleIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>;
const GridIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
const InfoIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>;
const ShieldIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const FileTextIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
const SendIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;

/* ── SCOREBAT IFRAME PAGE ─────────────────────────────────────────── */
function ScoreBatLivescore() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const refresh = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-[#fff] flex items-center gap-2"><LiveDot /> Live Scores</h1>
        <button onClick={refresh} className="px-4 py-2 bg-[#25d366] text-[#000] rounded-lg text-xs font-semibold hover:bg-[#1fb85a] transition-colors flex items-center gap-1.5">
          <RefreshIcon /> Refresh
        </button>
      </div>
      <div className="bg-[#12121a] rounded-xl border border-[#252536] overflow-hidden" style={{ height: '700px' }}>
        <iframe
          ref={iframeRef}
          src="https://www.scorebat.com/embed/livescore/?token="
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
          title="ScoreBat Live Scores"
        />
      </div>
    </div>
  );
}

/* ── HIGHLIGHTS PAGE (light theme) ────────────────────────────────── */
function HighlightsPage() {
  const highlights = [
    { title: 'Premier League Goals', desc: 'All goals from Matchweek 34' },
    { title: 'La Liga Top Moments', desc: 'Best of El Clasico' },
    { title: 'Bundesliga Highlights', desc: 'Bayern vs Dortmund action' },
    { title: 'Champions League', desc: 'Semi-final highlights' },
  ];
  return (
    <div>
      <h1 className="text-lg font-bold text-[#1C1C1E] mb-1">Match Highlights</h1>
      <p className="text-xs text-[#8E8E93] mb-4">Video highlights from top leagues</p>
      <div className="grid gap-3">
        {highlights.map((h, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 border border-[#E5E5EA] shadow-sm hover:shadow-md transition-all cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#F2F2F7] flex items-center justify-center text-[#25d366]"><VideoIcon /></div>
              <div className="flex-1"><h3 className="text-sm font-semibold text-[#1C1C1E]">{h.title}</h3><p className="text-xs text-[#8E8E93]">{h.desc}</p></div>
              <ChevronRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CONTACT PAGE (light theme) ───────────────────────────────────── */
function ContactPage() {
  return (
    <div>
      <h1 className="text-lg font-bold text-[#1C1C1E] mb-4">Contact Us</h1>
      <div className="bg-white rounded-2xl p-5 border border-[#E5E5EA] shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F2F2F7] flex items-center justify-center text-[#25d366]"><MailIcon /></div>
            <div><p className="text-xs text-[#8E8E93]">Email</p><p className="text-sm font-medium text-[#1C1C1E]">Magicbetingtips@gmail.com</p></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F2F2F7] flex items-center justify-center text-[#25d366]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            </div>
            <div><p className="text-xs text-[#8E8E93]">Telegram</p><a href="https://t.me/footballnisight" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#25d366] hover:underline">@footballnisight</a></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F2F2F7] flex items-center justify-center text-[#25d366]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </div>
            <div><p className="text-xs text-[#8E8E93]">X (Twitter)</p><a href="https://x.com/tipsmagic30849" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#25d366] hover:underline">@tipsmagic30849</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ABOUT PAGE ───────────────────────────────────────────────────── */
function AboutPage() {
  return (
    <div>
      <h1 className="text-lg font-bold text-[#1C1C1E] mb-4">About Us</h1>
      <div className="bg-white rounded-2xl p-5 border border-[#E5E5EA] shadow-sm space-y-4">
        <p className="text-sm text-[#555555] leading-relaxed">Magic Analysis is your destination for live football scores and match highlights. We provide real-time coverage of matches from top leagues around the world through our partnership with ScoreBat.</p>
        <p className="text-sm text-[#555555] leading-relaxed">Stay updated with the latest goals, match events, and results from Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and more.</p>
        <div className="pt-3 border-t border-[#F2F2F7]"><p className="text-xs text-[#8E8E93]">Gamble Responsibly | 18+ | For informational and entertainment purposes only</p></div>
      </div>
    </div>
  );
}

/* ── TERMS PAGE ───────────────────────────────────────────────────── */
function TermsPage() {
  return (
    <div>
      <h1 className="text-lg font-bold text-[#1C1C1E] mb-4">Terms of Use</h1>
      <div className="bg-white rounded-2xl p-5 border border-[#E5E5EA] shadow-sm space-y-3">
        <p className="text-sm text-[#555555] leading-relaxed">By using Magic Analysis, you agree to the following terms:</p>
        <ul className="text-sm text-[#555555] leading-relaxed list-disc list-inside space-y-2">
          <li>All content is for informational and entertainment purposes only.</li>
          <li>Live score data is provided by ScoreBat. We do not guarantee real-time accuracy.</li>
          <li>Users must be 18 years or older to use this service.</li>
          <li>Gamble responsibly. If you have a gambling problem, seek professional help.</li>
          <li>All product names and brands are property of their respective owners.</li>
        </ul>
      </div>
    </div>
  );
}

/* ── PRIVACY PAGE ─────────────────────────────────────────────────── */
function PrivacyPage() {
  return (
    <div>
      <h1 className="text-lg font-bold text-[#1C1C1E] mb-4">Privacy Policy</h1>
      <div className="bg-white rounded-2xl p-5 border border-[#E5E5EA] shadow-sm space-y-3">
        <p className="text-sm text-[#555555] leading-relaxed">Magic Analysis is committed to protecting your privacy:</p>
        <ul className="text-sm text-[#555555] leading-relaxed list-disc list-inside space-y-2">
          <li>We do not collect personal data from users.</li>
          <li>All data is processed locally in your browser.</li>
          <li>We use cookies only for essential site functionality.</li>
          <li>We do not share any user information with third parties.</li>
          <li>For questions about privacy, contact us at Magicbetingtips@gmail.com.</li>
        </ul>
      </div>
    </div>
  );
}

/* ── MORE MENU MODAL (mobile bottom sheet) ────────────────────────── */
function MoreMenuModal({ onClose, onNavigate }: { onClose: () => void; onNavigate: (p: Page) => void }) {
  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);
  const items: { page: Page; label: string; icon: React.ReactNode }[] = [
    { page: 'about', label: 'About Us', icon: <InfoIcon /> },
    { page: 'terms', label: 'Terms of Use', icon: <FileTextIcon /> },
    { page: 'privacy', label: 'Privacy Policy', icon: <ShieldIcon /> },
    { page: 'contact', label: 'Contact Us', icon: <SendIcon /> },
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg rounded-t-2xl p-5 shadow-xl animate-slide-up">
        <div className="flex justify-center mb-4"><div className="w-10 h-1 rounded-full bg-[#C7C7CC]" /></div>
        <h3 className="text-sm font-bold text-[#1C1C1E] mb-4">More Options</h3>
        <div className="space-y-1">
          {items.map(item => (
            <button key={item.page} onClick={() => { onNavigate(item.page); onClose(); }}
              className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-[#F2F2F7] transition-colors text-left">
              <div className="w-8 h-8 rounded-lg bg-[#F2F2F7] flex items-center justify-center text-[#8E8E93]">{item.icon}</div>
              <span className="text-sm font-medium text-[#1C1C1E]">{item.label}</span>
              <ChevronRight />
            </button>
          ))}
        </div>
        <button onClick={onClose} className="w-full py-3.5 mt-4 bg-[#F2F2F7] rounded-xl text-sm font-semibold text-[#1C1C1E] hover:bg-[#E5E5EA] transition-colors">Cancel</button>
      </div>
    </div>
  );
}

/* ── HEADER (light theme) ─────────────────────────────────────────── */
function Header({ currentPage, onNavigate, mobileOpen, setMobileOpen, onRefresh }: {
  currentPage: Page; onNavigate: (p: Page) => void; mobileOpen: boolean; setMobileOpen: (v: boolean) => void; onRefresh: () => void;
}) {
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const desktopNav: { key: Page; label: string }[] = [
    { key: 'livescore', label: 'Live' },
    { key: 'highlights', label: 'Highlights' },
  ];
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-14 bg-white/90 backdrop-blur-md border-b border-[#E5E5EA] z-[1000] flex items-center justify-between px-4">
        <button className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#F2F2F7] transition-colors text-[#8E8E93]" title={today}>
          <CalendarIcon />
        </button>
        <button onClick={() => onNavigate('livescore')} className="flex items-center gap-2.5 font-bold text-[17px] text-[#1C1C1E] tracking-tight">
          <LogoIcon />
          <span>Magic Analysis</span>
        </button>
        <button onClick={onRefresh} className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#F2F2F7] transition-colors text-[#8E8E93]" title="Refresh">
          <RefreshIcon />
        </button>
      </header>
      {/* Desktop nav bar below header */}
      <nav className="hidden md:flex fixed top-14 left-0 right-0 h-11 bg-white/90 backdrop-blur-md border-b border-[#E5E5EA] z-[999] items-center justify-center gap-1 px-4">
        {desktopNav.map(({ key, label }) => (
          <button key={key} onClick={() => onNavigate(key)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${currentPage === key ? 'bg-[#1C1C1E] text-white' : 'text-[#8E8E93] hover:text-[#1C1C1E] hover:bg-[#F2F2F7]'}`}>
            {label}
          </button>
        ))}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${['about','terms','privacy','contact'].includes(currentPage) ? 'bg-[#1C1C1E] text-white' : 'text-[#8E8E93] hover:text-[#1C1C1E] hover:bg-[#F2F2F7]'}`}>
          More
        </button>
      </nav>
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[998] hidden md:block" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-[102px] right-4 w-[220px] bg-white rounded-2xl shadow-xl border border-[#E5E5EA] z-[1001] hidden md:block p-2">
            {(['about','terms','privacy','contact'] as Page[]).map(p => (
              <button key={p} onClick={() => { onNavigate(p); setMobileOpen(false); }}
                className="block w-full text-left px-4 py-2.5 text-[13px] text-[#555555] hover:text-[#1C1C1E] hover:bg-[#F2F2F7] rounded-xl transition-colors capitalize">
                {p === 'contact' ? 'Contact Us' : p === 'about' ? 'About Us' : p === 'terms' ? 'Terms of Use' : 'Privacy Policy'}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}

/* ── FOOTER (light theme) ──────────────────────────────────────────── */
function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="bg-white border-t border-[#E5E5EA] py-6 px-4 text-center mt-auto">
      <div className="mb-5">
        <h4 className="text-xs font-bold text-[#1C1C1E] uppercase tracking-wider mb-3">Follow Us</h4>
        <div className="flex justify-center gap-3">
          <a href="https://t.me/footballnisight" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F2F2F7] flex items-center justify-center text-[#8E8E93] hover:text-[#25d366] hover:bg-[#E8F5E9] transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
          </a>
          <a href="https://x.com/tipsmagic30849" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F2F2F7] flex items-center justify-center text-[#8E8E93] hover:text-[#25d366] hover:bg-[#E8F5E9] transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[#F2F2F7] flex items-center justify-center text-[#8E8E93] hover:text-[#25d366] hover:bg-[#E8F5E9] transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-2 text-xs">
        <button onClick={() => onNavigate('about')} className="text-[#8E8E93] hover:text-[#25d366] transition-colors">About Us</button>
        <button onClick={() => onNavigate('terms')} className="text-[#8E8E93] hover:text-[#25d366] transition-colors">Terms of Use</button>
        <button onClick={() => onNavigate('privacy')} className="text-[#8E8E93] hover:text-[#25d366] transition-colors">Privacy Policy</button>
        <button onClick={() => onNavigate('contact')} className="text-[#8E8E93] hover:text-[#25d366] transition-colors">Contact</button>
      </div>
      <p className="text-[11px] text-[#C7C7CC]">Magic Analysis | Football Livescore & Highlights | Gamble Responsibly | 18+</p>
    </footer>
  );
}

/* ── BOTTOM NAV (mobile tab bar) ──────────────────────────────────── */
function BottomNav({ currentPage, onNavigate, onOpenMore }: {
  currentPage: Page; onNavigate: (p: Page) => void; onOpenMore: () => void;
}) {
  const tabs: { page: Page; label: string; icon: React.ReactNode }[] = [
    { page: 'livescore', label: 'Live', icon: <HomeIcon /> },
    { page: 'highlights', label: 'Highlights', icon: <PlayCircleIcon /> },
  ];
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-t border-[#E5E5EA] z-[1000] flex items-center justify-around px-2 safe-area-pb">
      {tabs.map(t => (
        <button key={t.page} onClick={() => onNavigate(t.page)}
          className={`flex flex-col items-center justify-center gap-0.5 w-16 h-full rounded-xl transition-colors ${currentPage === t.page ? 'text-[#25d366]' : 'text-[#8E8E93]'}`}>
          {t.icon}
          <span className="text-[10px] font-medium">{t.label}</span>
        </button>
      ))}
      <button onClick={onOpenMore}
        className={`flex flex-col items-center justify-center gap-0.5 w-16 h-full rounded-xl transition-colors ${['about','terms','privacy','contact'].includes(currentPage) ? 'text-[#25d366]' : 'text-[#8E8E93]'}`}>
        <GridIcon />
        <span className="text-[10px] font-medium">More</span>
      </button>
    </nav>
  );
}

/* ── MAIN APP ─────────────────────────────────────────────────────── */
export default function App() {
  const [page, setPage] = useState<Page>('livescore');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const navigate = useCallback((p: Page) => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  const handleRefresh = useCallback(() => { window.location.reload(); }, []);

  return (
    <div className="min-h-screen bg-[#F2F2F7] text-[#1C1C1E] flex flex-col">
      <Header currentPage={page} onNavigate={navigate} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} onRefresh={handleRefresh} />
      <div className="pt-14 md:pt-[102px] flex-1 flex max-w-[800px] mx-auto w-full">
        <main className="flex-1 min-w-0 p-4 md:pb-4 pb-20">
          {page === 'livescore' && <ScoreBatLivescore />}
          {page === 'highlights' && <HighlightsPage />}
          {page === 'contact' && <ContactPage />}
          {page === 'about' && <AboutPage />}
          {page === 'terms' && <TermsPage />}
          {page === 'privacy' && <PrivacyPage />}
        </main>
      </div>
      <Footer onNavigate={navigate} />
      <BottomNav currentPage={page} onNavigate={navigate} onOpenMore={() => setMoreOpen(true)} />
      {moreOpen && <MoreMenuModal onClose={() => setMoreOpen(false)} onNavigate={navigate} />}
    </div>
  );
}
