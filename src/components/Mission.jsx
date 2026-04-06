import { motion } from 'framer-motion';
import { Target, Briefcase, Cpu, ArrowUpRight } from 'lucide-react';
import styles from './Mission.module.css';

export default function Mission() {
  const pillars = [
    { icon: Target, label: 'Hands-On Skills', desc: 'Real-world labs, CTF challenges, and offensive/defensive exercises' },
    { icon: Briefcase, label: 'Career Growth', desc: 'Resume workshops, mock interviews, and direct employer connections' },
    { icon: Cpu, label: 'Industry Connection', desc: 'Guest speakers, mentorships, and conference opportunities' },
  ];

  return (
    <section className={styles.mission}>
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tag}>Our Mission</span>
          <h2 className={styles.title}>
            Empowering students to secure tomorrow's digital landscape
          </h2>
          <p className={styles.text}>
            We bridge the gap between academic knowledge and industry demand,
            equipping every member with the skills, certifications, and network
            to launch a successful cybersecurity career.
          </p>
          <a href="#events" className={styles.cta}>
            See how we do it <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <div className={styles.pillars}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              className={styles.pillar}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={styles.pillarIcon}>
                <p.icon size={24} />
              </div>
              <h3 className={styles.pillarLabel}>{p.label}</h3>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
