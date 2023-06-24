import { Box, Grid } from '@mui/material';
import ItemCard from './ItemCard';

const ItemGrid = () => {
  return (
    <Box
      sx={{
        width: '95vw',
        background: '#EFEFEF',
        margin: '2.5vw',
        height: '100%',
        flex: '1 1 auto',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 8px #666666',
      }}
    >
      <Grid container justifyContent={'center'} sx={{ padding: '0.5em' }}>
        <Grid item xs={4}>
          <ItemCard></ItemCard>
        </Grid>
        <Grid item xs={4}>
          <ItemCard></ItemCard>
        </Grid>
        <Grid item xs={4}>
          <ItemCard></ItemCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemGrid;
