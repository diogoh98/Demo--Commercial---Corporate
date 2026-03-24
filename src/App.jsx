import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Package, Building2, CalendarDays, Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 bg-white/95 backdrop-blur-md border-b flex justify-between items-center px-6 md:px-16 py-4 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
          <span className="font-sans font-black text-charcoal text-[18px] uppercase tracking-tight">FRAME</span>
          <span className="font-mono text-warm-gray text-[9px] tracking-[0.35em] uppercase">COLLECTIVE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {['Work', 'Services', 'About', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-sans font-normal text-[13px] text-warm-gray hover:text-charcoal tracking-[0.03em] transition-colors">{link}</a>
            ))}
          </div>
          <a href="#quote" className="bg-slate hover:bg-slate-mid text-white font-sans font-semibold text-[11px] tracking-[0.12em] px-[22px] py-[9px] rounded-[2px] transition-colors uppercase">
            GET A QUOTE
          </a>
        </div>

        <button className="md:hidden text-charcoal" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button className="absolute top-6 right-6 text-charcoal" onClick={() => setMobileMenuOpen(false)}>
          <X size={28} strokeWidth={1} />
        </button>
        <div className="flex flex-col items-center gap-8 text-center">
          {['Work', 'Services', 'About', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="font-sans font-bold text-3xl text-charcoal uppercase tracking-widest">{link}</a>
          ))}
          <a href="#quote" onClick={() => setMobileMenuOpen(false)} className="bg-slate text-white font-sans font-semibold text-sm tracking-[0.12em] px-8 py-4 mt-4 rounded-[2px] uppercase">
            GET A QUOTE
          </a>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-elem", {
        y: 30, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power2.out", delay: 0.2
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="h-[100dvh] w-full grid grid-cols-1 md:grid-cols-[58%_42%] pt-16 md:pt-0">
      <div className="bg-white flex flex-col justify-center px-8 md:px-[72px] relative z-10 h-[55vh] md:h-full">
        <div className="max-w-[600px]">
          <span className="hero-elem font-mono text-[10px] text-slate tracking-[0.25em] block mb-6 uppercase">COMMERCIAL · CORPORATE · CHICAGO</span>
          
          <h1 className="hero-elem font-sans font-black text-charcoal text-[56px] md:text-[96px] leading-[0.9] tracking-tight mb-8">
            <span className="block">Imagery</span>
            <span className="block">that means</span>
            <span className="block text-gold">business.</span>
          </h1>

          <p className="hero-elem font-sans font-light text-[14px] text-warm-gray tracking-[0.05em] mb-12">
            Executive Portraits · Product · Architecture · Events · Brand
          </p>

          <div className="hero-elem flex flex-wrap items-center gap-4 mb-8">
            <a href="#quote" className="bg-slate hover:bg-slate-mid text-white font-sans font-semibold text-[12px] tracking-[0.1em] px-6 py-3 rounded-[2px] transition-colors">GET A QUOTE</a>
            <a href="#work" className="border hover:border-slate text-charcoal font-sans font-normal text-[12px] px-6 py-3 rounded-[2px] transition-colors">VIEW OUR WORK</a>
          </div>

          <div className="hero-elem font-mono text-[10px] text-warm-gray tracking-[0.1em] mt-auto md:absolute md:bottom-12">
            4.9 <span className="text-gold">★</span> Google · 241 Reviews · Licensed & Insured · Available Nationwide
          </div>
        </div>
      </div>
      
      <div className="h-[45vh] md:h-full relative overflow-hidden bg-light-gray">
        <img src="/images/hero.jpg" alt="Corporate Executive Portrait" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

const ClientLogos = () => {
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".logo-anim", {
        scrollTrigger: { trigger: comp.current, start: "top 85%" },
        y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power2.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="bg-off-white border-y py-10 px-6 md:px-16 overflow-hidden">
      <div className="logo-anim text-center font-mono text-[10px] text-warm-gray tracking-[0.25em] mb-10">TRUSTED BY LEADING BRANDS</div>
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 mb-8 max-w-7xl mx-auto">
        {['AXIOM', 'MERIDIAN', 'LOFTWORK', 'NORTEK', 'VERIDIAN', 'PRAXIS'].map((logo, i) => (
          <div key={logo} className={`logo-anim font-sans font-bold text-[#C8C5C0] hover:text-slate transition-colors duration-300 ${i%2===0 ? 'text-[18px] font-black' : 'text-[16px]'} tracking-tight`}>
            {logo}
          </div>
        ))}
      </div>
      <div className="logo-anim text-center font-mono text-[10px] text-warm-gray">+ 80 more companies across finance, tech, law and healthcare</div>
    </section>
  );
};

