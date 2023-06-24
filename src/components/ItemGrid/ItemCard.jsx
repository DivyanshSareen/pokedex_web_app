import { Box, Typography } from '@mui/material';
import Image from 'mui-image';
import { Link } from 'react-router-dom';

const ItemCard = () => {
  return (
    <Link to={{ pathname: '/details' }}>
      <Box
        sx={{
          boxShadow: 1,
          borderRadius: '8px',
          margin: '0.4em',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            zIndex: '2',
            right: '0.4em',
            top: '0.3em',
          }}
        >
          <Typography variant="subtitle2">#123</Typography>
        </Box>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
          sx={{
            position: 'absolute',
            zIndex: '1',
            translate: '0, 50%',
            padding: '0.5em 0.5em 0.5em 0',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            background: '#E0E0E0',
            borderRadius: '8px',
            height: '40%',
            translate: '0 -100%',
            zIndex: '0',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '0.3em',
          }}
        >
          <Typography sx={{ fontSize: '13px' }}>Charmander</Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default ItemCard;
