import { motion } from 'framer-motion';
import { Shield, Users, Zap } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.tag}>About Us</span>
          <h2 className={styles.title}>
            Building the next generation of
            <span className={styles.accent}> cyber defenders</span>
          </h2>
          <p className={styles.description}>
            We are Georgia State University's premier cybersecurity organization,
            uniting students passionate about digital security. Through hands-on
            workshops, CTF competitions, and industry connections, we transform
            curiosity into career-ready expertise.
          </p>
        </motion.div>

        <motion.div
          className={styles.cards}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {[
            { icon: Shield, label: 'Who We Are', text: 'A student-led cybersecurity community at GSU fostering technical excellence.' },
            { icon: Zap, label: 'What We Do', text: 'Host workshops, CTF competitions, panels, and certification prep sessions.' },
            { icon: Users, label: 'Why It Matters', text: 'Cyber threats are evolving. We prepare students to lead the defense.' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className={styles.cardIcon}>
                <item.icon size={20} />
              </div>
              <div>
                <h3 className={styles.cardLabel}>{item.label}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
