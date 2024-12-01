import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Position } from '../types';

interface TradingState {
  positions: Position[];
  selectedPair: string;
  balance: number;
  isTrading: boolean;
  tradingHistory: Position[];
  pairStats: {
    [key: string]: {
      volume24h: number;
      priceChange24h: number;
      highPrice24h: number;
      lowPrice24h: number;
    }
  };
}

const initialState: TradingState = {
  positions: [],
  selectedPair: 'BTCUSDT',
  balance: 10000,
  isTrading: false,
  tradingHistory: [],
  pairStats: {},
};

export const tradingSlice = createSlice({
  name: 'trading',
  initialState,
  reducers: {
    setSelectedPair: (state, action: PayloadAction<string>) => {
      state.selectedPair = action.payload;
    },
    addPosition: (state, action: PayloadAction<Position>) => {
      state.positions.push(action.payload);
    },
    removePosition: (state, action: PayloadAction<number>) => {
      const position = state.positions.find(pos => pos.id === action.payload);
      if (position) {
        state.tradingHistory.push(position);
        state.positions = state.positions.filter(pos => pos.id !== action.payload);
      }
    },
    updateBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    setTrading: (state, action: PayloadAction<boolean>) => {
      state.isTrading = action.payload;
    },
    updatePairStats: (state, action: PayloadAction<{
      pair: string;
      stats: {
        volume24h: number;
        priceChange24h: number;
        highPrice24h: number;
        lowPrice24h: number;
      }
    }>) => {
      state.pairStats[action.payload.pair] = action.payload.stats;
    },
  },
});

export const {
  setSelectedPair,
  addPosition,
  removePosition,
  updateBalance,
  setTrading,
  updatePairStats
} = tradingSlice.actions;

export default tradingSlice.reducer;
