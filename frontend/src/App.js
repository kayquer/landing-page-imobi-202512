import React, { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Menu, X, 
  Users, TrendingUp, Home, Brain, MessageSquare, FileText,
  Check, Star, Phone, Mail, MapPin,
  ChevronDown, ChevronUp
} from 'lucide-react';

// Import mock data
import { 
  heroData, 
  plansData, 
  featuresData, 
  portalsData, 
  testimonialsData, 
  faqData, 
  companyData 
} from './data/mock';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Icon mapping for features
const iconMap = {
  Users: Users,
  TrendingUp: TrendingUp,
  Home: Home,
  Brain: Brain,
  MessageSquare: MessageSquare,
  FileText: FileText
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="nav-header">
      <a href="#home" className="nav-logo">
        <img 
          src="https://customer-assets.emergentagent.com/job_156e9131-4dda-439d-8ddd-0737f124f04e/artifacts/1ttmxmid_imobibrasil.png" 
          alt="ImobiBrasil" 
          style={{ height: '32px' }}
        />
        ImobiBrasil
      </a>
      
      <nav className="nav-menu">
        <a href="#recursos" className="nav-link">Recursos</a>
        <a href="#planos" className="nav-link">Planos</a>
        <a href="#clientes" className="nav-link">Clientes</a>
        <a href="#faq" className="nav-link">FAQ</a>
      </nav>

      <div className="nav-cta">
        <a href="#demo" className="btn-secondary">Ver Demo</a>
        <a href="#teste" className="btn-primary">Teste Grátis</a>
      </div>

      <button 
        className="mobile-menu-btn"
        style={{ display: 'block' }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetricIndex(prev => (prev + 1) % heroData.metrics.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-content animate-slide-up">
        <h1 className="heading-1">{heroData.title}</h1>
        <p className="body-large" style={{ marginBottom: '2rem' }}>
          {heroData.subtitle}
        </p>
        <p className="body-medium" style={{ marginBottom: '2rem', opacity: 0.8 }}>
          {heroData.description}
        </p>
        
        <div className="hero-metrics">
          {heroData.metrics.map((metric, index) => (
            <div key={index} className="metric-item">
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#teste" className="btn-primary" style={{ minWidth: '200px' }}>
            {heroData.ctaText}
          </a>
          <a href="#recursos" className="btn-secondary" style={{ minWidth: '200px' }}>
            Conheça os Recursos
          </a>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  return (
    <section className="section" id="recursos">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Recursos Principais</p>
          <h2 className="heading-2">Sistema Completo para sua Imobiliária</h2>
          <p className="body-large">
            Todas as ferramentas que você precisa para gerenciar sua imobiliária com eficiência e profissionalismo.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <IconComponent size={24} />
                </div>
                <h3 className="heading-3">{feature.title}</h3>
                <p className="body-medium">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Portals Section Component
const PortalsSection = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Integração Completa</p>
          <h2 className="heading-2">Conecte-se aos Principais Portais</h2>
          <p className="body-large">
            Gerencie facilmente a publicação dos seus imóveis e destaques em todos os grandes portais do Brasil.
          </p>
        </div>

        <div className="portals-grid">
          {portalsData.map((portal, index) => (
            <div key={index} className="portal-logo">
              <img src={portal.logo} alt={portal.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section Component
const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="section" id="planos">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Planos e Preços</p>
          <h2 className="heading-2">Escolha o Plano Ideal para seu Negócio</h2>
          <p className="body-large">
            Sem taxas de inscrição, sem tempo mínimo de permanência e sem multa por cancelamento.
          </p>
        </div>

        <div className="pricing-grid">
          {plansData.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
            >
              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-description">{plan.description}</p>
                <div className="pricing-price">
                  <span className="price-currency">R$</span>
                  <span className="price-value">{plan.price}</span>
                  <span className="price-period">/mês</span>
                </div>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <a href="#teste" className={plan.recommended ? "btn-primary" : "btn-secondary"} style={{ width: '100%' }}>
                Teste Grátis
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  return (
    <section className="section section-alt" id="clientes">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Nossos Clientes</p>
          <h2 className="heading-2">Imobiliárias que Confiam na ImobiBrasil</h2>
          <p className="body-large">
            Veja o que nossos clientes falam sobre os resultados obtidos com nosso sistema.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-content">"{testimonial.feedback}"</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.website}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Dúvidas Frequentes</p>
          <h2 className="heading-2">Perguntas e Respostas</h2>
          <p className="body-large">
            Tire suas dúvidas sobre nosso sistema e serviços.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="section section-alt" id="teste">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
          Transforme sua Imobiliária com ImobiBrasil
        </h2>
        <p className="body-large" style={{ marginBottom: '2rem' }}>
          Comece hoje mesmo e descubra por que mais de 15.000 imobiliárias confiam em nosso sistema.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#cadastro" className="btn-primary" style={{ minWidth: '200px' }}>
            Teste Grátis por 7 Dias
          </a>
          <a href={`https://wa.me/${companyData.whatsapp.commercial}`} className="btn-secondary" style={{ minWidth: '200px' }}>
            Falar com Consultor
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>ImobiBrasil</h4>
          <p>{companyData.tagline}</p>
          <p>{companyData.address}</p>
          <p>CNPJ: {companyData.cnpj}</p>
        </div>

        <div className="footer-section">
          <h4>Atendimento</h4>
          <p>Segunda a Sexta: 08:00 às 18:00h</p>
          {companyData.phones.slice(0, 4).map((phone, index) => (
            <a key={index} href={`tel:${phone.number.replace(/[^\d]/g, '')}`}>
              {phone.number} - {phone.region}
            </a>
          ))}
        </div>

        <div className="footer-section">
          <h4>WhatsApp</h4>
          <a href={`https://wa.me/${companyData.whatsapp.commercial}`}>
            Comercial - Vendas
          </a>
          <a href={`https://wa.me/${companyData.whatsapp.support}`}>
            Suporte Técnico
          </a>
        </div>

        <div className="footer-section">
          <h4>Acompanhe</h4>
          <a href={companyData.social.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href={companyData.social.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={companyData.social.youtube} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ImobiBrasil. Todos os direitos reservados.</p>
        <p>Eleito o melhor sistema de gestão pelo Conecta Imobi</p>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PortalsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

// App Component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;