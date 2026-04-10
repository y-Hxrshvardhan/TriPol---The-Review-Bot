'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileText } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface AnalyzeProps {
  onAnalyze: (reviews: string[]) => void;
}

const SAMPLE_REVIEWS = [
  "This product is absolutely amazing! The quality exceeded my expectations and the customer service was outstanding. Highly recommend!",
  "Terrible experience. The item arrived damaged and customer support was unresponsive. Very disappointed.",
  "Good product overall, but shipping took longer than expected. Quality is decent for the price.",
  "Love it! Best purchase I've made this year. Works perfectly and looks great.",
  "Not worth the money. Poor quality materials and doesn't work as advertised.",
  "Excellent product! Fast shipping and exactly as described. Will buy again.",
  "Average product. Nothing special but gets the job done.",
  "Worst purchase ever. Complete waste of money. Do not buy!",
  "Pretty good! Minor issues but overall satisfied with the purchase.",
  "Outstanding quality and design. Exceeded all expectations!",
  "Disappointing. Expected much better based on the reviews.",
  "Perfect! Exactly what I needed. Great value for money.",
  "Mediocre at best. There are better options available.",
  "Fantastic product! Would definitely recommend to friends and family.",
  "Poor quality control. Received defective unit twice."
];

export default function Analyze({ onAnalyze }: AnalyzeProps) {
  const [reviewText, setReviewText] = useState('');

  const handleLoadSamples = () => {
    setReviewText(SAMPLE_REVIEWS.join('\n\n'));
  };

  const handleAnalyze = () => {
    const reviews = reviewText
      .split('\n')
      .map(r => r.trim())
      .filter(r => r.length > 0);

    if (reviews.length > 0) {
      onAnalyze(reviews);
    }
  };

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Analyze Reviews
          </h2>
          <p className="text-xl text-slate-400">
            Paste your reviews below and let TriPol's neural engine process them
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />

          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/20">
            <div className="flex items-center gap-2 mb-4 text-cyan-400">
              <FileText className="w-5 h-5" />
              <span className="font-medium">Review Input</span>
            </div>

            <Textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Paste your reviews here... (one review per line or separated by blank lines)"
              className="min-h-[400px] bg-slate-950/50 border-cyan-500/30 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 resize-none"
            />

            <div className="flex gap-4 mt-6">
              <Button
                onClick={handleLoadSamples}
                variant="outline"
                className="flex-1 border-cyan-500/30 bg-slate-950/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Load Sample Reviews
              </Button>

              <Button
                onClick={handleAnalyze}
                disabled={!reviewText.trim()}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-purple-600 text-white font-semibold relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Analyze with TriPol
                </span>
              </Button>
            </div>

            <p className="text-sm text-slate-500 mt-4 text-center">
              {reviewText.split('\n').filter(r => r.trim()).length} reviews ready for analysis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
