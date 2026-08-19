import React, { useState } from 'react';
import {
  Home, Wrench, Sparkles, Zap, Snowflake, Paintbrush,
  Phone, Mail, MapPin, Menu, X, ArrowRight, CheckCircle2,
  Star, Clock, ShieldCheck
} from 'lucide-react';

const services = [
  { icon: Wrench, title: 'Plumbing', text: 'Leaks, taps, pipes and repairs', price: 'From ₹299' },
  { icon: Zap, title: 'Electrical', text: 'Wiring, switches and electrical repairs', price: 'From ₹349' },
  { icon: Sparkles, title: 'Cleaning', text: 'Home, kitchen and deep cleaning', price: 'From ₹499' },
  { icon: Snowflake, title: 'AC Service', text: 'AC cleaning, repair and maintenance', price: 'From ₹599' },
  { icon: Paintbrush, title: 'Painting', text: 'Interior and exterior painting', price: 'From ₹1,999' },
  { icon: Home, title: 'Home Repair', text: 'Furniture, doors and general repairs', price: 'From ₹399' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const openBooking = (service = '') => {
    setSelectedService(service);
    setSubmitted(false);
    setBookingOpen(true);
  };

  const submitBooking = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-inner">
          <button className="logo" onClick={() => scrollTo('home')}>
            <span className="logo-mark"><Home size={20}/></span>
            Service<span>Hub</span>
          </button>

          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <button onClick={() => scrollTo('home')}>Home</button>
            <button onClick={() => scrollTo('services')}>Services</button>
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
            <button className="nav-cta" onClick={() => openBooking()}>Book a Service</button>
          </nav>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><CheckCircle2 size={16}/> Trusted home services</div>
              <h1>Your home.<br/><span>Our expertise.</span></h1>
              <p>Book reliable professionals for repairs, cleaning and maintenance — all from one simple place.</p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => openBooking()}>Book a Service <ArrowRight size={18}/></button>
                <button className="secondary-btn" onClick={() => scrollTo('services')}>Explore Services</button>
              </div>
              <div className="trust-row">
                <div><strong>10k+</strong><span>Happy customers</span></div>
                <div><strong>4.9/5</strong><span>Customer rating</span></div>
                <div><strong>24/7</strong><span>Support</span></div>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-top">
                <span>Quick booking</span><span className="status-dot">Available today</span>
              </div>
              <div className="booking-preview">
                <div className="preview-icon"><Wrench/></div>
                <div><strong>Professional service</strong><p>Verified experts at your doorstep</p></div>
              </div>
              <div className="mini-row"><ShieldCheck size={18}/><span>Verified professionals</span></div>
              <div className="mini-row"><Clock size={18}/><span>On-time service guarantee</span></div>
              <button className="primary-btn full" onClick={() => openBooking()}>Get started <ArrowRight size={17}/></button>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">WHAT WE DO</div><h2>Services for every corner of your home</h2></div>
              <p>From quick fixes to complete maintenance, our trained professionals are ready to help.</p>
            </div>
            <div className="service-grid">
              {services.map(({icon: Icon, title, text, price}) => (
                <article className="service-card" key={title}>
                  <div className="service-icon"><Icon/></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="service-bottom"><span>{price}</span><button onClick={() => openBooking(title)}>Book <ArrowRight size={15}/></button></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container about-grid">
            <div className="about-panel">
              <div className="about-number">01</div>
              <h2>Simple, safe and dependable.</h2>
              <p>We connect you with skilled professionals who care about quality, punctuality and your peace of mind.</p>
            </div>
            <div className="features">
              <div><ShieldCheck/><h3>Verified experts</h3><p>Professionals are screened before joining our service network.</p></div>
              <div><Clock/><h3>Fast response</h3><p>Choose a convenient time and get service at your doorstep.</p></div>
              <div><Star/><h3>Quality focused</h3><p>Transparent pricing and customer-first service from start to finish.</p></div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-box">
            <div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Need a professional at home?</h2><p>Tell us what you need and we'll take care of the rest.</p></div>
            <button className="primary-btn" onClick={() => openBooking()}>Book Now <ArrowRight size={18}/></button>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-heading"><div><div className="eyebrow">GET IN TOUCH</div><h2>Contact us</h2></div><p>Have a question or need help choosing a service? We're here.</p></div>
            <div className="contact-grid">
              <div className="contact-info">
                <div><Phone/><span><small>Call us</small><strong>+91 98765 43210</strong></span></div>
                <div><Mail/><span><small>Email</small><strong>hello@servicehub.in</strong></span></div>
                <div><MapPin/><span><small>Service area</small><strong>Hyderabad & nearby areas</strong></span></div>
              </div>
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will contact you soon.'); }}>
                <input required placeholder="Your name"/>
                <input required type="email" placeholder="Email address"/>
                <textarea required rows="5" placeholder="How can we help?"></textarea>
                <button className="primary-btn" type="submit">Send Message <ArrowRight size={17}/></button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div><button className="logo"><span className="logo-mark"><Home size={18}/></span>Service<span>Hub</span></button><p>Reliable services. Better homes.</p></div>
          <div className="footer-links"><button onClick={() => scrollTo('home')}>Home</button><button onClick={() => scrollTo('services')}>Services</button><button onClick={() => scrollTo('about')}>About</button><button onClick={() => scrollTo('contact')}>Contact</button></div>
          <span>© 2026 ServiceHub</span>
        </div>
      </footer>

      {bookingOpen && (
        <div className="modal-backdrop" onClick={() => setBookingOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setBookingOpen(false)}><X/></button>
            {!submitted ? (
              <>
                <div className="eyebrow">BOOK A SERVICE</div>
                <h2>Let's get it fixed.</h2>
                <p>Choose a service and tell us when you'd like a professional to visit.</p>
                <form onSubmit={submitBooking}>
                  <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s.title}>{s.title}</option>)}
                  </select>
                  <input required placeholder="Your name"/>
                  <input required placeholder="Phone number" type="tel"/>
                  <input required type="date"/>
                  <textarea required rows="3" placeholder="Address / service details"></textarea>
                  <button className="primary-btn full" type="submit">Confirm Request <ArrowRight size={17}/></button>
                </form>
              </>
            ) : (
              <div className="success">
                <CheckCircle2 size={54}/>
                <h2>Request received!</h2>
                <p>Our team will contact you shortly to confirm your booking.</p>
                <button className="primary-btn" onClick={() => setBookingOpen(false)}>Done</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;