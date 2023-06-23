import { TextField, IconButton, Box } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TuneIcon from '@mui/icons-material/Tune';

const Search = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: '0 1em 1em 1em',
        gap: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          background: '#EFEFEF',
          borderRadius: '32px',
          boxShadow: 'inset 0 0 8px #666666',
          width: '100%',
        }}
      >
        <SearchRoundedIcon
          sx={{
            color: '#DC0A2D',
            marginLeft: '16px',
          }}
        />
        <TextField
          id="input-with-sx"
          variant="standard"
          placeholder="Search"
          InputProps={{
            disableUnderline: true,
            sx: {
              padding: '5px',
            },
          }}
        />
      </Box>
      <IconButton
        sx={{
          height: '40px',
          width: '40px',
          background: '#EFEFEF',
          borderRadius: '50%',
          boxShadow: 'inset 0 0 8px #666666',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#DC0A2D',
        }}
      >
        <TuneIcon />
      </IconButton>
    </Box>
  );
};

export default Search;
