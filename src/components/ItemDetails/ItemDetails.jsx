import { Box } from '@mui/material';
import Image from 'mui-image';
import TypeChip from '../TypeChip/TypeChip';
import ItemAbout from './ItemAbout';

const ItemDetails = () => {
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
        position: 'relative',
        marginTop: '30%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1em',
        }}
      >
        <Image
          position="absolute"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          sx={{
            zIndex: '1',
            translate: '0 -10%',
            maxHeight: '270px',
            maxWidth: '270px',
          }}
        />

        <TypeChip
          type={'fire'}
          sx={{ marginTop: '60px', width: 'max-content' }}
        />
        <ItemAbout />
      </Box>
    </Box>
  );
};

export default ItemDetails;
