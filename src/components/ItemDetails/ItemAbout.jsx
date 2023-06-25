import { Box, Typography } from '@mui/material';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';

const ItemAbout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 'bold', color: '#F57D31' }}
      >
        About
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          paddingTop: '0.5em',
        }}
      >
        <Box sx={{ borderRight: '1px solid', paddingRight: '1em' }}>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              paddingBottom: '10px',
            }}
          >
            <ScaleOutlinedIcon />
            8.7 kg
          </Typography>
          <Typography>Weight</Typography>
        </Box>
        <Box sx={{ paddingLeft: '1em' }}>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              paddingBottom: '10px',
            }}
          >
            <StraightenOutlinedIcon />
            0.6 m
          </Typography>
          <Typography>Height</Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ padding: '1em' }}>
          It has a preference for hot things. When it rains, steam is said to
          spout from the tip of its tail.
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemAbout;
