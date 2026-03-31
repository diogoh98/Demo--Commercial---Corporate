import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Package, Building2, CalendarDays, Menu, X, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CustomCursor = () => {
  const dot = useRef(null);
  const outline = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if(dot.current) {
        dot.current.style.left = e.clientX + 'px';
        dot.current.style.top = e.clientY + 'px';
      }
      if(outline.current) {
        setTimeout(() => {
          if(outline.current) {
            outline.current.style.left = e.clientX + 'px';
            outline.current.style.top = e.clientY + 'px';
          }
        }, 50);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, select, img, .custom-cursor-target');
      if(target) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="custom-cursor-dot hidden md:block"></div>
      <div ref={outline} className="custom-cursor-outline hidden md:block"></div>
    </>
  );
};

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 bg-near-black/70 backdrop-blur-md border-b border-glass-border flex justify-between items-center px-6 md:px-16 py-4 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
          <span className="font-sans font-black text-off-white text-[18px] uppercase tracking-tight">FRAME</span>
          <span className="font-mono text-warm-gray text-[9px] tracking-[0.35em] uppercase">COLLECTIVE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {['Work', 'Services', 'About', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-sans font-normal text-[13px] text-light-gray hover:text-gold tracking-[0.03em] transition-colors">{link}</a>
            ))}
          </div>
          <a href="#quote" className="bg-gold hover:bg-slate-mid text-near-black hover:text-off-white font-sans font-semibold text-[11px] tracking-[0.12em] px-[22px] py-[9px] rounded-[2px] transition-colors uppercase">
            GET A QUOTE
          </a>
        </div>

        <button className="md:hidden text-off-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-near-black z-[60] flex flex-col items-center justify-center transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button className="absolute top-6 right-6 text-off-white hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
          <X size={28} strokeWidth={1} />
        </button>
        <div className="flex flex-col items-center gap-8 text-center">
          {['Work', 'Services', 'About', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="font-sans font-black text-4xl text-off-white hover:text-gold transition-colors uppercase tracking-widest">{link}</a>
          ))}
          <a href="#quote" onClick={() => setMobileMenuOpen(false)} className="bg-gold text-near-black font-sans font-semibold text-sm tracking-[0.12em] px-8 py-4 mt-8 rounded-[2px] uppercase">
            GET A QUOTE
          </a>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  const comp = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Ken Burns Effect
      gsap.to(bgRef.current, {
        scale: 1.15,
        duration: 25,
        ease: "none",
        repeat: -1,
        yoyo: true
      });

      gsap.from(".hero-elem", {
        y: 40, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.3
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="h-[100dvh] w-full relative overflow-hidden flex items-center justify-center pt-16 md:pt-0">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div ref={bgRef} className="w-full h-full origin-center">
          <img src="/images/hero.jpg" alt="Corporate Executive Portrait" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/70 to-near-black/40"></div>
      </div>

      <div className="relative z-10 px-6 md:px-[72px] w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-12 md:mt-0">
        <div className="max-w-[800px] text-center md:text-left mx-auto md:mx-0">
          <span className="hero-elem font-mono text-[10px] md:text-[12px] text-gold tracking-[0.3em] block mb-6 uppercase">COMMERCIAL · CORPORATE · CHICAGO</span>
          
          <h1 className="hero-elem font-sans font-black text-off-white text-[64px] md:text-[120px] leading-[0.9] tracking-tighter mb-8">
            <span className="block">Imagery</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-light-gray to-mid-gray">that means</span>
            <span className="block text-gold">business.</span>
          </h1>

          <p className="hero-elem font-sans font-light text-[15px] md:text-[20px] text-light-gray tracking-[0.05em] mb-12 max-w-[600px] mx-auto md:mx-0">
            Executive Portraits · Product · Architecture · Events · Brand
          </p>

          <div className="hero-elem flex flex-wrap items-center justify-center md:justify-start gap-6 mb-12">
            <a href="#quote" className="bg-gold hover:bg-slate-mid text-near-black hover:text-off-white font-sans font-semibold text-[13px] tracking-[0.15em] px-10 py-5 rounded-[2px] transition-all duration-300">GET A QUOTE</a>
            <a href="#work" className="border border-glass-border hover:border-gold text-off-white font-sans font-light text-[13px] tracking-[0.15em] px-10 py-5 rounded-[2px] transition-all duration-300 bg-glass-dark backdrop-blur-sm">VIEW OUR WORK</a>
          </div>

          <div className="hero-elem font-mono text-[10px] text-warm-gray tracking-[0.15em]">
            <span className="text-gold">4.9 ★</span> Google · 241 Reviews · Licensed & Insured
          </div>
        </div>
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
        y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="bg-near-black border-y border-glass-border py-12 px-6 md:px-16 overflow-hidden">
      <div className="logo-anim text-center font-mono text-[10px] text-warm-gray tracking-[0.3em] mb-12 uppercase">TRUSTED BY LEADING BRANDS</div>
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-4 mb-10 max-w-7xl mx-auto opacity-70">
        {['AXIOM', 'MERIDIAN', 'LOFTWORK', 'NORTEK', 'VERIDIAN', 'PRAXIS'].map((logo, i) => (
          <div key={logo} className={`logo-anim font-sans font-bold text-mid-gray hover:text-gold transition-colors duration-500 custom-cursor-target ${i%2===0 ? 'text-[20px] font-black' : 'text-[18px]'} tracking-widest`}>
            {logo}
          </div>
        ))}
      </div>
      <div className="logo-anim text-center font-mono text-[10px] text-mid-gray">+ 80 more companies across finance, tech, law and healthcare</div>
    </section>
  );
};

