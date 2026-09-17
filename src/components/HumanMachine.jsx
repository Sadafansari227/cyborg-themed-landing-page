import { motion } from 'framer-motion';

const HumanMachine = () => {
  const humanTraits = [
    'INTUITION',
    'CREATIVITY',
    'EMOTION',
    'ADAPTATION'
  ];

  const machineTraits = [
    'PRECISION',
    'PROCESSING',
    'MEMORY',
    'SCALE'
  ];

  return (
    <section id="neural" className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-3"
          style={{ gap: '2rem', alignItems: 'center' }}
        >
          {/* Human Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-white" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 'bold', marginBottom: '2rem' }}>HUMAN</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {humanTraits.map((trait, index) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(168, 85, 247, 0.1)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.6)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)'}
                >
                  <span className="text-purple" style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>{trait}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center X */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div style={{ position: 'relative', width: '8rem', height: '8rem', margin: '0 auto' }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', inset: 0, border: '2px solid rgba(0, 255, 255, 0.3)', borderRadius: '50%' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', inset: '1rem', border: '2px solid rgba(168, 85, 247, 0.3)', borderRadius: '50%' }}
              />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="text-cyan" style={{ fontSize: '4rem', fontWeight: 'bold' }}>×</span>
              </div>
            </div>
          </motion.div>

          {/* Machine Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-white" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 'bold', marginBottom: '2rem' }}>MACHINE</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {machineTraits.map((trait, index) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.6)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.3)'}
                >
                  <span className="text-cyan" style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>{trait}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', fontWeight: 300, maxWidth: '48rem', margin: '0 auto' }}>
            THE FUTURE IS NOT HUMAN OR MACHINE.
            <br />
            <span className="text-cyan" style={{ fontWeight: 600 }}>IT IS THE CONNECTION BETWEEN BOTH.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HumanMachine;
