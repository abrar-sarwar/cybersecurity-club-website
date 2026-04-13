import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, ExternalLink } from 'lucide-react';
import clubLogo from '../assets/Screenshot_2023-01-31_at_4.37.16_PM.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.ctaTitle}>Ready to defend the digital frontier?</h2>
            <p className={styles.ctaText}>
              Join 300+ students building the future of cybersecurity at GSU
            </p>
            <div className={styles.ctaActions}>
              <a href="mailto:cyber@gsu.edu" className={styles.ctaPrimary}>
                <Mail size={18} /> Join the Club
              </a>
              <a href="https://discord.gg" className={styles.ctaSecondary} target="_blank" rel="noopener noreferrer">
                Join Our Discord
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src={clubLogo} alt="Cybersecurity Club GSU" className={styles.logoImg} />
              <span>Cybersecurity Club <span className={styles.logoAccent}>GSU</span></span>
            </div>
            <p className={styles.brandText}>
              Georgia State University's premier cybersecurity organization.
              Building tomorrow's cyber defenders today.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navigate</h4>
              <a href="#about">About</a>
              <a href="#events">Events</a>
              <a href="#offerings">Offerings</a>
              <a href="#team">Team</a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Contact</h4>
              <a href="mailto:cyber@gsu.edu">
                <Mail size={14} /> cyber@gsu.edu
              </a>
              <a href="#">
                <MapPin size={14} /> Atlanta, GA 30303
              </a>
            </div>
          </div>

          <div className={styles.social}>
            <h4 className={styles.linkTitle}>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Discord">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Cybersecurity Club at Georgia State University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