const StatsBar = () => {
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".stat-box", {
        scrollTrigger: { trigger: comp.current, start: "top 80%" },
        scale: 0.9, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  const stats = [
    { num: '500+', label: 'PROJECTS DELIVERED', color: 'text-off-white' },
    { num: '86', label: 'Fortune 500 CLIENTS', color: 'text-off-white' },
    { num: '15', label: 'YEARS EXPERIENCE', color: 'text-off-white' },
    { num: '4.9 ★', label: 'GOOGLE RATING', color: 'text-gold' }
  ];

  return (
    <section ref={comp} className="bg-near-black relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-near-black to-[#0a0a0a]"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-16 md:gap-0 divide-x-0 md:divide-x divide-glass-border relative z-10">
        {stats.map((s, i) => (
          <div key={i} className="stat-box flex flex-col items-center text-center px-4 custom-cursor-target">
            <div className={`font-sans font-black text-[42px] md:text-[56px] leading-tight tracking-tighter ${s.color}`}>{s.num}</div>
            <div className="font-mono text-[10px] text-warm-gray tracking-[0.25em] uppercase mt-2">{s.label}</div>
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

  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.grid-item').forEach(item => {
        const img = item.querySelector('img');
        gsap.to(img, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
        
        gsap.from(item, {
          scrollTrigger: {
             trigger: item,
             start: "top 90%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={comp} className="bg-[#050505] border-t border-glass-border px-1 md:px-0 py-24 md:py-32">
      <div className="px-5 md:px-16 mb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] text-gold tracking-[0.3em] mb-4 block uppercase">SELECTED WORK</span>
        <h2 className="font-sans font-black text-[48px] md:text-[84px] text-off-white leading-[0.95] tracking-tighter">
          <span className="block">Eight projects.</span>
          <span className="block text-light-gray">Zero compromise.</span>
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-[4px] px-1 md:px-[4px]">
        {images.map((img) => (
          <div key={img.id} className={`grid-item ${img.span} relative group overflow-hidden aspect-square md:aspect-auto ${img.id>3 ? 'md:h-[60vh]' : 'md:h-[50vh]'} custom-cursor-target`}>
            {/* Parallax Image Wrapper */}
            <div className="w-full h-[120%] -top-[10%] relative">
              <img src={`/images/grid-${img.id}.jpg`} alt={img.cat} className="w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.05] brightness-75 group-hover:brightness-100" loading="lazy" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="w-8 h-[1px] bg-gold"></div>
              <div className="font-mono text-[11px] text-gold tracking-widest uppercase">{img.cat}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <a href="#contact" className="inline-flex items-center gap-3 font-mono text-[11px] text-gold hover:text-off-white tracking-[0.2em] transition-colors border-b border-gold/30 pb-2 hover:border-off-white pb-3 custom-cursor-target">
          REQUEST FULL PORTFOLIO <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
};

const ServicePackages = () => {
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".pkg-card", {
        scrollTrigger: { trigger: comp.current, start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power2.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  const packages = [
    { 
      title: 'STARTER KIT', 
      price: '$1,500', 
      badge: null, 
      highlight: false, 
      description: 'Ideal para novas empresas construindo sua identidade visual básica.', 
      list: ['Retratos de Liderança (Até 3)', 'Fotos de Ambiente (Escritório)', 'Sessão de Meio Período', 'Licença de Uso Padrão'] 
    },
    { 
      title: 'CORPORATE PRO', 
      price: '$3,800', 
      badge: 'MAIS POPULAR', 
      highlight: true, 
      description: 'Cobertura completa para empresas estabelecidas atualizando sua marca.', 
      list: ['Retratos de Equipe (Até 20)', 'Fotos de Arquitetura & Lifestyle', 'Sessão de Dia Inteiro', 'Edição Prioritária', 'Licença Comercial Completa'] 
    },
    { 
      title: 'ENTERPRISE RETAINER', 
      price: 'SOB CONSULTA', 
      badge: null, 
      highlight: false, 
      description: 'Parceria contínua para grandes volumes de conteúdo visual corporativo.', 
      list: ['Sessões Mensais ou Trimestrais', 'Direção de Arte Dedicada', 'Cobertura de Eventos Inclusa', 'Entrega Expressa', 'Direitos Totais de Uso'] 
    }
  ];

  return (
    <section ref={comp} className="bg-[#050505] py-20 md:py-32 border-b border-glass-border">
      <div className="px-6 md:px-16 mb-20 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="font-mono text-[10px] text-gold tracking-[0.3em] mb-4 block uppercase">PACOTES</span>
          <h2 className="font-sans font-black text-[40px] md:text-[64px] text-off-white leading-[0.95] tracking-tighter">
            <span className="block">Soluções Completas.</span>
          </h2>
        </div>
        <p className="font-sans font-light text-[15px] md:text-[18px] text-light-gray max-w-[400px] leading-relaxed">
          Pacotes desenhados estrategicamente para atender aos diferentes estágios da sua empresa, unindo nossos serviços essenciais numa oferta de alta performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6 md:px-16 max-w-7xl mx-auto">
        {packages.map((pkg, i) => (
          <div key={i} className={`pkg-card bg-near-black rounded-[2px] p-8 md:p-10 flex flex-col relative group transition-all duration-500 overflow-hidden ${pkg.highlight ? 'border border-gold shadow-[0_0_30px_rgba(212,175,55,0.05)]' : 'border border-glass-border hover:border-gold/50'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {pkg.badge && <div className="absolute top-0 right-0 m-6 bg-gold text-near-black font-sans font-bold text-[9px] tracking-[0.2em] px-3 py-1.5 rounded-[2px] uppercase">{pkg.badge}</div>}
            
            <h3 className="font-mono text-[11px] text-gold tracking-[0.2em] mb-4 uppercase mt-2">{pkg.title}</h3>
            <div className="font-sans font-black text-[36px] text-off-white mb-4 tracking-tighter">{pkg.price}</div>
            <p className="font-sans font-light text-[14px] leading-relaxed text-warm-gray mb-8">{pkg.description}</p>
            <hr className="border-t border-glass-border mb-8" />
            <ul className="mb-10 flex-grow relative z-10 flex flex-col gap-4">
              {pkg.list.map((item, idx) => (
                <li key={idx} className="font-sans font-light text-[14px] text-light-gray flex items-start">
                  <span className="text-gold mr-3 mt-1 opacity-70 text-[10px]">✓</span> {item}
                </li>
              ))}
            </ul>
            <a href="#quote" className={`relative z-10 text-center font-sans font-semibold text-[11px] tracking-[0.15em] py-5 rounded-[2px] transition-all duration-300 ${pkg.highlight ? 'bg-gold text-near-black hover:bg-off-white' : 'border border-glass-border text-off-white hover:border-gold hover:text-gold bg-near-black/50'}`}>
              SELECIONAR
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: { trigger: comp.current, start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power2.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  const services = [
    { title: 'EXECUTIVE PORTRAITS', icon: User, price: '$750', badge: null, highlight: false, description: 'Headshots premiums e retratos de liderança esculturais planejados para construir autoridade imediata. Ideais para alta gerência, founders e uso em conselhos.', list: ['Half-Day Studio Session', 'Individual & Group Headshots', '40 Retouched Images', 'LinkedIn-Ready Exports', 'Commercial License Included'] },
    { title: 'PRODUCT & BRAND', icon: Package, price: '$1,100', badge: null, highlight: false, description: 'Eleve o valor percebido dos seus produtos. Produzimos imagens e campanhas visuais que combinam iluminação sofisticada com a essência da sua marca.', list: ['Full Studio Day', 'Up to 20 Product SKUs', '80 Retouched Images', 'E-Commerce & Print Ready', 'Full Commercial Rights'] },
    { title: 'ARCHITECTURE & REAL ESTATE', icon: Building2, price: '$1,800', badge: 'HIGH DEMAND', highlight: true, description: 'Capturas grandiosas que valorizam o volume e o design estrutural do seu imóvel ou sede corporativa. Focadas no mercado de luxo e investimentos.', list: ['Exterior + Interior Coverage', 'Twilight & Daylight Shots', '60 Retouched Images', 'Virtual Tour Ready Exports', 'MLS & Print License'] },
    { title: 'EVENTS & CONFERENCES', icon: CalendarDays, price: '$2,400', badge: null, highlight: false, description: 'Cobertura impecável dos seus maiores eventos de networking. Capturamos momentos não posados com qualidade de estúdio, garantindo material para marketing anual.', list: ['Full Day Event Coverage', 'Two-Photographer Team', '200+ Retouched Images', 'Same-Week Delivery', 'Full Commercial License'] }
  ];

  return (
    <section id="services" ref={comp} className="bg-near-black border-t border-glass-border py-20 md:py-32">
      <div className="px-6 md:px-16 mb-20 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] text-gold tracking-[0.3em] mb-4 block uppercase">WHAT WE DO</span>
        <h2 className="font-sans font-black text-[48px] md:text-[84px] text-off-white leading-[0.95] tracking-tighter">
          <span className="block">Four services.</span>
          <span className="block text-light-gray">One standard.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-6 md:px-16 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className={`service-card bg-glass-dark backdrop-blur-md rounded-[2px] p-8 md:p-12 flex flex-col relative group transition-all duration-500 overflow-hidden ${s.highlight ? 'border border-gold shadow-[0_0_30px_rgba(212,175,55,0.05)]' : 'border border-glass-border hover:border-gold/50'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {s.badge && <div className="absolute top-0 right-0 m-6 bg-gold/10 border border-gold/20 px-3 py-1.5 font-mono text-[9px] text-gold tracking-[0.2em] rounded-[2px]">{s.badge}</div>}
            
            <s.icon size={32} className={`mb-8 ${s.highlight ? 'text-gold' : 'text-warm-gray group-hover:text-off-white'} transition-colors duration-500`} strokeWidth={1} />
            <h3 className="font-mono text-[10px] text-gold tracking-[0.2em] mb-3">{s.title}</h3>
            <div className="font-sans font-bold text-[36px] text-off-white mb-4">From {s.price}</div>
            <p className="font-sans font-light text-[14px] leading-relaxed text-warm-gray mb-8 group-hover:text-light-gray transition-colors">{s.description}</p>
            <hr className="border-t border-glass-border mb-8" />
            <ul className="mb-10 flex-grow relative z-10">
              {s.list.map((item, idx) => (
                <li key={idx} className="font-sans font-light text-[14px] text-light-gray mb-4 flex items-start">
                  <span className="text-gold mr-4 mt-1 opacity-70 text-[10px]">♦</span> {item}
                </li>
              ))}
            </ul>
            <a href="#quote" className={`relative z-10 text-center font-sans font-semibold text-[11px] tracking-[0.15em] py-5 rounded-[2px] transition-all duration-300 ${s.highlight ? 'bg-gold text-near-black hover:bg-off-white' : 'border border-glass-border text-off-white hover:border-gold hover:text-gold bg-near-black/50'}`}>
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
        y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out"
      });
      gsap.from(".proc-line", {
        scrollTrigger: { trigger: comp.current, start: "top 75%" },
        scaleX: 0, transformOrigin: "left center", duration: 1.5, ease: "power3.inOut"
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
    <section ref={comp} className="bg-[#050505] border-t border-glass-border py-24 md:py-40 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-[10px] text-gold tracking-[0.3em] mb-4 block uppercase">HOW IT WORKS</span>
        <h2 className="font-sans font-black text-[48px] md:text-[84px] text-off-white leading-[1] tracking-tighter mb-24 md:mb-40">
          Simple. Precise. Fast.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 relative">
          <div className="proc-line hidden md:block absolute top-[18px] left-0 w-full h-[1px] bg-glass-border"></div>
          {steps.map((s, i) => (
            <div key={i} className="proc-step md:pt-10 md:pr-4 relative custom-cursor-target">
              <div className="font-mono text-[12px] text-gold mb-6 md:-mt-[58px] bg-[#050505] inline-flex items-center gap-3 pr-4">
                 <span className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-[10px]">{s.n}</span>
                 {s.t}
              </div>
              <p className="font-sans font-light text-[15px] text-light-gray leading-relaxed md:max-w-[240px]">{s.d}</p>
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
      gsap.from(".about-img-box", {
        scrollTrigger: { trigger: comp.current, start: "top 75%" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
      });
      gsap.from(".about-text", {
        scrollTrigger: { trigger: comp.current, start: "top 75%" },
        x: 40, opacity: 0, duration: 1, ease: "power3.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={comp} className="bg-near-black border-t border-glass-border grid grid-cols-1 lg:grid-cols-[45%_55%]">
      <div className="about-img-box relative h-[60vh] lg:h-auto border-r border-glass-border overflow-hidden group">
        <img src="/images/diane.jpg" alt="Diane Mercer - Photographer" className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-105 brightness-90 grayscale-[20%]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8 bg-glass-dark backdrop-blur-md border border-glass-border p-6 shadow-2xl">
          <div className="font-sans font-semibold text-[16px] text-off-white mb-1">Diane Mercer</div>
          <div className="font-mono text-[10px] text-gold tracking-widest uppercase mb-3">Chicago, IL</div>
          <div className="flex items-center gap-4 border-t border-glass-border pt-3">
             <div className="font-sans font-light text-[12px] text-light-gray">15 Years Exp</div>
             <div className="w-1 h-1 rounded-full bg-mid-gray"></div>
             <div className="font-sans font-light text-[12px] text-light-gray">500+ Projects</div>
          </div>
        </div>
      </div>
      
      <div className="about-text p-8 md:p-16 lg:p-[100px_80px] flex flex-col justify-center bg-[#0a0a0a]">
        <span className="font-mono text-[10px] text-gold tracking-[0.3em] mb-8 block uppercase">DIANE MERCER · LEAD PHOTOGRAPHER</span>
        <h2 className="font-sans font-bold text-[32px] md:text-[46px] text-off-white leading-[1.15] tracking-tight mb-10">
          "Corporate photography is not about making things look good. It's about making them work."
        </h2>
        
        <div className="w-[60px] h-[2px] bg-gold mb-10"></div>
        
        <p className="font-sans font-light text-[16px] md:text-[18px] text-light-gray leading-[1.9] mb-12">
          With 15 years shooting for Fortune 500 companies, startups, law firms and global brands, I understand what corporate imagery needs to do — communicate authority, build trust and convert. I don't just show up with a camera. I come with a creative brief, a production schedule and a delivery guarantee. My clients don't just get great photos. They get a seamless professional experience from first call to final file.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mb-12 border border-glass-border p-4 w-fit bg-near-black">
          <span className="font-mono text-[10px] text-off-white tracking-widest uppercase">APA Member</span>
          <span className="text-gold text-[10px]">♦</span>
          <span className="font-mono text-[10px] text-off-white tracking-widest uppercase">ASMP Certified</span>
        </div>
        
        <a href="#" className="font-mono text-[11px] text-gold hover:text-off-white tracking-[0.2em] uppercase transition-colors self-start border-b border-gold/30 hover:border-off-white pb-2 flex items-center gap-2 custom-cursor-target">
          DOWNLOAD CAPABILITIES DECK <ArrowRight size={14}/>
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
    }, 6000);
    return () => clearInterval(int);
  }, []);

  return (
    <section className="bg-[url('/images/hero.jpg')] bg-cover bg-center bg-fixed relative py-24 md:py-40 px-6 md:px-16">
      <div className="absolute inset-0 bg-near-black/90 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <span className="font-mono text-[10px] text-gold tracking-[0.3em] mb-4 block uppercase">CLIENT RESULTS</span>
        <h2 className="font-sans font-black text-[48px] md:text-[84px] text-off-white leading-[0.95] tracking-tighter mb-20 text-center">
          The numbers speak first.
        </h2>
        
        <div className="relative group max-w-4xl mx-auto transition-all duration-700" key={active}>
          <span className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 font-sans font-black text-[140px] text-glass-border leading-none">"</span>
          <div className="min-h-[200px] flex items-center justify-center relative z-10 animate-fade-in">
            <p className="font-sans font-light text-[18px] md:text-[24px] text-off-white leading-[1.8] italic text-center">
              {reviews[active].q}
            </p>
          </div>
          <div className="mt-12 relative z-10 animate-fade-in-up">
            <div className="font-sans font-semibold text-[15px] text-gold mb-2">{reviews[active].n}</div>
            <div className="font-mono text-[10px] text-warm-gray tracking-widest uppercase">{reviews[active].t}</div>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mt-16">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`w-12 h-1 rounded-none transition-all duration-300 custom-cursor-target ${i===active ? 'bg-gold' : 'bg-mid-gray'}`} aria-label={`Review ${i+1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  return (
    <section id="quote" className="bg-[#050505] border-t border-b border-glass-border grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 md:p-16 lg:p-[120px_96px] border-r border-glass-border flex flex-col justify-center">
        <span className="font-mono text-[10px] text-gold tracking-[0.3em] mb-8 block uppercase">REQUEST A QUOTE</span>
        <h2 className="font-sans font-bold text-[40px] md:text-[56px] text-off-white leading-[1.1] tracking-tight mb-10">
          Let's talk about your project.
        </h2>
        
        <div className="w-[60px] h-[2px] bg-gold mb-10"></div>
        
        <p className="font-sans font-light text-[16px] text-light-gray leading-[1.9] mb-12">
          Whether you need executive headshots for 200 employees, product photography for a product launch, or full event coverage — we can scope, quote and schedule within 24 hours. No creative agencies. No middlemen. Direct access to Diane.
        </p>
        
        <div className="flex flex-col gap-5 font-sans font-light text-[14px] text-warm-gray mb-16">
          <a href="mailto:hello@framecollective.com" className="hover:text-gold transition-colors flex items-center gap-4 custom-cursor-target"><span className="w-8 h-[1px] bg-mid-gray"></span>hello@framecollective.com</a>
          <a href="tel:3127409900" className="hover:text-gold transition-colors flex items-center gap-4 custom-cursor-target"><span className="w-8 h-[1px] bg-mid-gray"></span>(312) 740-9900</a>
          <a href="#" className="hover:text-gold transition-colors flex items-center gap-4 custom-cursor-target"><span className="w-8 h-[1px] bg-mid-gray"></span>@framecollective</a>
        </div>
        
        <div className="font-mono text-[10px] text-warm-gray p-5 border border-glass-border bg-glass-dark inline-flex max-w-fit uppercase tracking-widest">
           Response guaranteed within 24 business hours.
        </div>
      </div>
      
      <div className="p-8 md:p-16 lg:p-[120px_96px] bg-near-black">
        <form className="flex flex-col gap-10" onSubmit={e=>e.preventDefault()}>
          <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-mid-gray pb-4 font-sans font-light text-[15px] text-off-white focus:outline-none focus:border-gold transition-colors placeholder:text-mid-gray custom-cursor-target" />
          <input type="text" placeholder="Company / Organization" className="w-full bg-transparent border-b border-mid-gray pb-4 font-sans font-light text-[15px] text-off-white focus:outline-none focus:border-gold transition-colors placeholder:text-mid-gray custom-cursor-target" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-mid-gray pb-4 font-sans font-light text-[15px] text-off-white focus:outline-none focus:border-gold transition-colors placeholder:text-mid-gray custom-cursor-target" />
             <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-mid-gray pb-4 font-sans font-light text-[15px] text-off-white focus:outline-none focus:border-gold transition-colors placeholder:text-mid-gray custom-cursor-target" />
          </div>
          
          <select className="w-full bg-near-black border-b border-mid-gray pb-4 font-sans font-light text-[15px] text-off-white focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer custom-cursor-target">
            <option value="" disabled selected className="text-mid-gray">Project Type</option>
            <option value="exec">Executive Portraits</option>
            <option value="product">Product & Brand</option>
            <option value="arch">Architecture & Real Estate</option>
            <option value="events">Events & Conferences</option>
            <option value="multi">Multiple Services</option>
            <option value="unsure">Not Sure</option>
          </select>
          
          <input type="text" placeholder="Number of Subjects / SKUs / Sq Ft" className="w-full bg-transparent border-b border-mid-gray pb-4 font-sans font-light text-[15px] text-off-white focus:outline-none focus:border-gold transition-colors placeholder:text-mid-gray custom-cursor-target" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <input type="text" placeholder="Preferred Date / Timeline" className="w-full bg-transparent border-b border-mid-gray pb-4 font-sans font-light text-[15px] text-off-white focus:outline-none focus:border-gold transition-colors placeholder:text-mid-gray custom-cursor-target" />
            <select className="w-full bg-near-black border-b border-mid-gray pb-4 font-sans font-light text-[15px] text-off-white focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer custom-cursor-target">
              <option value="" disabled selected>Approximate Budget</option>
              <option value="<1k">Under $1K</option>
              <option value="1-3k">$1K–$3K</option>
              <option value="3-7k">$3K–$7K</option>
              <option value=">7k">$7K+</option>
              <option value="quote">Need a Quote</option>
            </select>
          </div>
          
          <textarea rows="4" placeholder="Describe your project, deliverables and any specific requirements" className="w-full bg-transparent border-b border-mid-gray pb-4 font-sans font-light text-[15px] text-off-white focus:outline-none focus:border-gold transition-colors placeholder:text-mid-gray resize-none custom-cursor-target mt-4"></textarea>
          
          <button type="submit" className="w-full bg-gold hover:bg-off-white text-near-black font-sans font-bold text-[13px] tracking-[0.2em] h-[60px] rounded-[2px] transition-all duration-300 mt-8 custom-cursor-target">
            SUBMIT INQUIRY
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  const isBusinessHours = () => {
    const d = new Date();
    const day = d.getDay();
    const hr = d.getHours();
    return (day >= 1 && day <= 5) && (hr >= 9 && hr < 18);
  };

  return (
    <footer className="bg-[#050505] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="flex flex-col gap-6">
             <div className="flex items-baseline gap-2">
               <span className="font-sans font-black text-[24px] text-off-white uppercase tracking-tight">FRAME</span>
               <span className="font-mono text-[10px] text-off-white/40 tracking-[0.4em] uppercase">COLLECTIVE</span>
             </div>
             <p className="font-sans font-light text-[14px] text-light-gray/60 max-w-[240px]">Imagery that means business. Delivered with uncompromised standard.</p>
             <p className="font-mono text-[10px] text-gold mt-2 uppercase tracking-widest">APA · ASMP · Licensed & Insured</p>
          </div>
          
          <div className="flex flex-col gap-4">
             <div className="grid grid-cols-2 gap-y-6 gap-x-8">
               {['Work', 'Services', 'About', 'Contact'].map(link => (
                 <a key={link} href={`#${link.toLowerCase()}`} className="font-sans font-light text-[14px] text-warm-gray hover:text-gold transition-colors custom-cursor-target">{link}</a>
               ))}
               <a href="#privacy" className="font-sans font-light text-[14px] text-warm-gray hover:text-gold transition-colors custom-cursor-target">Privacy</a>
               <a href="#terms" className="font-sans font-light text-[14px] text-warm-gray hover:text-gold transition-colors custom-cursor-target">Terms</a>
             </div>
          </div>
          
          <div className="flex flex-col gap-5">
             <a href="mailto:hello@framecollective.com" className="font-sans font-light text-[14px] text-warm-gray hover:text-gold transition-colors custom-cursor-target border-b border-transparent hover:border-gold w-fit pb-1">hello@framecollective.com</a>
             <a href="tel:3127409900" className="font-sans font-light text-[14px] text-warm-gray hover:text-gold transition-colors custom-cursor-target border-b border-transparent hover:border-gold w-fit pb-1">(312) 740-9900</a>
             <div className="font-mono text-[10px] text-warm-gray/70 mt-4 flex items-center gap-3 tracking-widest uppercase">
               <span className={`w-[6px] h-[6px] rounded-full inline-block ${isBusinessHours() ? 'bg-gold animate-pulse' : 'bg-mid-gray'}`}></span>
               <span>Mon–Fri, 9AM–6PM CT</span>
             </div>
          </div>
        </div>
        
        <div className="border-t border-glass-border pt-10 flex flex-col items-start gap-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-mono text-[10px] text-warm-gray/50 text-center md:text-left tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Frame Collective · Chicago, IL
            </div>
            <div className="font-mono text-[10px] text-gold/70 tracking-[0.2em] flex items-center gap-3 uppercase">
              <span className={`w-[6px] h-[6px] rounded-full inline-block ${isBusinessHours() ? 'bg-gold animate-pulse' : 'bg-mid-gray'}`}></span>
              ACCEPTING NEW CLIENTS
            </div>
          </div>
          <div className="font-mono text-[9px] text-warm-gray/30 italic text-center md:text-left w-full">
            This is a demo page created by Antigravity for portfolio purposes.
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
      <div className="fixed top-0 left-0 h-[2px] bg-gold z-[100] w-0" id="progress"></div>
      <a href="#quote" className="md:hidden fixed bottom-0 left-0 w-full bg-gold text-near-black text-center h-[56px] leading-[56px] font-sans font-bold text-[13px] tracking-[0.2em] z-50 uppercase">
        GET A QUOTE
      </a>
    </>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="font-sans antialiased text-off-white bg-near-black cursor-none">
      <CustomCursor />
      <FixedComponents />
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <ClientLogos />
      <StatsBar />
      <PortfolioGrid />
      <Services />
      <ServicePackages />
      <Process />
      <AboutDiane />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  );
}
