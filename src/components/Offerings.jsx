import { motion } from 'framer-motion';
import { BookOpen, Users, MessageSquare, Award, Flag, Lightbulb } from 'lucide-react';
import SectionHeader from './SectionHeader';
import styles from './Offerings.module.css';

const offerings = [
  { icon: BookOpen, title: 'Workshops', description: 'Hands-on technical sessions covering Security+, network defense, and ethical hacking.' },
  { icon: Users, title: 'Networking', description: 'Connect with peers, alumni, and cybersecurity professionals at our mixers and socials.' },
  { icon: MessageSquare, title: 'Panel Discussions', description: 'Hear from industry leaders about career paths, trends, and breaking into cyber.' },
  { icon: Award, title: 'Certifications', description: 'Structured study groups and resources for Security+, CySA+, CISSP, and more.' },
  { icon: Flag, title: 'CTF Competitions', description: 'Compete in Capture The Flag events to sharpen your offensive and defensive skills.' },
  { icon: Lightbulb, title: 'Discovery Nights', description: 'Beginner-friendly sessions exploring new topics from cloud security to OSINT.' },
];

export default function Offerings() {
  return (
    <section id="offerings" className={styles.offerings}>
      <div className={styles.container}>
        <SectionHeader
          tag="What We Offer"
          title="Everything You Need to Level Up"
          subtitle="From fundamentals to advanced skills, we provide the resources to accelerate your cybersecurity journey"
        />

        <div className={styles.grid}>
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className={styles.iconWrap}>
                <item.icon size={24} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
