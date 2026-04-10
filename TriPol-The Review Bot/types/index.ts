export interface Review {
  id: number;
  text: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  confidence: number;
}

export interface AnalysisResult {
  reviews: Review[];
  stats: {
    total: number;
    positive: number;
    negative: number;
    neutral: number;
    overallSentiment: 'positive' | 'negative' | 'neutral';
    sentimentScore: number;
  };
  prosAndCons: {
    pros: string[];
    cons: string[];
  };
  summary: string;
}
