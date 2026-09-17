import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const EvolutionProtocol = () => {
  const stages = [
    {
      number: '01',
      title: 'HUMAN',
      description: 'Biological intelligence with natural cognitive abilities and adaptability.',
      color: 'purple'
    },
    {
      number: '02',
      title: 'COMPUTING',
      description: 'Digital processing systems that execute calculations and store information.',
      color: 'cyan'
    },
    {
      number: '03',
      title: 'ARTIFICIAL INTELLIGENCE',
      description: 'Machine learning systems that can learn, reason, and make decisions.',
      color: 'purple'
    },
    {
      number: '04',
      title: 'ROBOTICS',
      description: 'Physical machines that can interact with and manipulate the world.',
      color: 'cyan'
    },
    {
      number: '05',
      title: 'CYBERNETIC FUTURE',
      description: 'Seamless integration of human and machine intelligence in one evolving system.',
      color: 'purple'
    }
  ];

  return (
    <section id="access" className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2>
            <span className="text-white">EVOLUTION</span>
            <span className="text-cyan"> PROTOCOL</span>
          </h2>
        </motion.div>

        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          {/* Vertical Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Central Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '0.0625rem',
              height: '100%',
              background: 'linear-gradient(to bottom, #a855f7, #00ffff, #a855f7)',
            }}></div>

            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="relative flex items-center mb-12"
                style={{
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  opacity: 0,
                  transform: 'translateY(50px)',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                }}
              >
                {/* Content */}
                <div style={{ width: '41.666667%', textAlign: index % 2 === 0 ? 'right' : 'left', paddingRight: index % 2 === 0 ? '2rem' : 0, paddingLeft: index % 2 === 0 ? 0 : '2rem' }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="card"
                    style={{ padding: '1.5rem', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.6)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.3)'}
                  >
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      color: stage.color === 'cyan' ? '#00ffff' : '#a855f7',
                      marginBottom: '0.5rem',
                    }}>
                      {stage.number}
                    </div>
                    <h3 className="text-white" style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{stage.title}</h3>
                    <p className="text-gray" style={{ fontSize: '0.875rem' }}>{stage.description}</p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                      backgroundColor: stage.color === 'cyan' ? 'rgba(0, 255, 255, 0.2)' : 'rgba(168, 85, 247, 0.2)',
                      border: `2px solid ${stage.color === 'cyan' ? '#00ffff' : '#a855f7'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      borderRadius: '50%',
                      backgroundColor: stage.color === 'cyan' ? '#00ffff' : '#a855f7',
                    }}></div>
                  </motion.div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div style={{ width: '41.666667%' }}></div>

                {/* Chevron Arrow */}
                {index < stages.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: '3.75rem',
                      opacity: 0,
                      animation: `fadeIn 0.6s ease-out ${index * 0.1 + 0.3}s forwards`,
                    }}
                  >
                    <ChevronDown size={24} style={{ color: 'rgba(0, 255, 255, 0.5)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionProtocol;
