import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, X, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { categories, events } from '../data/events';
import styles from './Events.module.css';

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filtered = activeCategory === 'All'
    ? events
    : events.filter(e => e.category === activeCategory);

  return (
    <section id="events" className={styles.events}>
      <div className={styles.container}>
        <SectionHeader
          tag="Events"
          title="Events Directory"
          subtitle="Explore our upcoming workshops, competitions, and networking opportunities"
        />

        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((event, i) => (
              <motion.div
                key={event.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => setSelectedEvent(event)}
              >
                <div className={styles.cardCategory}>{event.category}</div>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardDesc}>{event.description}</p>
                <div className={styles.cardMeta}>
                  <span><Calendar size={14} /> {event.date}</span>
                  <span><Clock size={14} /> {event.time}</span>
                </div>
                <div className={styles.cardAction}>
                  View Details <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedEvent(null)}>
                <X size={20} />
              </button>
              <div className={styles.modalCategory}>{selectedEvent.category}</div>
              <h3 className={styles.modalTitle}>{selectedEvent.title}</h3>
              <div className={styles.modalMeta}>
                <span><Calendar size={16} /> {selectedEvent.date}</span>
                <span><Clock size={16} /> {selectedEvent.time}</span>
                <span><MapPin size={16} /> {selectedEvent.location}</span>
              </div>
              <p className={styles.modalDetails}>{selectedEvent.details}</p>
              <button className={styles.modalBtn}>Register for Event</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
