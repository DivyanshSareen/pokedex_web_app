import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      Get Started!{' '}
      <Link to="search">
        <Button variant="outline">Search</Button>
      </Link>{' '}
      here.
    </div>
  );
};

export default LandingPage;
