import { motion } from 'framer-motion';
import { Brain, Eye, Armchair, Sparkles } from 'lucide-react';

const CyberneticCore = () => {
  const cards = [
    {
      icon: Brain,
      title: 'NEURAL ENGINE',
      description: 'Advanced neural interfaces connecting biological intelligence with digital systems.',
      status: 'ACTIVE',
      color: 'cyan'
    },
    {
      icon: Eye,
      title: 'MACHINE VISION',
      description: 'Computer vision systems designed to perceive, interpret and understand the world.',
      status: 'ONLINE',
      color: 'purple'
    },
    {
      icon: Armchair,
      title: 'ROBOTIC CONTROL',
      description: 'Precision robotics combining machine intelligence with physical interaction.',
      status: 'READY',
      color: 'cyan'
    },
    {
      icon: Sparkles,
      title: 'DIGITAL CONSCIOUSNESS',
      description: 'Artificial cognition pushing the boundaries between human thought and machine intelligence.',
      status: 'EVOLVING',
      color: 'purple'
    }
  ];

  return (
    <section id="cybernetics" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2>
            <span className="text-white">CYBERNETIC</span>
            <span className="text-cyan"> CORE</span>
          </h2>
          <p className="text-gray" style={{ fontSize: '1.125rem', letterSpacing: '0.05em' }}>
            Four systems. One connected intelligence.
          </p>
        </motion.div>

        <div className="grid grid-4" style={{ gap: '1.5rem' }}>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card"
              style={{
                borderColor: card.color === 'cyan' ? 'rgba(0, 255, 255, 0.3)' : 'rgba(168, 85, 247, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = card.color === 'cyan' ? 'rgba(0, 255, 255, 0.6)' : 'rgba(168, 85, 247, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = card.color === 'cyan' ? 'rgba(0, 255, 255, 0.3)' : 'rgba(168, 85, 247, 0.3)';
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: card.color === 'cyan' ? 'rgba(0, 255, 255, 0.2)' : 'rgba(168, 85, 247, 0.2)',
                    borderRadius: '0.5rem',
                  }}
                >
                  <card.icon size={24} style={{ color: card.color === 'cyan' ? '#00ffff' : '#a855f7' }} />
                </motion.div>
                <span style={{
                  fontSize: '0.75rem',
                  color: card.color === 'cyan' ? '#00ffff' : '#a855f7',
                  fontFamily: 'monospace',
                  letterSpacing: '0.05em',
                }}>
                  {card.status}
                </span>
              </div>

              {/* Card Content */}
              <h3 className="text-white" style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem', letterSpacing: '0.025em' }}>
                {card.title}
              </h3>
              <p className="text-gray" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                {card.description}
              </p>

              {/* Decorative Elements */}
              <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', width: '0.25rem', height: '0.25rem', backgroundColor: '#00ffff', borderRadius: '50%', opacity: 0.5 }}></div>
              <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', width: '0.25rem', height: '0.25rem', backgroundColor: '#a855f7', borderRadius: '50%', opacity: 0.5 }}></div>

              {/* Technical Label */}
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #1f2937' }}>
                <div className="flex items-center justify-between" style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace' }}>
                  <span>SYS-{String(index + 1).padStart(3, '0')}</span>
                  <span>OPTIMAL</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberneticCore;
