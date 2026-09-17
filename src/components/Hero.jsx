import { motion } from 'framer-motion';
import { Cpu, Network, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '4rem',
      background: 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a, #0a0a0a)',
    }}>
      {/* Background Grid */}
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

      {/* Floating Particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(20)].map((_, i) => (
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
        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg-text-left"
          >
            <motion.h1
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '-0.025em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white">HUMAN</span>
              <span className="text-cyan"> × </span>
              <span className="text-purple">MACHINE</span>
            </motion.h1>

            <motion.h2
              className="text-gray"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.875rem)', marginBottom: '1.5rem', letterSpacing: '0.05em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              THE NEXT EVOLUTION OF INTELLIGENCE
            </motion.h2>

            <motion.p
              className="text-gray"
              style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '36rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Where human intelligence meets artificial cognition, robotics and cybernetic systems.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 justify-center"
              style={{ '@media (min-width: 640px)': { flexDirection: 'row' }, '@media (min-width: 1024px)': { justifyContent: 'flex-start' } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn"
              >
                EXPLORE SYSTEM
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-purple"
              >
                INITIALIZE
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right - Cyborg Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: 'relative', height: 'clamp(20rem, 40vw, 31.25rem)' }}
          >
            {/* Main Cyborg Visual */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div style={{
                  width: 'clamp(12rem, 25vw, 20rem)',
                  height: 'clamp(12rem, 25vw, 20rem)',
                  border: '2px solid rgba(0, 255, 255, 0.5)',
                  borderRadius: '50%',
                  position: 'relative',
                }}>
                  <div style={{ position: 'absolute', inset: 0, border: '2px solid rgba(168, 85, 247, 0.3)', borderRadius: '50%', transform: 'scale(0.75)' }}></div>
                  <div style={{ position: 'absolute', inset: 0, border: '2px solid rgba(0, 255, 255, 0.2)', borderRadius: '50%', transform: 'scale(0.5)' }}></div>
                </div>
              </motion.div>
            </div>

            {/* Inner Core */}
            <motion.div
              style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div style={{
                width: 'clamp(6rem, 15vw, 10rem)',
                height: 'clamp(6rem, 15vw, 10rem)',
                background: 'linear-gradient(to bottom right, rgba(0, 255, 255, 0.2), rgba(168, 85, 247, 0.2))',
                borderRadius: '50%',
                border: '1px solid rgba(0, 255, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Cpu size={48} className="text-cyan" />
              </div>
            </motion.div>

            {/* HUD Elements */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.75rem', color: '#00ffff', fontFamily: 'monospace' }}>
              <div style={{ marginBottom: '0.25rem' }}>NEURAL LINK: <span className="text-green">ACTIVE</span></div>
              <div style={{ marginBottom: '0.25rem' }}>CORE STATUS: <span className="text-green">ONLINE</span></div>
              <div>AI PROCESSING: <span className="text-purple">98%</span></div>
            </div>

            <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.75rem', color: '#00ffff', fontFamily: 'monospace', textAlign: 'right' }}>
              <div style={{ marginBottom: '0.25rem' }}>SYSTEM ID: <span className="text-purple">TF30-CYB</span></div>
              <div>SYNC: <span className="text-green">100%</span></div>
            </div>

            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontSize: '0.75rem', color: '#00ffff', fontFamily: 'monospace' }}>
              <div className="flex items-center gap-2">
                <Network size={16} />
                <span>NETWORK: CONNECTED</span>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', fontSize: '0.75rem', color: '#00ffff', fontFamily: 'monospace', textAlign: 'right' }}>
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>SECURITY: STABLE</span>
              </div>
            </div>

            {/* Scanning Line */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div style={{
                width: '100%',
                height: '0.125rem',
                background: 'linear-gradient(to right, transparent, #00ffff, transparent)',
                position: 'absolute',
                top: '50%',
              }}></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div style={{ width: '1.5rem', height: '2.5rem', border: '2px solid rgba(0, 255, 255, 0.5)', borderRadius: '9999px', display: 'flex', justifyContent: 'center', paddingTop: '0.5rem' }}>
          <motion.div
            style={{ width: '0.25rem', height: '0.5rem', backgroundColor: '#00ffff', borderRadius: '9999px' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
