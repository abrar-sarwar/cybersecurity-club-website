import { motion } from 'framer-motion';
import { MessageCircle, Users, GraduationCap, ArrowRight } from 'lucide-react';
import styles from './Community.module.css';

const features = [
  { icon: MessageCircle, title: 'Active Discord', text: 'Stay connected with 24/7 channels for CTF practice, study groups, and industry news.' },
  { icon: Users, title: 'Peer Collaboration', text: 'Work alongside students with shared goals. Study together, hack together, grow together.' },
  { icon: GraduationCap, title: 'Mentorship Access', text: 'Get paired with alumni and professionals who guide your career and skill development.' },
];

export default function Community() {
  return (
    <section id="community" className={styles.community}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tag}>Community</span>
          <h2 className={styles.title}>
            More than a club.
            <br />
            <span className={styles.accent}>A community.</span>
          </h2>
          <p className={styles.subtitle}>
            Collaboration, communication, and connection drive everything we do.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className={styles.cardIcon}>
                <item.icon size={24} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#footer" className={styles.ctaBtn}>
            Join Our Community <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
