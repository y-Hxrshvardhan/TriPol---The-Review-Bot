'use client';

import { motion } from 'framer-motion';
import { Users, GraduationCap, BookOpen, Target, Cpu, Layers } from 'lucide-react';

export default function Documentation() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Project Documentation
          </h2>
          <p className="text-xl text-slate-400">
            Final Year Major Project 2025-2026
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-cyan-400">Project Team</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-950/50 border border-cyan-500/10">
                  <p className="text-slate-300">Harshvardhan Yadav</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/50 border border-cyan-500/10">
                  <p className="text-slate-300">Chhavi Baraskar</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/50 border border-cyan-500/10">
                  <p className="text-slate-300">Hemant Verma</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/50 border border-cyan-500/10">
                  <p className="text-slate-300">Kalash Gurjar</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-purple-400">Project Details</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm">Group Number</p>
                  <p className="text-2xl font-bold text-white">14</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Project Guide</p>
                  <p className="text-xl font-semibold text-white">Prof. Ram Pratap Singh</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Department</p>
                  <p className="text-xl font-semibold text-white">CSE - AIML</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative group mb-8"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-green-400" />
              <h3 className="text-3xl font-bold text-green-400">Project Objective</h3>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              TriPol – The Review Bot aims to leverage advanced Natural Language Processing (NLP) and Machine Learning techniques to automatically analyze and classify customer reviews. The system provides intelligent sentiment analysis, extracting meaningful insights from raw text data to help businesses and researchers understand customer feedback patterns, identify key strengths and weaknesses, and make data-driven decisions based on comprehensive review analysis.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative group mb-8"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/20">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-cyan-400" />
              <h3 className="text-3xl font-bold text-cyan-400">NLP Techniques Used</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Tokenization', desc: 'Breaking down text into individual words and phrases for analysis' },
                { title: 'Stop-word Removal', desc: 'Filtering out common words that don\'t contribute to sentiment' },
                { title: 'TF-IDF Analysis', desc: 'Term Frequency-Inverse Document Frequency for keyword importance' },
                { title: 'Sentiment Classification', desc: 'ML-based classification into positive, negative, and neutral categories' },
                { title: 'Feature Extraction', desc: 'Identifying key phrases and aspects from review text' },
                { title: 'Confidence Scoring', desc: 'Statistical confidence metrics for each sentiment prediction' },
              ].map((technique, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-lg bg-slate-950/50 border border-cyan-500/10 hover:border-cyan-500/30 transition-colors"
                >
                  <h4 className="font-semibold text-white mb-2">{technique.title}</h4>
                  <p className="text-sm text-slate-400">{technique.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative group mb-8"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/20">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl font-bold text-blue-400">System Architecture</h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Input Layer</h4>
                  <p className="text-slate-400">User submits raw review text through the intuitive web interface</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Preprocessing Engine</h4>
                  <p className="text-slate-400">Text normalization, tokenization, and stop-word removal</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Neural Analysis Core</h4>
                  <p className="text-slate-400">ML-based sentiment classification and confidence scoring</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Insight Generation</h4>
                  <p className="text-slate-400">Automatic extraction of pros, cons, and summary generation</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Visualization Layer</h4>
                  <p className="text-slate-400">Interactive charts, graphs, and detailed result presentation</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-orange-500/20">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-orange-400" />
              <h3 className="text-3xl font-bold text-orange-400">Technologies Used</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4',
                'Framer Motion', 'Recharts', 'shadcn/ui', 'Radix UI',
                'Natural Language Processing', 'Machine Learning', 'Sentiment Analysis', 'Data Visualization'
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 text-center text-white font-medium hover:border-orange-500/40 transition-colors"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
