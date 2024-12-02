import React from 'react';
import { Container, Grid } from '@mui/material';
import TradingForm from './components/TradingForm';
import MarketData from './components/MarketData';
import TradeHistory from './components/TradeHistory';
import Portfolio from './components/Portfolio';
import TradingChart from './components/TradingChart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AlgoBot Trading</h1>
      </header>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MarketData />
          </Grid>
          <Grid item xs={12}>
            <TradingChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <TradingForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <Portfolio />
          </Grid>
          <Grid item xs={12}>
            <TradeHistory />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
