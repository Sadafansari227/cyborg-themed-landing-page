import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'SYSTEM', href: '#system' },
    { name: 'CYBERNETICS', href: '#cybernetics' },
    { name: 'NEURAL CORE', href: '#neural' },
    { name: 'PROTOCOL', href: '#protocol' },
    { name: 'ACCESS', href: '#access' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 255, 255, 0.3)',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between" style={{ height: '4rem' }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ flexShrink: 0 }}
          >
            <span className="text-cyan" style={{ fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: '0.05em' }}>
              TECHFEST // 30
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="desktop-only flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => e.target.style.color = '#00ffff'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* System Status */}
          <div className="desktop-only flex items-center gap-2">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2"
            >
              <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#22c55e', borderRadius: '50%' }}></div>
              <span className="text-green" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>SYSTEM ONLINE</span>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-only">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: '#d1d5db', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              borderBottom: '1px solid rgba(0, 255, 255, 0.3)',
            }}
          >
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    display: 'block',
                    color: '#d1d5db',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                    padding: '0.5rem 0',
                  }}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => e.target.style.color = '#00ffff'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-2" style={{ paddingTop: '0.5rem' }}>
                <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#22c55e', borderRadius: '50%' }}></div>
                <span className="text-green" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>SYSTEM ONLINE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
