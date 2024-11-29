import { Grid, Paper, Typography, Box } from '@mui/material';
import { TrendingUp, TrendingDown, Timeline, AccountBalance } from '@mui/icons-material';

const cards = [
  {
    title: 'Total Balance',
    value: '$15,234.56',
    icon: AccountBalance,
    color: '#2196f3'
  },
  {
    title: 'Total Profit',
    value: '+$1,234.56',
    icon: TrendingUp,
    color: '#4caf50'
  },
  {
    title: 'Win Rate',
    value: '68%',
    icon: Timeline,
    color: '#ff9800'
  },
  {
    title: 'Daily Change',
    value: '-$123.45',
    icon: TrendingDown,
    color: '#f44336'
  }
];

export default function PerformanceCards() {
  return (
    <Grid container spacing={3}>
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  backgroundColor: `${card.color}15`
                }}
              >
                <Icon sx={{ color: card.color }} />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {card.title}
                </Typography>
                <Typography variant="h6">
                  {card.value}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}
