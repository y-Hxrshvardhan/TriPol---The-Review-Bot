'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, ChevronDown, ChevronUp, ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';
import { AnalysisResult } from '@/types';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface ResultsProps {
  result: AnalysisResult;
}

export default function Results({ result }: ResultsProps) {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const toggleReview = (id: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedReviews(newExpanded);
  };

  const pieData = [
    { name: 'Positive', value: result.stats.positive, color: '#06b6d4' },
    { name: 'Negative', value: result.stats.negative, color: '#ef4444' },
    { name: 'Neutral', value: result.stats.neutral, color: '#8b5cf6' },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'from-green-400 to-cyan-400';
      case 'negative': return 'from-red-400 to-pink-400';
      default: return 'from-cyan-400 to-purple-400';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return TrendingUp;
      case 'negative': return TrendingDown;
      default: return Minus;
    }
  };

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Analysis Results
          </h2>
          <p className="text-xl text-slate-400">
            TriPol Neural Engine has processed your reviews
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/20">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {result.stats.total}
                </div>
                <div className="text-slate-400">Total Reviews</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-green-500/20">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {((result.stats.positive / result.stats.total) * 100).toFixed(0)}%
                </div>
                <div className="text-slate-400">Positive</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${result.stats.overallSentiment === 'positive' ? 'from-green-500 to-cyan-500' : result.stats.overallSentiment === 'negative' ? 'from-red-500 to-pink-500' : 'from-cyan-500 to-purple-500'} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500`} />
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/20">
              <div className="text-center">
                <div className={`text-4xl font-bold bg-gradient-to-r ${getSentimentColor(result.stats.overallSentiment)} bg-clip-text text-transparent mb-2 capitalize`}>
                  {result.stats.overallSentiment}
                </div>
                <div className="text-slate-400">Overall Sentiment</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Sentiment Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={(entry) => `${entry.name}: ${entry.value}`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-cyan-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/20 h-full">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Quick Stats</h3>
              <div className="space-y-4">
                {[
                  { label: 'Positive Reviews', value: result.stats.positive, color: 'green' },
                  { label: 'Negative Reviews', value: result.stats.negative, color: 'red' },
                  { label: 'Neutral Reviews', value: result.stats.neutral, color: 'purple' },
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-slate-300">{stat.label}</span>
                    <span className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-green-500/20">
              <div className="flex items-center gap-2 mb-6">
                <ThumbsUp className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold text-green-400">Pros</h3>
              </div>
              <ul className="space-y-3">
                {result.prosAndCons.pros.length > 0 ? (
                  result.prosAndCons.pros.map((pro, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex gap-2 text-slate-300"
                    >
                      <span className="text-green-400 mt-1">•</span>
                      <span>{pro}</span>
                    </motion.li>
                  ))
                ) : (
                  <li className="text-slate-500">No specific pros identified</li>
                )}
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-red-500/20">
              <div className="flex items-center gap-2 mb-6">
                <ThumbsDown className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-bold text-red-400">Cons</h3>
              </div>
              <ul className="space-y-3">
                {result.prosAndCons.cons.length > 0 ? (
                  result.prosAndCons.cons.map((con, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex gap-2 text-slate-300"
                    >
                      <span className="text-red-400 mt-1">•</span>
                      <span>{con}</span>
                    </motion.li>
                  ))
                ) : (
                  <li className="text-slate-500">No specific cons identified</li>
                )}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="relative group mb-12"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-purple-500/20">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-purple-400">TriPol Generated Summary</h3>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">{result.summary}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-cyan-400">Individual Reviews</h3>
          <div className="space-y-4">
            {result.reviews.map((review, index) => {
              const Icon = getSentimentIcon(review.sentiment);
              const isExpanded = expandedReviews.has(review.id);
              const shouldTruncate = review.text.length > 150;

              return (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.05 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${getSentimentColor(review.sentiment)} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500`} />
                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getSentimentColor(review.sentiment)} text-white text-sm font-medium flex items-center gap-1`}>
                          <Icon className="w-4 h-4" />
                          {review.sentiment}
                        </div>
                        <div className="text-sm text-slate-400">
                          Confidence: {(review.confidence * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {isExpanded || !shouldTruncate
                        ? review.text
                        : `${review.text.substring(0, 150)}...`}
                    </p>
                    {shouldTruncate && (
                      <button
                        onClick={() => toggleReview(review.id)}
                        className="mt-2 text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-sm"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4" /> Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" /> Show More
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
