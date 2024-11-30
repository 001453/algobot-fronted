import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Position {
  id: number;
  pair: string;
  entryPrice: string;
  currentPrice: string;
  profit: string;
  amount: string;
}

interface TradingState {
  positions: Position[];
  selectedPair: string;
  balance: number;
  isTrading: boolean;
}

const initialState: TradingState = {
  positions: [],
  selectedPair: 'BTCUSDT',
  balance: 10000,
  isTrading: false,
};

export const tradingSlice = createSlice({
  name: 'trading',
  initialState,
  reducers: {
    setSelectedPair: (state: TradingState, action: PayloadAction<string>) => {
      state.selectedPair = action.payload;
    },
    addPosition: (state: TradingState, action: PayloadAction<Position>) => {
      state.positions.push(action.payload);
    },
    removePosition: (state: TradingState, action: PayloadAction<number>) => {
      state.positions = state.positions.filter(pos => pos.id !== action.payload);
    },
    updateBalance: (state: TradingState, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    setTrading: (state: TradingState, action: PayloadAction<boolean>) => {
      state.isTrading = action.payload;
    },
  },
});

export const { setSelectedPair, addPosition, removePosition, updateBalance, setTrading } = tradingSlice.actions;
export default tradingSlice.reducer;