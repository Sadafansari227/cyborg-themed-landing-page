import { motion } from 'framer-motion';
import { Cpu, Eye, Wrench, BrainCircuit } from 'lucide-react';

const SystemModules = () => {
  const modules = [
    {
      number: '01',
      title: 'NEURAL INTERFACE',
      description: 'Direct brain-computer interfaces enabling seamless human-AI communication.',
      icon: Cpu
    },
    {
      number: '02',
      title: 'MACHINE VISION',
      description: 'Advanced visual processing systems that understand and interpret the world.',
      icon: Eye
    },
    {
      number: '03',
      title: 'ROBOTIC AUGMENTATION',
      description: 'Enhanced physical capabilities through cybernetic prosthetics and exoskeletons.',
      icon: Wrench
    },
    {
      number: '04',
      title: 'AI COGNITION',
      description: 'Artificial intelligence systems that learn, adapt, and evolve alongside humans.',
      icon: BrainCircuit
    }
  ];

  return (
    <section id="system" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2>
            <span className="text-white">SYSTEM</span>
            <span className="text-cyan"> MODULES</span>
          </h2>
        </motion.div>

        <div className="grid grid-2" style={{ gap: '2rem' }}>
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card relative"
            >
              {/* Module Number */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '4rem',
                fontWeight: 'bold',
                color: 'rgba(0, 255, 255, 0.2)',
                transition: 'color 0.3s',
              }} className="group-hover:text-cyan-40">
                {module.number}
              </div>

              {/* Module Icon */}
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
                style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(0, 255, 255, 0.2)',
                  borderRadius: '0.5rem',
                  width: 'fit-content',
                  marginBottom: '1.5rem',
                }}
              >
                <module.icon size={32} className="text-cyan" />
              </motion.div>

              {/* Module Content */}
              <h3 className="text-white" style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.75rem', letterSpacing: '0.025em' }}>
                {module.title}
              </h3>
              <p className="text-gray" style={{ lineHeight: '1.6' }}>
                {module.description}
              </p>

              {/* Progress Bar */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #1f2937' }}>
                <div className="flex items-center justify-between" style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
                  <span>INTEGRATION</span>
                  <span>{85 + index * 3}%</span>
                </div>
                <div style={{ width: '100%', height: '0.25rem', backgroundColor: '#1f2937', borderRadius: '9999px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${85 + index * 3}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ height: '100%', background: 'linear-gradient(to right, #00ffff, #a855f7)' }}
                  />
                </div>
              </div>

              {/* Decorative Corner */}
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '2rem', height: '2rem', borderBottom: '2px solid rgba(0, 255, 255, 0.3)', borderRight: '2px solid rgba(0, 255, 255, 0.3)', transition: 'border-color 0.3s' }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemModules;
