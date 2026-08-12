import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// ─── DATA ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: '⚙️',
    title: 'Hydraulic System Repair',
    desc: 'Full diagnosis and repair of hydraulic pumps, cylinders, hoses, and control valves. We restore operating pressure and eliminate leaks on excavators, loaders, and industrial presses.',
  },
  {
    icon: '⚡',
    title: 'Electrical & Diagnostic',
    desc: 'Advanced ECM/ECU diagnostics, wiring harness repair, sensor replacement, and CAN bus troubleshooting using OEM-level scan tools.',
  },
  {
    icon: '🏗️',
    title: 'Structural & Fabrication',
    desc: 'Certified MIG/TIG welding, boom arm repairs, bucket and attachment rebuilds, and custom fabrication for machine-specific components.',
  },
  {
    icon: '🔩',
    title: 'Preventive Maintenance',
    desc: 'Scheduled PM programs including fluid analysis, filter replacement, torque checks, and pre/post inspection reporting to extend equipment life.',
  },
  {
    icon: '🚨',
    title: '24/7 Emergency Response',
    desc: 'When your machine goes down mid-shift, we mobilize fast. On-site field service available across West Georgia and Eastern Alabama.',
  },
];

const INDUSTRIES = [
  'Construction & Earthmoving',
  'Agriculture & Forestry',
  'Manufacturing & Production',
  'Utilities & Infrastructure',
  'Mining & Quarrying',
  'Material Handling',
];

