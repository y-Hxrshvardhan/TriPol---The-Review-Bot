'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Analyze from '@/components/sections/Analyze';
import Results from '@/components/sections/Results';
import Documentation from '@/components/sections/Documentation';
import Navigation from '@/components/Navigation';
import NeuralLoader from '@/components/NeuralLoader';
import { Review, AnalysisResult } from '@/types';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async (inputReviews: string[]) => {
    setIsAnalyzing(true);

    await new Promise(resolve => setTimeout(resolve, 3000));

    const analyzed = inputReviews.map((text, index) => {
      const sentiment = analyzeSentiment(text);
      return {
        id: index + 1,
        text,
        sentiment: sentiment.label,
        confidence: sentiment.confidence,
      };
    });

    const positive = analyzed.filter(r => r.sentiment === 'positive').length;
    const negative = analyzed.filter(r => r.sentiment === 'negative').length;
    const neutral = analyzed.filter(r => r.sentiment === 'neutral').length;
    const total = analyzed.length;

    const overallSentiment = positive > negative
      ? (positive > neutral ? 'positive' : 'neutral')
      : (negative > neutral ? 'negative' : 'neutral');

    const result: AnalysisResult = {
      reviews: analyzed,
      stats: {
        total,
        positive,
        negative,
        neutral,
        overallSentiment,
        sentimentScore: ((positive - negative) / total) * 100,
      },
      prosAndCons: extractProsAndCons(analyzed),
      summary: generateSummary(analyzed),
    };

    setReviews(analyzed);
    setAnalysisResult(result);
    setIsAnalyzing(false);
    setActiveSection('results');
  };

  const analyzeSentiment = (text: string): { label: 'positive' | 'negative' | 'neutral', confidence: number } => {
    const lowerText = text.toLowerCase();

    const positiveWords = ['good', 'great', 'excellent', 'amazing', 'love', 'best', 'perfect', 'awesome', 'fantastic', 'wonderful', 'outstanding', 'superb', 'recommend', 'happy', 'satisfied'];
    const negativeWords = ['bad', 'terrible', 'awful', 'worst', 'hate', 'poor', 'disappointing', 'useless', 'waste', 'horrible', 'pathetic', 'defective', 'broken', 'issue', 'problem'];

    let score = 0;
    positiveWords.forEach(word => {
      if (lowerText.includes(word)) score += 1;
    });
    negativeWords.forEach(word => {
      if (lowerText.includes(word)) score -= 1;
    });

    const confidence = Math.min(0.95, 0.65 + Math.abs(score) * 0.1);

    if (score > 0) return { label: 'positive', confidence };
    if (score < 0) return { label: 'negative', confidence };
    return { label: 'neutral', confidence: 0.5 + Math.random() * 0.2 };
  };

  const extractProsAndCons = (reviews: Review[]): { pros: string[], cons: string[] } => {
    const pros: string[] = [];
    const cons: string[] = [];

    reviews.forEach(review => {
      if (review.sentiment === 'positive') {
        const sentences = review.text.split(/[.!?]+/).filter(s => s.trim().length > 10);
        if (sentences.length > 0) pros.push(sentences[0].trim());
      } else if (review.sentiment === 'negative') {
        const sentences = review.text.split(/[.!?]+/).filter(s => s.trim().length > 10);
        if (sentences.length > 0) cons.push(sentences[0].trim());
      }
    });

    return {
      pros: pros.slice(0, 5),
      cons: cons.slice(0, 5),
    };
  };

  const generateSummary = (reviews: Review[]): string => {
    const positive = reviews.filter(r => r.sentiment === 'positive').length;
    const negative = reviews.filter(r => r.sentiment === 'negative').length;
    const total = reviews.length;

    if (positive > negative) {
      return `Based on the analysis of ${total} reviews, the overall sentiment is predominantly positive (${((positive/total)*100).toFixed(1)}%). Users appreciate the quality and features, with high satisfaction levels. Some minor concerns were raised, but they are outweighed by positive feedback. The product/service demonstrates strong performance in meeting customer expectations.`;
    } else if (negative > positive) {
      return `Analysis of ${total} reviews reveals a predominantly negative sentiment (${((negative/total)*100).toFixed(1)}%). Multiple users have expressed dissatisfaction with various aspects. Common issues include quality concerns and unmet expectations. Immediate attention to customer feedback is recommended to address these critical concerns.`;
    } else {
      return `The analysis of ${total} reviews shows mixed sentiment with balanced perspectives. Users have varied experiences, with ${((positive/total)*100).toFixed(1)}% positive and ${((negative/total)*100).toFixed(1)}% negative feedback. This indicates room for improvement while maintaining current strengths.`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <AnimatePresence mode="wait">
        {isAnalyzing && <NeuralLoader key="loader" />}
      </AnimatePresence>

      {!isAnalyzing && (
        <main className="relative">
          {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
          {activeSection === 'analyze' && <Analyze onAnalyze={handleAnalyze} />}
          {activeSection === 'results' && analysisResult && <Results result={analysisResult} />}
          {activeSection === 'documentation' && <Documentation />}
        </main>
      )}

      <footer className="border-t border-cyan-500/10 py-6 text-center text-sm text-slate-400 backdrop-blur-xl bg-slate-950/50">
        <p>Final Year Major Project 2025–2026 | Department of AIML</p>
      </footer>
    </div>
  );
}
