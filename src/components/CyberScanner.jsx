import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Shield, Eye, Cpu, Lock, CheckCircle2 } from 'lucide-react';

const CyberScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  const systems = [
    { name: 'NEURAL NETWORK', icon: Activity, status: 'ACTIVE' },
    { name: 'VISION CORE', icon: Eye, status: 'ACTIVE' },
    { name: 'MOTOR SYSTEM', icon: Cpu, status: 'ACTIVE' },
    { name: 'AI CORE', icon: Shield, status: 'ACTIVE' },
    { name: 'SECURITY', icon: Lock, status: 'STABLE' }
  ];

  const handleScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setProgress(0);

    // Simulate scanning progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanComplete(true);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <section id="protocol" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2>
            <span className="text-white">CYBER</span>
            <span className="text-cyan"> SCANNER</span>
          </h2>
          <p className="text-gray" style={{ fontSize: '1.125rem', letterSpacing: '0.05em' }}>
            SYSTEM DIAGNOSTIC
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '56rem', margin: '0 auto' }}
        >
          {/* Scanner Interface */}
          <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Scanning Line Effect */}
            <AnimatePresence>
              {isScanning && (
                <motion.div
                  initial={{ top: '-10%' }}
                  animate={{ top: '110%' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '0.0625rem',
                    background: 'linear-gradient(to right, transparent, #00ffff, transparent)',
                    pointerEvents: 'none',
                  }}
                />
              )}
            </AnimatePresence>

            {/* Grid Background */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.1,
              pointerEvents: 'none',
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
            }}></div>

            {/* System Status List */}
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {systems.map((system, index) => (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between"
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid #1f2937',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1f2937'}
                >
                  <div className="flex items-center gap-4">
                    <system.icon size={20} className="text-cyan" />
                    <span className="text-gray" style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>{system.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span style={{
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      color: system.status === 'ACTIVE' ? '#22c55e' : '#eab308',
                    }}>
                      {isScanning ? 'SCANNING...' : system.status}
                    </span>
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      borderRadius: '50%',
                      backgroundColor: system.status === 'ACTIVE' ? '#22c55e' : '#eab308',
                      ...(isScanning && { animation: 'pulse 2s infinite' }),
                    }}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div style={{ position: 'relative', zIndex: 10, marginBottom: '2rem' }}>
              <div className="flex items-center justify-between" style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
                <span>DIAGNOSTIC PROGRESS</span>
                <span>{progress}%</span>
              </div>
              <div style={{ width: '100%', height: '0.5rem', backgroundColor: '#1f2937', borderRadius: '9999px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                  style={{ height: '100%', background: 'linear-gradient(to right, #00ffff, #a855f7)' }}
                />
              </div>
            </div>

            {/* Scan Button */}
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
              <motion.button
                onClick={handleScan}
                disabled={isScanning}
                whileHover={{ scale: isScanning ? 1 : 1.05 }}
                whileTap={{ scale: isScanning ? 1 : 0.95 }}
                style={{
                  padding: '0.75rem 2rem',
                  border: '1px solid #00ffff',
                  color: '#00ffff',
                  fontFamily: 'monospace',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s',
                  backgroundColor: isScanning ? 'rgba(0, 255, 255, 0.1)' : 'rgba(0, 255, 255, 0.2)',
                  cursor: isScanning ? 'not-allowed' : 'pointer',
                }}
              >
                {isScanning ? 'SCANNING...' : scanComplete ? 'SCAN COMPLETE' : 'RUN DIAGNOSTIC'}
              </motion.button>
            </div>

            {/* Success Message */}
            <AnimatePresence>
              {scanComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    marginTop: '1.5rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '0.5rem',
                    textAlign: 'center',
                  }}
                >
                  <div className="flex items-center justify-center gap-2 text-green">
                    <CheckCircle2 size={20} />
                    <span style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>DIAGNOSTIC COMPLETE - ALL SYSTEMS OPERATIONAL</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberScanner;