const STATS = [
  { value: '24/7', label: 'Emergency Support' },
  { value: '100+', label: 'Equipment Types Serviced' },
  { value: 'W. GA', label: '& Eastern Alabama Coverage' },
  { value: 'Fast', label: 'Turnaround Guaranteed' },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Nav({ activeSection, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['home', 'services', 'about', 'contact'];

  const handleNav = (section) => {
    onNav(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="topbar">
        <span className="topbar__name">WEST GA EQUIPMENT SOLUTIONS</span>
        <span className="topbar__divider">|</span>
        <a href="tel:6789954632" className="topbar__link">(678) 995-4632</a>
        <span className="topbar__divider">|</span>
        <a href="mailto:getstarted@westgaes.com" className="topbar__link">getstarted@westgaes.com</a>
        <span className="topbar__divider">|</span>
        <span className="topbar__tag">24/7 Emergency Service</span>
      </div>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <button className="nav__logo" onClick={() => handleNav('home')}>
            <img src="/logo-full.png" alt="West GA Equipment Solutions" />
          </button>
          <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
            {links.map((l) => (
              <li key={l}>
                <button
                  className={`nav__link${activeSection === l ? ' nav__link--active' : ''}`}
                  onClick={() => handleNav(l)}
                >
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <a href="tel:6789954632" className="nav__cta">Call Now</a>
            </li>
          </ul>
          <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </nav>
    </>
  );
}

function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__stripes"></div>
        <div className="hero__overlay"></div>
        <div className="hero__glow-orange"></div>
        <div className="hero__glow-green"></div>
      </div>
      <div className={`hero__content${visible ? ' hero__content--visible' : ''}`}>
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Bowdon, GA · West Georgia & Eastern Alabama
        </div>
        <h1 className="hero__headline">
          <span className="hero__headline-top">INDUSTRIAL</span>
          <span className="hero__headline-main">EQUIPMENT</span>
          <span className="hero__headline-bottom">
            <span className="hero__headline-accent">REPAIR</span> & MAINTENANCE
          </span>
        </h1>
        <p className="hero__desc">
          Heavy machinery specialists serving West Georgia and Eastern Alabama.
          We minimize downtime, maximize performance, and respond 24/7.
        </p>
        <div className="hero__actions">
          <a href="tel:6789954632" className="btn btn--primary">
            <span>Call (678) 995-4632</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="mailto:getstarted@westgaes.com" className="btn btn--outline">Get a Free Quote</a>
        </div>
        <div className="hero__stats">
          {STATS.map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, index }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`service-card${vis ? ' service-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="service-card__top-bar"></div>
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{desc}</p>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section__header">
          <span className="section__label">What We Do</span>
          <h2 className="section__title">Full-Spectrum Equipment Services</h2>
          <p className="section__subtitle">
            From emergency field repairs to full scheduled maintenance programs — we have the
            tools, certifications, and experience to keep your fleet running.
          </p>
        </div>
        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
        <div className="services__cta">
          <p>Don't see your equipment type listed?</p>
          <a href="tel:6789954632" className="btn btn--primary">Call Us — We'll Help</a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container about__inner">
        <div className={`about__visual${vis ? ' about__visual--visible' : ''}`}>
          <div className="about__logo-wrap">
            <img src="/logo-icon.png" alt="WGES" />
          </div>
          <div className="about__industries">
            <p className="about__industries-label">Industries We Serve</p>
            <ul>
              {INDUSTRIES.map((ind) => (
                <li key={ind}>
                  <span className="about__check">✓</span> {ind}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`about__text${vis ? ' about__text--visible' : ''}`}>
          <span className="section__label">About WGES</span>
          <h2 className="section__title">West Georgia's Industrial Equipment Specialists</h2>
          <p>
            West Georgia Equipment Solutions is headquartered in Bowdon, GA, and serves
            industrial operations across West Georgia and Eastern Alabama. We built this
            company on one principle: <strong>your downtime is our problem to solve.</strong>
          </p>
          <p>
            Our technicians bring hands-on experience with the full range of heavy equipment —
            from compact track loaders to large excavators, agricultural combines to industrial
            presses. We operate with OEM-level diagnostic tools and hold ourselves to
            manufacturer tolerances on every repair.
          </p>
          <p>
            Whether you need a fast field service call or a complete rebuild in our workshop,
            you'll get accurate diagnostics, transparent estimates, and work done right the first time.
          </p>
          <div className="about__badges">
            <div className="about__badge">
              <span>📍</span>
              <div>
                <strong>Bowdon, GA 30108</strong>
                <small>Workshop & Field Services</small>
              </div>
            </div>
            <div className="about__badge">
              <span>🕐</span>
              <div>
                <strong>24 / 7 Response</strong>
                <small>Emergency calls answered</small>
              </div>
            </div>
          </div>
          <a href="tel:6789954632" className="btn btn--primary">Talk to a Technician</a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', company: '', phone: '', email: '',
    machine: '', message: '', serviceDate: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mnjrkjqk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          firstName: form.firstName,
          lastName: form.lastName,
          company: form.company,
          phone: form.phone,
          email: form.email,
          machine: form.machine,
          serviceDate: form.serviceDate,
          message: form.message,
          _subject: `Service Request from ${form.firstName} ${form.lastName} — West Georgia Equipment Solutions`,
        }),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ firstName: '', lastName: '', company: '', phone: '', email: '', machine: '', message: '', serviceDate: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Get In Touch</span>
          <h2 className="section__title">Request Service or an Estimate</h2>
          <p className="section__subtitle">
            Fill out the form below and we'll follow up promptly, or call us directly
            for immediate assistance.
          </p>
        </div>
        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-card">
              <div className="contact__info-icon">📞</div>
              <div>
                <strong>Call Us</strong>
                <a href="tel:6789954632">(678) 995-4632</a>
                <small>24/7 for emergencies</small>
              </div>
            </div>
            <div className="contact__info-card">
              <div className="contact__info-icon">✉️</div>
              <div>
                <strong>Email</strong>
                <a href="mailto:getstarted@westgaes.com">getstarted@westgaes.com</a>
                <small>Quotes & general inquiries</small>
              </div>
            </div>
            <div className="contact__info-card">
              <div className="contact__info-icon">📍</div>
              <div>
                <strong>Location</strong>
                <span>Bowdon, GA 30108</span>
                <small>Shop & field service coverage</small>
              </div>
            </div>
            <div className="contact__info-card">
              <div className="contact__info-icon">🔵</div>
              <div>
                <strong>Facebook</strong>
                <a href="https://facebook.com/WestGAES" target="_blank" rel="noreferrer">facebook.com/WestGAES</a>
                <small>Follow for updates</small>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__row">
              <div className="form__group">
                <label>First Name *</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="John" />
              </div>
              <div className="form__group">
                <label>Last Name *</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Smith" />
              </div>
            </div>
            <div className="form__row">
              <div className="form__group">
                <label>Company</label>
                <input name="company" value={form.company} onChange={handleChange} placeholder="ABC Construction" />
              </div>
              <div className="form__group">
                <label>Phone *</label>
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="(678) 000-0000" />
              </div>
            </div>
            <div className="form__row">
              <div className="form__group">
                <label>Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" />
              </div>
              <div className="form__group">
                <label>Preferred Service Date</label>
                <input name="serviceDate" type="date" value={form.serviceDate} onChange={handleChange} />
              </div>
            </div>
            <div className="form__group">
              <label>Machine Info (Make, Model, Serial #)</label>
              <input name="machine" value={form.machine} onChange={handleChange} placeholder="e.g. Dogapillar E00, S/N DGP00E..." />
            </div>
            <div className="form__group">
              <label>Describe the Issue *</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Describe the problem, symptoms, or service needed..." />
            </div>
            <button type="submit" className={`btn btn--primary btn--full${status === 'sending' ? ' btn--loading' : ''}`} disabled={status === 'sending' || status === 'sent'}>
              {status === 'sent' ? '✓ Request Submitted!' : status === 'sending' ? 'Sending...' : 'Submit Service Request'}
            </button>
            {status === 'sent' && (
              <p className="form__success">✓ We received your request and will follow up shortly. For immediate help, call <a href="tel:6789954632">(678) 995-4632</a>.</p>
            )}
            {status === 'error' && (
              <p className="form__error">Something went wrong. Please call <a href="tel:6789954632">(678) 995-4632</a> or email <a href="mailto:getstarted@westgaes.com">getstarted@westgaes.com</a>.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo-full.png" alt="West GA Equipment Solutions" />
          <p>Heavy machinery repair and industrial equipment maintenance serving West Georgia and Eastern Alabama. Available 24/7.</p>
          <a href="https://facebook.com/WestGAES" target="_blank" rel="noreferrer" className="footer__social">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            Facebook
          </a>
        </div>
        <div className="footer__links">
          <h4>Services</h4>
          <ul>
            {SERVICES.map(s => (
              <li key={s.title}>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>{s.title}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__contact">
          <h4>Contact</h4>
          <p><a href="tel:6789954632">(678) 995-4632</a></p>
          <p><a href="mailto:getstarted@westgaes.com">getstarted@westgaes.com</a></p>
          <p>Bowdon, GA 30108</p>
          <p className="footer__hours">24/7 Emergency Response</p>
          <a href="tel:6789954632" className="btn btn--primary footer__cta">Request Service</a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} West Georgia Equipment Solutions. All rights reserved.</p>
          <p>
            <a href="https://www.westgaes.com" target="_blank" rel="noreferrer">westgaes.com</a>
            {' · '}
            <a href="https://facebook.com/WestGAES" target="_blank" rel="noreferrer">Facebook</a>
          </p>
        </div>
        <div className="footer__credit">
          Built by <a href="https://www.dwglobalfl.com" target="_blank" rel="noreferrer">DW Global Management</a> · Orlando, Florida
        </div>
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'services', 'about', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app">
      <Nav activeSection={activeSection} onNav={setActiveSection} />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
