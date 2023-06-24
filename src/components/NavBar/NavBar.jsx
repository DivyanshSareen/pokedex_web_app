import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Search from './Search';
import { useLocation, Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/details' ? (
        <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
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
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            padding: '1em',
            color: '#EFEFEF',
            gap: '1em',
          }}
        >
          <Link to={'search'}>
            <ArrowBackIcon sx={{ fontSize: 40 }} />
          </Link>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Charmander
          </Typography>
        </Box>
      )}
    </>
  );
};

export default NavBar;
