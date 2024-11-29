import { Grid, Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { setSelectedPair } from '../store/tradingSlice';
import TradingControls from '../components/Trading/TradingControls';
import MarketStats from '../components/Trading/MarketStats';
import TradeHistory from '../components/Trading/TradeHistory';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
}));

export default function Trading() {
  const dispatch = useAppDispatch();
  const positions = useAppSelector((state) => state.trading.positions);
  const balance = useAppSelector((state) => state.trading.balance);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h6">Trading Chart</Typography>
                <iframe
                  title="TradingView Widget"
                  style={{ width: '100%', height: '600px' }}
                  src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=BINANCE:BTCUSDT&interval=D&hidesidetoolbar=0&symboledit=1"
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h6">Trade History</Typography>
                <TradeHistory positions={positions} />
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h6">Market Stats</Typography>
                <MarketStats balance={balance} />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h6">Trading Controls</Typography>
                <TradingControls onPairChange={(pair) => dispatch(setSelectedPair(pair))} />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
