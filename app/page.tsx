'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Icons as components
const PhoneIcon = () => (
  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 15l-6-6-6 6"/>
  </svg>
);

// Hero slides data
const heroSlides = [
  {
    id: 0,
    tag: "Living Spaces",
    title: "Shaping Dreams Into Living Spaces",
    description: "Transform your home with our premium collection of designer tiles that blend aesthetics with durability.",
    ctaText: "Explore Range",
    ctaLink: "/products?application=living-room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop",
    imageMobile: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=1200&fit=crop",
  },
  {
    id: 1,
    tag: "Kitchen Design",
    title: "Where Tile Meets Culinary Craft",
    description: "Discover tiles that withstand the heat of your creativity while adding elegance to your culinary haven.",
    ctaText: "Explore Range",
    ctaLink: "/products?application=kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop",
    imageMobile: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1200&fit=crop",
  },
  {
    id: 2,
    tag: "Bathroom Elegance",
    title: "Timeless Tiles for Tranquil Spaces",
    description: "Create your personal sanctuary with tiles that embody elegance and serenity in every detail.",
    ctaText: "Explore Range",
    ctaLink: "/products?application=bathroom",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=1080&fit=crop",
    imageMobile: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=1200&fit=crop",
  },
  {
    id: 3,
    tag: "Outdoor Living",
    title: "Beauty That Lasts Beyond Seasons",
    description: "Weather-resistant tiles that bring enduring beauty to your outdoor spaces, year after year.",
    ctaText: "Explore Range",
    ctaLink: "/products?application=outdoor",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
    imageMobile: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1200&fit=crop",
  },
];

