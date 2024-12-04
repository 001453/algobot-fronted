import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}));

const Dashboard = () => {
  // Add proper type for data
  const [data, setData] = React.useState<any[]>([]);

  // Add error handling
  const fetchData = async () => {
    try {
      const response = await fetch('/api/dashboard-data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <StyledPaper>
          <Typography variant="h6" component="h2">
            Trading Overview
          </Typography>
          {/* Add content here */}
        </StyledPaper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <StyledPaper>
          <Typography variant="h6" component="h2">
            Statistics
          </Typography>
          {/* Add content here */}
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
