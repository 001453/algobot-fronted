import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Dashboard, ShowChart, Settings } from '@mui/icons-material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AlgoBot
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<Dashboard />}
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/trading"
            startIcon={<ShowChart />}
          >
            Trading
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/settings"
            startIcon={<Settings />}
          >
            Settings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