const StatsBar = () => {
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".stat-box", {
        scrollTrigger: { trigger: comp.current, start: "top 80%" },
        y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  const stats = [
    { num: '500+', label: 'PROJECTS DELIVERED', color: 'text-white' },
    { num: '86', label: 'Fortune 500 CLIENTS', color: 'text-white' },
    { num: '15', label: 'YEARS EXPERIENCE', color: 'text-white' },
    { num: '4.9 ★', label: 'GOOGLE RATING', color: 'text-gold' }
  ];

  return (
    <section ref={comp} className="bg-slate py-12 md:py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-0 divide-x-0 md:divide-x divide-white/15">
        {stats.map((s, i) => (
          <div key={i} className="stat-box flex flex-col items-center text-center px-4">
            <div className={`font-sans font-black text-[36px] md:text-[48px] leading-tight ${s.color}`}>{s.num}</div>
            <div className="font-mono text-[9px] text-white/60 tracking-[0.2em] uppercase mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const PortfolioGrid = () => {
  const images = [
    { id: 1, cat: 'EXECUTIVE', span: 'col-span-12 md:col-span-4' },
    { id: 2, cat: 'ARCHITECTURE', span: 'col-span-12 md:col-span-4' },
    { id: 3, cat: 'PRODUCT', span: 'col-span-12 md:col-span-4' },
    { id: 4, cat: 'EVENTS', span: 'col-span-12 md:col-span-6' },
    { id: 5, cat: 'TEAM', span: 'col-span-12 md:col-span-6' },
    { id: 6, cat: 'PRODUCT', span: 'col-span-12 md:col-span-3' },
    { id: 7, cat: 'REAL ESTATE', span: 'col-span-12 md:col-span-5' },
    { id: 8, cat: 'BRAND', span: 'col-span-12 md:col-span-4' },
  ];

  return (
    <section id="work" className="bg-white border-t px-1 md:px-0 py-16 md:py-24">
      <div className="px-5 md:px-16 mb-12 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] text-slate tracking-[0.25em] mb-4 block">SELECTED WORK</span>
        <h2 className="font-sans font-black text-[42px] md:text-[72px] text-charcoal leading-[0.95] tracking-tight">
          <span className="block">Eight projects.</span>
          <span className="block">Zero compromise.</span>
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-[2px] px-1 md:px-[2px]">
        {images.map((img) => (
          <div key={img.id} className={`${img.span} relative group overflow-hidden aspect-square md:aspect-auto ${img.id>3 ? 'md:h-[50vh]' : 'md:h-[45vh]'}`}>
            <img src={`/images/grid-${img.id}.jpg`} alt={img.cat} className="w-full h-full object-cover transition-transform duration-[450ms] ease-out group-hover:scale-[1.03]" loading="lazy" />
            <div className="absolute inset-0 bg-slate/0 group-hover:bg-slate/10 transition-colors duration-[450ms]"></div>
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">{img.cat}</div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="#contact" className="font-mono text-[10px] text-slate hover:text-charcoal tracking-[0.15em] transition-colors">REQUEST FULL PORTFOLIO →</a>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'EXECUTIVE PORTRAITS', icon: User, price: '$750', badge: null, highlight: false, list: ['Half-Day Studio Session', 'Individual & Group Headshots', '40 Retouched Images', 'LinkedIn-Ready Exports', 'Commercial License Included'] },
    { title: 'PRODUCT & BRAND', icon: Package, price: '$1,100', badge: null, highlight: false, list: ['Full Studio Day', 'Up to 20 Product SKUs', '80 Retouched Images', 'E-Commerce & Print Ready', 'Full Commercial Rights'] },
    { title: 'ARCHITECTURE & REAL ESTATE', icon: Building2, price: '$1,800', badge: 'HIGH DEMAND', highlight: true, list: ['Exterior + Interior Coverage', 'Twilight & Daylight Shots', '60 Retouched Images', 'Virtual Tour Ready Exports', 'MLS & Print License'] },
    { title: 'EVENTS & CONFERENCES', icon: CalendarDays, price: '$2,400', badge: null, highlight: false, list: ['Full Day Event Coverage', 'Two-Photographer Team', '200+ Retouched Images', 'Same-Week Delivery', 'Full Commercial License'] }
  ];

  return (
    <section id="services" className="bg-off-white border-t py-16 md:py-24">
      <div className="px-6 md:px-16 mb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] text-slate tracking-[0.25em] mb-4 block">WHAT WE DO</span>
        <h2 className="font-sans font-black text-[42px] md:text-[72px] text-charcoal leading-[0.95] tracking-tight">
          <span className="block">Four services.</span>
          <span className="block">One standard.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-16 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className={`bg-white rounded-[2px] p-6 md:p-8 flex flex-col relative ${s.highlight ? 'border border-slate' : 'border'}`}>
            {s.badge && <div className="absolute top-0 right-0 m-6 bg-slate-light px-2 py-1 font-mono text-[9px] text-slate tracking-[0.2em]">{s.badge}</div>}
            <s.icon size={28} className="text-slate mb-8" strokeWidth={1.5} />
            <h3 className="font-mono text-[10px] text-slate tracking-[0.2em] mb-2">{s.title}</h3>
            <div className="font-sans font-bold text-[36px] text-charcoal mb-6">From {s.price}</div>
            <hr className="border-t border-mid-gray mb-6" />
            <ul className="mb-8 flex-grow">
              {s.list.map((item, idx) => (
                <li key={idx} className="font-sans font-light text-[13px] text-warm-gray mb-3 flex items-start">
                  <span className="text-slate mr-3 opacity-60">→</span> {item}
                </li>
              ))}
            </ul>
            <a href="#quote" className={`text-center font-sans font-semibold text-[11px] tracking-[0.1em] py-4 rounded-[2px] transition-colors ${s.highlight ? 'bg-slate text-white hover:bg-slate-mid' : 'border border-mid-gray text-charcoal hover:border-slate hover:text-slate'}`}>
              GET QUOTE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".proc-step", {
        scrollTrigger: { trigger: comp.current, start: "top 75%" },
        y: 20, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  const steps = [
    { n: '01', t: 'BRIEF', d: 'We align on scope, style and timeline in 24 hours.' },
    { n: '02', t: 'SHOOT', d: 'Professional on-site or studio session at your location.' },
    { n: '03', t: 'DELIVER', d: 'Fully edited gallery ready within 5 business days.' },
    { n: '04', t: 'DONE', d: 'You own the images. We handle the licensing.' }
  ];

  return (
    <section ref={comp} className="bg-white border-t py-16 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-[10px] text-slate tracking-[0.25em] mb-4 block">HOW IT WORKS</span>
        <h2 className="font-sans font-black text-[42px] md:text-[72px] text-charcoal leading-[1] tracking-tight mb-20 md:mb-32">
          Simple. Precise. Fast.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
          <div className="hidden md:block absolute top-[10px] left-0 w-full h-[1px] bg-mid-gray -z-10"></div>
          {steps.map((s, i) => (
            <div key={i} className="proc-step bg-white md:pt-8 md:pr-4 relative">
              <div className="font-mono text-[10px] text-gold mb-4 md:-mt-[42px] bg-white inline-block md:pr-2">{s.n} → {s.t}</div>
              <p className="font-sans font-light text-[13px] text-warm-gray leading-relaxed max-w-[240px]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutDiane = () => {
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-img", {
        scrollTrigger: { trigger: comp.current, start: "top 75%" },
        x: -40, opacity: 0, duration: 0.8, ease: "power2.out"
      });
      gsap.from(".about-text", {
        scrollTrigger: { trigger: comp.current, start: "top 75%" },
        x: 40, opacity: 0, duration: 0.8, ease: "power2.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={comp} className="bg-off-white border-t grid grid-cols-1 md:grid-cols-[45%_55%]">
      <div className="about-img relative h-[50vh] md:h-auto border-r border-slate/15">
        <img src="/images/diane.jpg" alt="Diane Mercer - Photographer" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute bottom-6 left-6 bg-white border p-4 shadow-sm">
          <div className="font-sans font-semibold text-[14px] text-charcoal">Diane Mercer</div>
          <div className="font-mono text-[10px] text-slate mb-1">Chicago, IL</div>
          <div className="font-sans font-light text-[12px] text-warm-gray">15 Years · 500+ Projects</div>
        </div>
      </div>
      
      <div className="about-text p-8 md:p-[72px_64px] flex flex-col justify-center">
        <span className="font-mono text-[10px] text-slate tracking-[0.2em] mb-6 block">DIANE MERCER · LEAD PHOTOGRAPHER</span>
        <h2 className="font-sans font-bold text-[28px] md:text-[38px] text-charcoal leading-[1.2] tracking-tight mb-8">
          "Corporate photography is not about making things look good. It's about making them work."
        </h2>
        
        <div className="w-[48px] h-[1px] bg-gold mb-8"></div>
        
        <p className="font-sans font-light text-[15px] text-warm-gray leading-[2.0] mb-10">
          With 15 years shooting for Fortune 500 companies, startups, law firms and global brands, I understand what corporate imagery needs to do — communicate authority, build trust and convert. I don't just show up with a camera. I come with a creative brief, a production schedule and a delivery guarantee. My clients don't just get great photos. They get a seamless professional experience from first call to final file.
        </p>
        
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="font-mono text-[10px] text-slate">APA Member</span>
          <span className="text-gold text-[10px]">•</span>
          <span className="font-mono text-[10px] text-slate">ASMP Certified</span>
          <span className="text-gold text-[10px]">•</span>
          <span className="font-mono text-[10px] text-slate">15 Yrs Exp.</span>
        </div>
        
        <a href="#" className="font-mono text-[10px] text-slate hover:text-charcoal tracking-widest uppercase transition-colors self-start">
          DOWNLOAD CAPABILITIES DECK →
        </a>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      q: "We briefed Diane on Monday. She shot on Wednesday. We had 120 retouched images by Friday. The quality was exceptional — every single frame was boardroom-ready. She is now our permanent photography partner.",
      n: "Richard Holt", t: "CMO · Axiom Financial Group"
    },
    {
      q: "Our previous headshots were embarrassing for a Series B company. Diane transformed our entire team's visual presence in one day. The new images went live on our website and LinkedIn — investor engagement went up noticeably within two weeks.",
      n: "Sarah Lin", t: "Head of Brand · Loftwork Technologies"
    },
    {
      q: "Diane understands the corporate world in a way that most photographers don't. She needed no direction, caused no disruption to our office, and delivered images that now represent our firm to the highest standard.",
      n: "James Whitfield", t: "Managing Partner · Nortek Legal"
    }
  ];

  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const int = setInterval(() => {
      setActive(a => (a + 1) % reviews.length);
    }, 5500);
    return () => clearInterval(int);
  }, []);

  return (
    <section className="bg-white border-t py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-[10px] text-slate tracking-[0.25em] mb-4 block">CLIENT RESULTS</span>
        <h2 className="font-sans font-black text-[42px] md:text-[72px] text-charcoal leading-[0.95] tracking-tight mb-16">
          <span className="block">The numbers</span>
          <span className="block">speak first.</span>
        </h2>
        
        <div className="bg-off-white border p-8 md:p-12 relative group max-w-4xl mx-auto rounded-[2px]" >
          <span className="absolute top-4 left-6 font-sans font-black text-[100px] text-charcoal/5 leading-none">"</span>
          <div className="min-h-[160px] flex items-center relative z-10">
            <p className="font-sans font-light text-[15px] text-warm-gray leading-[1.9] italic">
              {reviews[active].q}
            </p>
          </div>
          <div className="mt-8 relative z-10">
            <div className="font-sans font-semibold text-[13px] text-charcoal">{reviews[active].n}</div>
            <div className="font-mono text-[10px] text-slate mt-1">{reviews[active].t}</div>
          </div>
        </div>
        
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-all ${i===active ? 'bg-slate scale-110' : 'bg-mid-gray'}`} aria-label={`Review ${i+1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  return (
    <section id="quote" className="bg-off-white border-t border-b grid grid-cols-1 md:grid-cols-2">
      <div className="p-8 md:p-16 lg:p-[96px] border-r border-mid-gray flex flex-col justify-center">
        <span className="font-mono text-[10px] text-slate tracking-[0.25em] mb-6 block">REQUEST A QUOTE</span>
        <h2 className="font-sans font-bold text-[32px] md:text-[40px] text-charcoal leading-[1.15] tracking-tight mb-8">
          Let's talk about your project.
        </h2>
        
        <div className="w-[48px] h-[1px] bg-gold mb-8"></div>
        
        <p className="font-sans font-light text-[15px] text-warm-gray leading-[1.9] mb-12">
          Whether you need executive headshots for 200 employees, product photography for a product launch, or full event coverage — we can scope, quote and schedule within 24 hours. No creative agencies. No middlemen. Direct access to Diane.
        </p>
        
        <div className="flex flex-col gap-3 font-sans font-light text-[13px] text-warm-gray mb-16">
          <a href="mailto:hello@framecollective.com" className="hover:text-charcoal transition-colors">hello@framecollective.com</a>
          <a href="tel:3127409900" className="hover:text-charcoal transition-colors">(312) 740-9900</a>
          <a href="#" className="hover:text-charcoal transition-colors">@framecollective</a>
        </div>
        
        <div className="font-mono text-[10px] text-slate p-4 border bg-white/50 inline-flex max-w-fit">
          Response guaranteed within 24 business hours.
        </div>
      </div>
      
      <div className="p-8 md:p-16 lg:p-[96px] bg-white">
        <form className="flex flex-col gap-8" onSubmit={e=>e.preventDefault()}>
          <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-mid-gray pb-3 font-sans font-light text-[14px] text-charcoal focus:outline-none focus:border-slate transition-colors placeholder:text-warm-gray" />
          <input type="text" placeholder="Company / Organization" className="w-full bg-transparent border-b border-mid-gray pb-3 font-sans font-light text-[14px] text-charcoal focus:outline-none focus:border-slate transition-colors placeholder:text-warm-gray" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-mid-gray pb-3 font-sans font-light text-[14px] text-charcoal focus:outline-none focus:border-slate transition-colors placeholder:text-warm-gray" />
             <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-mid-gray pb-3 font-sans font-light text-[14px] text-charcoal focus:outline-none focus:border-slate transition-colors placeholder:text-warm-gray" />
          </div>
          
          <select className="w-full bg-transparent border-b border-mid-gray pb-3 font-sans font-light text-[14px] text-charcoal focus:outline-none focus:border-slate transition-colors appearance-none cursor-pointer">
            <option value="" disabled selected className="text-warm-gray">Project Type</option>
            <option value="exec">Executive Portraits</option>
            <option value="product">Product & Brand</option>
            <option value="arch">Architecture & Real Estate</option>
            <option value="events">Events & Conferences</option>
            <option value="multi">Multiple Services</option>
            <option value="unsure">Not Sure</option>
          </select>
          
          <input type="text" placeholder="Number of Subjects / SKUs / Sq Ft" className="w-full bg-transparent border-b border-mid-gray pb-3 font-sans font-light text-[14px] text-charcoal focus:outline-none focus:border-slate transition-colors placeholder:text-warm-gray" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input type="text" placeholder="Preferred Date / Timeline" className="w-full bg-transparent border-b border-mid-gray pb-3 font-sans font-light text-[14px] text-charcoal focus:outline-none focus:border-slate transition-colors placeholder:text-warm-gray" />
            <select className="w-full bg-transparent border-b border-mid-gray pb-3 font-sans font-light text-[14px] text-charcoal focus:outline-none focus:border-slate transition-colors appearance-none cursor-pointer">
              <option value="" disabled selected>Approximate Budget</option>
              <option value="<1k">Under $1K</option>
              <option value="1-3k">$1K–$3K</option>
              <option value="3-7k">$3K–$7K</option>
              <option value=">7k">$7K+</option>
              <option value="quote">Need a Quote</option>
            </select>
          </div>
          
          <textarea rows="4" placeholder="Describe your project, deliverables and any specific requirements" className="w-full bg-transparent border-b border-mid-gray pb-3 font-sans font-light text-[14px] text-charcoal focus:outline-none focus:border-slate transition-colors placeholder:text-warm-gray resize-none"></textarea>
          
          <select className="w-full bg-transparent border-b border-mid-gray pb-3 font-sans font-light text-[14px] text-charcoal focus:outline-none focus:border-slate transition-colors appearance-none cursor-pointer">
              <option value="" disabled selected>How did you find us?</option>
              <option value="google">Google</option>
              <option value="linkedin">LinkedIn</option>
              <option value="referral">Referral</option>
              <option value="directory">Industry Directory</option>
              <option value="other">Other</option>
          </select>

          <button type="submit" className="w-full bg-slate hover:bg-slate-mid text-white font-sans font-semibold text-[12px] tracking-[0.2em] h-[52px] rounded-[2px] transition-colors mt-4">
            SUBMIT REQUEST →
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  const isBusinessHours = () => {
    const d = new Date();
    // Use simple logic, assume server/local time for demo
    const day = d.getDay();
    const hr = d.getHours();
    return (day >= 1 && day <= 5) && (hr >= 9 && hr < 18);
  };

  return (
    <footer className="bg-near-black border-t border-white/5 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-4">
             <div className="flex items-baseline gap-2">
               <span className="font-sans font-black text-[20px] text-white uppercase tracking-tight">FRAME</span>
               <span className="font-mono text-[9px] text-white/40 tracking-[0.4em] uppercase">COLLECTIVE</span>
             </div>
             <p className="font-sans font-light text-[13px] text-white/40 max-w-[200px]">Imagery that means business.</p>
             <p className="font-mono text-[9px] text-warm-gray mt-2">APA · ASMP · Licensed & Insured</p>
          </div>
          
          <div className="flex flex-col gap-4">
             <div className="grid grid-cols-2 gap-y-4 gap-x-8">
               {['Work', 'Services', 'About', 'Contact'].map(link => (
                 <a key={link} href={`#${link.toLowerCase()}`} className="font-sans font-light text-[13px] text-white/50 hover:text-white transition-colors">{link}</a>
               ))}
               <a href="#privacy" className="font-sans font-light text-[13px] text-white/50 hover:text-white transition-colors">Privacy</a>
               <a href="#terms" className="font-sans font-light text-[13px] text-white/50 hover:text-white transition-colors">Terms</a>
             </div>
          </div>
          
          <div className="flex flex-col gap-4">
             <a href="mailto:hello@framecollective.com" className="font-sans font-light text-[13px] text-white/50 hover:text-white transition-colors">hello@framecollective.com</a>
             <a href="tel:3127409900" className="font-sans font-light text-[13px] text-white/50 hover:text-white transition-colors">(312) 740-9900</a>
             <div className="font-mono text-[10px] text-warm-gray mt-2 flex items-center gap-3">
               <span className={`w-[6px] h-[6px] rounded-full inline-block ${isBusinessHours() ? 'bg-green-500 animate-pulse' : 'bg-warm-gray'}`}></span>
               <span>Mon–Fri, 9AM–6PM CT</span>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[10px] text-white/20 text-center md:text-left">
            &copy; {new Date().getFullYear()} Frame Collective · Chicago, IL · hello@framecollective.com
          </div>
          <div className="font-mono text-[9px] text-white/15 italic text-center md:text-right">
            This is a demo page created for portfolio purposes.
          </div>
          <div className="font-mono text-[10px] text-white/40 tracking-[0.1em] flex items-center gap-2">
            <span className={`w-[6px] h-[6px] rounded-full inline-block ${isBusinessHours() ? 'bg-green-500 animate-pulse' : 'bg-warm-gray'}`}></span>
            ACCEPTING NEW CLIENTS
          </div>
        </div>
      </div>
    </footer>
  );
};

const FixedComponents = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to("#progress", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        },
        width: "100%",
        ease: "none"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 h-[3px] bg-slate z-[100] w-0" id="progress"></div>
      <a href="#quote" className="md:hidden fixed bottom-0 left-0 w-full bg-slate text-white text-center h-[52px] leading-[52px] font-sans font-semibold text-[12px] tracking-[0.15em] z-50">
        GET A QUOTE
      </a>
    </>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll logic (simplified for React)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="font-sans antialiased text-charcoal bg-white">
      <FixedComponents />
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <ClientLogos />
      <StatsBar />
      <PortfolioGrid />
      <Services />
      <Process />
      <AboutDiane />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  );
}
