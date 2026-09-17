import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="section" style={{ overflow: 'hidden' }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a, #0a0a0a)',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '25%',
        width: '16rem',
        height: '16rem',
        backgroundColor: 'rgba(0, 255, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(3rem)',
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '25%',
        right: '25%',
        width: '16rem',
        height: '16rem',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        borderRadius: '50%',
        filter: 'blur(3rem)',
      }}></div>

      {/* Floating Particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '0.25rem',
              height: '0.25rem',
              backgroundColor: '#00ffff',
              borderRadius: '50%',
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '-0.025em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            THE FUTURE IS
            <br />
            <span className="text-cyan">ALREADY CONNECTED.</span>
          </motion.h1>

          <motion.p
            className="text-gray"
            style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', fontWeight: 300, marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Human creativity. Machine intelligence.
            <br />
            <span className="text-purple">One evolving system.</span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn"
            style={{
              padding: '1rem 3rem',
              background: 'linear-gradient(to right, rgba(0, 255, 255, 0.2), rgba(168, 85, 247, 0.2))',
              border: '1px solid #00ffff',
              color: '#00ffff',
              fontSize: '1.125rem',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, rgba(0, 255, 255, 0.3), rgba(168, 85, 247, 0.3))'}
            onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, rgba(0, 255, 255, 0.2), rgba(168, 85, 247, 0.2))'}
          >
            ENTER THE FUTURE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
