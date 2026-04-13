import { motion } from 'framer-motion';
import { ChevronRight, Calendar } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className={styles.badgeDot} />
          Georgia State University
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Cybersecurity
          <br />
          <span className={styles.titleAccent}>Club GSU</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Defending the digital future, one student at a time.
          <br />
          Learn. Compete. Connect. Lead.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="#footer" className={styles.primaryBtn}>
            Join Us
            <ChevronRight size={18} />
          </a>
          <a href="#events" className={styles.secondaryBtn}>
            <Calendar size={18} />
            Explore Events
          </a>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className={styles.stat}>
            <span className={styles.statNumber}>300+</span>
            <span className={styles.statLabel}>Members</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>20+</span>
            <span className={styles.statLabel}>Events/Year</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />
    </section>
  );
}
