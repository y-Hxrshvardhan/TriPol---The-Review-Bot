'use client';

import { motion } from 'framer-motion';

export default function NeuralLoader() {
  const nodes = [
    { x: 20, y: 20 },
    { x: 50, y: 30 },
    { x: 80, y: 20 },
    { x: 35, y: 60 },
    { x: 65, y: 60 },
    { x: 20, y: 80 },
    { x: 50, y: 70 },
    { x: 80, y: 80 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl"
    >
      <div className="text-center">
        <motion.div
          className="relative w-64 h-64 mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            {nodes.map((node, i) =>
              nodes.slice(i + 1).map((targetNode, j) => (
                <motion.line
                  key={`line-${i}-${j}`}
                  x1={node.x}
                  y1={node.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke="url(#gradient)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (i + j) * 0.1,
                  }}
                />
              ))
            )}

            {nodes.map((node, i) => (
              <motion.circle
                key={`node-${i}`}
                cx={node.x}
                cy={node.y}
                r="2"
                fill="#06b6d4"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.h2
          className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          TriPol Neural Engine Processing
        </motion.h2>

        <motion.p
          className="text-slate-400 text-lg"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          Analyzing sentiment patterns with advanced NLP...
        </motion.p>

        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-cyan-400"
              animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