// Categories data
const categories = [
  { name: "Bathroom", count: "250+ Designs", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop", link: "/products?application=bathroom" },
  { name: "Kitchen", count: "180+ Designs", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop", link: "/products?application=kitchen" },
  { name: "Living Room", count: "320+ Designs", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop", link: "/products?application=living-room" },
  { name: "Bedroom", count: "150+ Designs", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop", link: "/products?application=bedroom" },
  { name: "Outdoor", count: "120+ Designs", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", link: "/products?application=outdoor" },
  { name: "Commercial", count: "200+ Designs", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", link: "/products?application=commercial" },
];

// Collections data
const collections = [
  { name: "Premium Collection", desc: "Luxury tiles for discerning tastes", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop", link: "/collections#premium" },
  { name: "Classic Collection", desc: "Timeless elegance that never fades", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop", link: "/collections#classic" },
  { name: "Modern Collection", desc: "Contemporary designs for urban homes", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop", link: "/collections#modern" },
  { name: "Rustic Collection", desc: "Natural beauty with artisan charm", image: "https://images.unsplash.com/photo-1600573472591-ee6981cf81f0?w=400&h=300&fit=crop", link: "/collections#rustic" },
  { name: "Minimalist Collection", desc: "Clean lines, pure sophistication", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=300&fit=crop", link: "/collections#minimalist" },
  { name: "Marble Look", desc: "Luxurious marble aesthetics", image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=300&fit=crop", link: "/collections#marble" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setProgress(0);
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + (100 / 60), 100));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [currentSlide]);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Skip to Content */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Header */}
      <header className={`header header--v2 ${isScrolled ? 'scrolled' : ''}`}>
        {/* Top Bar */}
        <div className="top-bar">
          <div className="container">
            <div className="top-bar__inner">
              <div className="top-bar__contact">
                <a href="tel:+911234567890" className="top-bar__link">
                  <PhoneIcon />
                  +91 123 456 7890
                </a>
                <a href="mailto:info@primetiles.com" className="top-bar__link">
                  <MailIcon />
                  info@primetiles.com
                </a>
              </div>
              <div className="top-bar__actions">
                <Link href="/dealers" className="top-bar__link">Find a Dealer</Link>
                <Link href="/downloads" className="top-bar__link">Downloads</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="nav-main">
          <div className="container">
            <div className="nav-main__inner">
              {/* Logo */}
              <Link href="/" className="logo">
                <span className="logo__text logo__text--dark">PRIME<span>TILES</span></span>
                <span className="logo__text logo__text--light">PRIME<span>TILES</span></span>
              </Link>

              {/* Desktop Navigation */}
              <ul className="nav-menu">
                <li className="nav-menu__item has-dropdown">
                  <Link href="/about" className="nav-menu__link">About Us</Link>
                  <div className="dropdown dropdown--simple">
                    <ul className="dropdown__list">
                      <li><Link href="/about#story">Our Story</Link></li>
                      <li><Link href="/about#vision">Vision & Mission</Link></li>
                      <li><Link href="/about#manufacturing">Manufacturing</Link></li>
                      <li><Link href="/about#quality">Quality Assurance</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-menu__item has-mega-menu">
                  <Link href="/products" className="nav-menu__link">Products</Link>
                  <div className="mega-menu">
                    <div className="mega-menu__inner">
                      <div className="mega-menu__column">
                        <h4 className="mega-menu__title">By Application</h4>
                        <ul className="mega-menu__list">
                          <li><Link href="/products?application=bathroom">Bathroom Tiles</Link></li>
                          <li><Link href="/products?application=kitchen">Kitchen Tiles</Link></li>
                          <li><Link href="/products?application=living-room">Living Room Tiles</Link></li>
                          <li><Link href="/products?application=outdoor">Outdoor Tiles</Link></li>
                        </ul>
                      </div>
                      <div className="mega-menu__column">
                        <h4 className="mega-menu__title">By Category</h4>
                        <ul className="mega-menu__list">
                          <li><Link href="/products?category=vitrified">Vitrified Tiles</Link></li>
                          <li><Link href="/products?category=ceramic">Ceramic Tiles</Link></li>
                          <li><Link href="/products?category=porcelain">Porcelain Tiles</Link></li>
                          <li><Link href="/products?category=marble-look">Marble Look Tiles</Link></li>
                        </ul>
                      </div>
                      <div className="mega-menu__column">
                        <h4 className="mega-menu__title">Collections</h4>
                        <ul className="mega-menu__list">
                          <li><Link href="/collections#premium">Premium Collection</Link></li>
                          <li><Link href="/collections#classic">Classic Collection</Link></li>
                          <li><Link href="/collections#modern">Modern Collection</Link></li>
                          <li><Link href="/collections#rustic">Rustic Collection</Link></li>
                        </ul>
                      </div>
                      <div className="mega-menu__featured">
                        <div className="mega-menu__featured-img">
                          <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop" alt="New Collection" width={300} height={140} style={{ objectFit: 'cover' }} />
                        </div>
                        <h4>New Arrivals</h4>
                        <p>Explore our latest tile designs</p>
                        <Link href="/products?sort=newest" className="btn btn--sm btn--primary">View Collection</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-menu__item">
                  <Link href="/collections" className="nav-menu__link">Collections</Link>
                </li>
                <li className="nav-menu__item">
                  <Link href="/downloads" className="nav-menu__link">Catalogue</Link>
                </li>
                <li className="nav-menu__item">
                  <Link href="/contact" className="nav-menu__link">Contact</Link>
                </li>
              </ul>

              {/* Header Actions */}
              <div className="nav-actions">
                <button className="nav-actions__btn" aria-label="Search">
                  <SearchIcon />
                </button>
                <Link href="/dealers" className="btn btn--primary btn--sm nav-actions__cta">Find Dealer</Link>
                <button className="nav-toggle" aria-label="Toggle menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Slider */}
        <section className="hero-v2">
          <div className="hero-slider">
            {heroSlides.map((slide, index) => (
              <div key={slide.id} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
                <div className="hero-slide__bg">
                  <Image
                    src={slide.image}
                    alt={slide.tag}
                    fill
                    priority={index === 0}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="hero-slide__content">
                  <div className="container">
                    <span className="hero-slide__tag">{slide.tag}</span>
                    <h1 className="hero-slide__title">{slide.title.split(' ').slice(0, 3).join(' ')}<br/>{slide.title.split(' ').slice(3).join(' ')}</h1>
                    <p className="hero-slide__desc">{slide.description}</p>
                    <Link href={slide.ctaLink} className="btn btn--primary btn--lg">{slide.ctaText}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="hero-slider__controls">
            <button className="hero-slider__arrow hero-slider__arrow--prev" onClick={prevSlide} aria-label="Previous slide">
              <ChevronLeftIcon />
            </button>
            <div className="hero-slider__dots">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`hero-slider__dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button className="hero-slider__arrow hero-slider__arrow--next" onClick={nextSlide} aria-label="Next slide">
              <ChevronRightIcon />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="hero-slider__progress">
            <div className="hero-slider__progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </section>

        {/* Categories Section */}
        <section className="section section--categories-grid">
          <div className="container">
            <header className="section__header section__header--center">
              <div>
                <span className="section__tag">Explore</span>
                <h2 className="section__title">Find Tiles by Category</h2>
                <p className="section__subtitle">Discover the perfect tiles for every space in your home</p>
              </div>
            </header>

            <div className="category-grid">
              {categories.map((category) => (
                <Link key={category.name} href={category.link} className="category-card">
                  <div className="category-card__img">
                    <Image src={category.image} alt={category.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="category-card__content">
                    <h3 className="category-card__title">{category.name}</h3>
                    <span className="category-card__count">{category.count}</span>
                  </div>
                  <span className="category-card__arrow">
                    <ArrowRightIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section className="section section--collections bg-light">
          <div className="container">
            <header className="section__header">
              <div>
                <span className="section__tag">Curated</span>
                <h2 className="section__title">Our Collections</h2>
                <p className="section__subtitle">Handpicked designs curated for modern living</p>
              </div>
              <Link href="/collections" className="btn btn--outline">View All Collections</Link>
            </header>

            <div className="collections-slider">
              <div className="collections-slider__track">
                {collections.map((collection) => (
                  <article key={collection.name} className="collection-card">
                    <Link href={collection.link} className="collection-card__link">
                      <div className="collection-card__img">
                        <Image src={collection.image} alt={collection.name} width={400} height={300} style={{ objectFit: 'cover' }} />
                      </div>
                      <div className="collection-card__content">
                        <h3 className="collection-card__title">{collection.name}</h3>
                        <p className="collection-card__desc">{collection.desc}</p>
                        <span className="collection-card__cta">
                          Explore <ChevronRightIcon />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dealer Section */}
        <section className="section section--dealer">
          <div className="dealer-section">
            <div className="dealer-section__bg">
              <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&h=800&fit=crop" alt="" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="container">
              <div className="dealer-section__inner">
                <div className="dealer-section__content">
                  <span className="section__tag section__tag--light">Nationwide Network</span>
                  <h2 className="dealer-section__title">Find a Dealer Near You</h2>
                  <p className="dealer-section__desc">Experience our premium tiles at one of our many dealer locations across the country.</p>
                  <Link href="/dealers" className="btn btn--primary btn--lg">Find Now</Link>
                </div>
                <div className="dealer-section__stats">
                  <div className="dealer-stat">
                    <span className="dealer-stat__number">500</span>
                    <span className="dealer-stat__label">Operating Dealers</span>
                  </div>
                  <div className="dealer-stat">
                    <span className="dealer-stat__number">50</span>
                    <span className="dealer-stat__label">Exclusive Showrooms</span>
                  </div>
                  <div className="dealer-stat">
                    <span className="dealer-stat__number">25</span>
                    <span className="dealer-stat__label">Experience Centres</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Authority / About Section */}
        <section className="section section--authority">
          <div className="container">
            <div className="authority-grid">
              <div className="authority-content">
                <span className="section__tag">About Us</span>
                <h2 className="authority-title">Your Trusted Partner in Premium Tiles</h2>
                <p className="authority-desc">With decades of experience in the ceramic industry, Prime Tiles has established itself as a leading manufacturer of premium quality tiles. Our commitment to innovation, quality, and customer satisfaction drives everything we do.</p>
                <Link href="/about" className="btn btn--primary">Read More</Link>
              </div>
              <div className="authority-stats">
                <div className="authority-stat">
                  <span className="authority-stat__number">25</span>
                  <span className="authority-stat__suffix">MSM</span>
                  <span className="authority-stat__label">Production Capacity</span>
                </div>
                <div className="authority-stat">
                  <span className="authority-stat__number">2000</span>
                  <span className="authority-stat__suffix">+</span>
                  <span className="authority-stat__label">Tile Designs</span>
                </div>
                <div className="authority-stat">
                  <span className="authority-stat__number">3</span>
                  <span className="authority-stat__suffix"></span>
                  <span className="authority-stat__label">Manufacturing Units</span>
                </div>
                <div className="authority-stat">
                  <span className="authority-stat__number">15</span>
                  <span className="authority-stat__suffix">+</span>
                  <span className="authority-stat__label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Newsletter Section */}
        <section className="section section--cta">
          <div className="container">
            <div className="cta-box">
              <div className="cta-box__content">
                <h2 className="cta-box__title">Ready to Transform Your Space?</h2>
                <p className="cta-box__desc">Get in touch with our experts or visit a showroom near you to explore our complete range.</p>
                <div className="cta-box__actions">
                  <Link href="/contact" className="btn btn--primary btn--lg">Contact Us</Link>
                  <Link href="/dealers" className="btn btn--outline btn--lg btn--light">Find Showroom</Link>
                </div>
              </div>
              <div className="cta-box__newsletter">
                <h3>Subscribe to Our Newsletter</h3>
                <p>Stay updated with our latest collections and design tips.</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Enter your email" required />
                  <button type="submit" className="btn btn--primary">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer footer--v2">
        <div className="container">
          <div className="footer__main">
            {/* Brand Column */}
            <div className="footer__col footer__col--brand">
              <Link href="/" className="footer__logo">
                <span className="logo__text logo__text--light">PRIME<span>TILES</span></span>
              </Link>
              <p className="footer__tagline">Premium ceramic and vitrified tiles for every space.</p>
              <div className="footer__social">
                <a href="#" aria-label="Facebook" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="footer__social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Products Column */}
            <div className="footer__col">
              <h4 className="footer__title">Products</h4>
              <ul className="footer__list">
                <li><Link href="/products?application=bathroom">Bathroom Tiles</Link></li>
                <li><Link href="/products?application=kitchen">Kitchen Tiles</Link></li>
                <li><Link href="/products?application=living-room">Living Room Tiles</Link></li>
                <li><Link href="/products?application=bedroom">Bedroom Tiles</Link></li>
                <li><Link href="/products?application=outdoor">Outdoor Tiles</Link></li>
              </ul>
            </div>

            {/* Categories Column */}
            <div className="footer__col">
              <h4 className="footer__title">Categories</h4>
              <ul className="footer__list">
                <li><Link href="/products?category=vitrified">Vitrified Tiles</Link></li>
                <li><Link href="/products?category=ceramic">Ceramic Tiles</Link></li>
                <li><Link href="/products?category=porcelain">Porcelain Tiles</Link></li>
                <li><Link href="/products?category=marble-look">Marble Look</Link></li>
                <li><Link href="/products?category=wood-look">Wood Look</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="footer__col">
              <h4 className="footer__title">Company</h4>
              <ul className="footer__list">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/collections">Collections</Link></li>
                <li><Link href="/dealers">Find a Dealer</Link></li>
                <li><Link href="/downloads">Downloads</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="footer__col">
              <h4 className="footer__title">Quick Links</h4>
              <ul className="footer__list">
                <li><Link href="/downloads">Catalogue</Link></li>
                <li><Link href="/visualizer">Tile Visualizer</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer__bottom">
            <p className="footer__copyright">&copy; 2024 Prime Tiles. All rights reserved.</p>
            <ul className="footer__legal">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUpIcon />
      </button>
    </>
  );
}
