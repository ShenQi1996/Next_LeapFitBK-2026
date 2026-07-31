import React from 'react';
import Image from 'next/image';
import image2 from '../pages/images/images2.svg';
import image1 from '../pages/images/images1.svg';
import styles from "./style/index.module.scss";


const HomePage = () => {
  const bookingUrl = 'https://calendly.com/securefit-bk/15-mins?month=2026-08';
  const emailAddress = 'Securefit.bk@gmail.com';
  const businessPhone = '+1 646 748 3677';
  const businessPhoneHref = 'tel:+16467483677';


  return (
    <div className={styles.Homepage}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navBrand}>
            <div className={styles.navLogo}></div>
            <span className={styles.navTitle}>Secure Fit LLC BK</span>
          </div>
          <div className={styles.navActions}>
            <a 
              className={styles.navButton} 
              href={bookingUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              Schedule Appointment
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroWave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#00B499" fillOpacity="1" d="M0,256L120,224C240,192,480,128,720,96C960,64,1200,64,1320,64L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.brandSection}>
            <div className={styles.logo}></div>
            <h1 className={styles.brandTitle}>Secure Fit LLC BK</h1>
          </div>
          
          <div className={styles.tagline}>
            <h2>Precision in every <span>breath</span></h2>
            <p className={styles.subtitle}>Professional respiratory fit testing services in Brooklyn and NYC for optimal workplace safety</p>
          </div>

          <div className={styles.trustStrip}>
            <div className={styles.trustItem}>OSHA-Compliant Protocols</div>
            <div className={styles.trustItem}>Certified Technicians</div>
            <div className={styles.trustItem}>Clear $75 Pricing</div>
            <div className={styles.trustItem}>Brooklyn Service Area</div>
          </div>
          
          <div className={styles.heroImage}>
            <Image className={styles.heroImg} src={image2} alt='Medical mask illustration' priority />  
          </div>
          
          <div className={styles.heroReviews}>
            <div className={styles.heroReviewItem}>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>"Quick, professional service. The technician was thorough and explained everything clearly."</p>
              <p className={styles.reviewAuthor}>— Sarah M., Construction Manager</p>
            </div>
            <div className={styles.heroReviewItem}>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>"Very convenient location and fast turnaround. Highly recommend for workplace compliance."</p>
              <p className={styles.reviewAuthor}>— Michael R., Safety Coordinator</p>
            </div>
            <div className={styles.heroReviewItem}>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>"Professional team and comprehensive reports. Made our OSHA compliance easy."</p>
              <p className={styles.reviewAuthor}>— Jennifer L., HR Director</p>
            </div>
            <div className={styles.heroReviewItem}>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>"Excellent service! The process was smooth and the documentation was detailed."</p>
              <p className={styles.reviewAuthor}>— David K., Facility Manager</p>
            </div>
          </div>
          
          <div className={styles.ctaSection}>
            <div className={styles.ctaButtons}>
              <a 
                className={styles.ctaButton} 
                href={bookingUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Schedule Fit Test
              </a>
              <a 
                className={styles.ctaButtonSecondary}
                href={`mailto:${emailAddress}`}
              >
                Contact by Email
              </a>
            </div>
            <a 
              className={styles.inlineLink}
              href={bookingUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              View live appointment times
            </a>
            <p className={styles.ctaNote}>Quick and convenient appointments</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.featuresContent}>
          <div className={styles.featuresText}>
            <h3 className={styles.featuresTitle}>Professional Respiratory Fit Testing</h3>
            <div className={styles.featuresInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location:</span>
                <span className={styles.infoValue}>Convenient pop-up stations throughout Brooklyn and NYC</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Pricing:</span>
                <span className={styles.infoValue}>
                  <span className={styles.price}>$75</span> per fit test
                </span>
              </div>
            </div>
            <p className={styles.featuresDescription}>
              Ensure your respiratory protection equipment fits perfectly with our professional fit testing services. 
              Our certified technicians provide accurate, reliable testing in compliance with OSHA standards at convenient 
              locations throughout Brooklyn and NYC. We deliver comprehensive fit testing reports to help maintain workplace safety compliance.
            </p>
            <ul className={styles.featuresList}>
              <li>OSHA-compliant testing protocols</li>
              <li>Comprehensive fit testing reports</li>
              <li>Multiple testing locations</li>
              <li>Flexible scheduling options</li>
            </ul>
          </div>
          
          <div className={styles.featuresImage}>
            <Image className={styles.featureImg} src={image1} alt='Fit testing equipment' />  
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <span className={styles.processNumber}>1</span>
            <h4>Book Your Time</h4>
            <p>Choose a convenient appointment slot online in under a minute.</p>
          </div>
          <div className={styles.processCard}>
            <span className={styles.processNumber}>2</span>
            <h4>Complete Your Fit Test</h4>
            <p>Meet with our certified technician for a professional OSHA-aligned fit test.</p>
          </div>
          <div className={styles.processCard}>
            <span className={styles.processNumber}>3</span>
            <h4>Receive Documentation</h4>
            <p>Get your fit testing records for workplace compliance and internal tracking.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Choose Secure Fit LLC BK?</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconWrapper}>
              <div className={styles.benefitIcon}>✓</div>
            </div>
            <h4>Certified Technicians</h4>
            <p>Our team is fully certified and experienced in respiratory fit testing protocols, ensuring accurate and reliable results.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconWrapper}>
              <div className={styles.benefitIcon}>📍</div>
            </div>
            <h4>Convenient Locations</h4>
            <p>Multiple pop-up stations throughout Brooklyn and NYC for easy access, minimizing travel time and disruption to your schedule.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconWrapper}>
              <div className={styles.benefitIcon}>💰</div>
            </div>
            <h4>Transparent Pricing</h4>
            <p>Competitive rates at $75 per fit test with no hidden fees. Clear, upfront pricing for all services.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIconWrapper}>
              <div className={styles.benefitIcon}>⚡</div>
            </div>
            <h4>Efficient Service</h4>
            <p>Fast, professional service that fits into your busy schedule. Quick turnaround times without compromising quality.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}></div>
              <h3>Secure Fit LLC BK</h3>
              <p>Professional respiratory fit testing services</p>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li>Respiratory Fit Testing</li>
              <li>OSHA Compliance</li>
              <li>Safety Consultation</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={businessPhoneHref}>{businessPhone}</a>
              </li>
              <li>
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              </li>
              <li>Brooklyn, NY</li>
              <li>By appointment, Monday to Saturday</li>
              <li>
                <a href={bookingUrl} target='_blank' rel='noopener noreferrer'>
                  Schedule Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Secure Fit LLC BK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
