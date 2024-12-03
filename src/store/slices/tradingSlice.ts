import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Position } from '../../types';

// PairStats interface'i ekleyelim
interface PairStats {
  volume24h: number;
  priceChange24h: number;
  highPrice24h: number;
  lowPrice24h: number;
}

interface TradingState {
  positions: Position[];
  selectedPair: string;
  balance: number;
  isTrading: boolean;
  tradingHistory: Position[];
  pairStats: {
    [key: string]: PairStats;
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
      stats: PairStats;
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

// RootState type'ını export edelim
export type RootState = {
  trading: TradingState;
};

export default tradingSlice.reducer;
