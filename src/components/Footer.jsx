import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{
      padding: '3rem 0',
      backgroundColor: 'black',
      borderTop: '1px solid rgba(0, 255, 255, 0.3)',
    }}>
      <div className="container">
        <div className="grid grid-3" style={{ gap: '2rem', alignItems: 'center' }}>
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-cyan" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              TECHFEST // 30
            </h3>
            <p className="text-gray" style={{ fontSize: '0.875rem' }}>
              IIT BOMBAY
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-gray" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              CYBERNETIC LANDING PAGE
            </p>
            <p className="text-gray" style={{ fontSize: '0.75rem', color: '#6b7280' }}>
              Campus Ambassador Web Development Submission
            </p>
          </motion.div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-right"
          >
            <div className="flex items-center justify-end gap-2 mb-2">
              <div style={{
                width: '0.5rem',
                height: '0.5rem',
                backgroundColor: '#22c55e',
                borderRadius: '50%',
                animation: 'pulse 2s infinite',
              }}></div>
              <span className="text-green" style={{ fontSize: '0.875rem', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                SYSTEM ONLINE
              </span>
            </div>
            <p className="text-gray" style={{ fontSize: '0.75rem', color: '#6b7280' }}>
              © 2026
            </p>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid #1f2937',
            textAlign: 'center',
          }}
        >
          <p className="text-gray" style={{
            fontSize: '0.75rem',
            color: '#4b5563',
            maxWidth: '42rem',
            margin: '0 auto',
          }}>
            This is a creative submission for the Techfest IIT Bombay Campus Ambassador Web Development Task 1.
            This is not an official Techfest website.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
