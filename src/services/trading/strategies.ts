export interface Strategy {
    id: string;
    name: string;
    description: string;
    execute: (params: any) => Promise<any>;
  }
  
  export const strategies: Strategy[] = [
    {
      id: 'moving-average',
      name: 'Moving Average Crossover',
      description: 'Trade based on MA crossovers',
      execute: async (params) => {
        // Strategy implementation
      }
    },
    {
      id: 'rsi',
      name: 'RSI Strategy',
      description: 'Trade based on RSI indicators',
      execute: async (params) => {
        // Strategy implementation
      }
    }
  ];
  