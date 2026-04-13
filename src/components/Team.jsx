import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Mail, User } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { teamMembers } from '../data/team';
import styles from './Team.module.css';

export default function Team() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="team" className={styles.team}>
      <div className={styles.container}>
        <SectionHeader
          tag="Our Team"
          title="Meet the Board"
          subtitle="The dedicated leaders driving our mission forward"
        />

        <div className={styles.grid}>
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelected(member)}
            >
              <div className={styles.avatar}>
                <User size={32} />
                <div className={styles.avatarGlow} />
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <span className={styles.role}>{member.role}</span>
              <span className={styles.year}>{member.year}</span>
              <span className={styles.viewProfile}>View Profile</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelected(null)}>
                <X size={20} />
              </button>

              <div className={styles.modalHeader}>
                <div className={styles.modalAvatar}>
                  <User size={40} />
                </div>
                <div>
                  <h3 className={styles.modalName}>{selected.name}</h3>
                  <span className={styles.modalRole}>{selected.role}</span>
                {selected.year && <span className={styles.modalYear}>{selected.year}</span>}
                </div>
              </div>

              {selected.bio && (
                <div className={styles.modalSection}>
                  <h4 className={styles.modalLabel}>About</h4>
                  <p className={styles.modalText}>{selected.bio}</p>
                </div>
              )}

              {selected.interests && (
                <div className={styles.modalSection}>
                  <h4 className={styles.modalLabel}>Interests</h4>
                  <div className={styles.tags}>
                    {selected.interests.split(', ').map(interest => (
                      <span key={interest} className={styles.interestTag}>{interest}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.modalLinks}>
                {selected.linkedin && selected.linkedin !== '#' && (
                  <a href={selected.linkedin} className={styles.linkBtn}>
                    <ExternalLink size={18} /> LinkedIn
                  </a>
                )}
                {selected.email && (
                  <a href={`mailto:${selected.email}`} className={styles.linkBtnSecondary}>
                    <Mail size={18} /> Email
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
