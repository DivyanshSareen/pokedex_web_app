import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Search from './Search';

const NavBar = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '1em',
          color: '#EFEFEF',
        }}
      >
        <CatchingPokemonIcon sx={{ fontSize: 40 }} />
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Pokédex
        </Typography>
      </Box>
      <Search />
    </>
  );
};

export default NavBar;
