import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <motion.div
      className={styles.header}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}
