import { Route, Routes } from 'react-router-dom';
import {
  LandingPage,
  SearchPage,
  ListingPage,
  DetailsPage,
  BookmarksPage,
} from './routes/index.js';
import { NavBar } from './components/index.js';

function App() {
  return (
    <div
      className="App"
      style={{
        background: '#DC0A2D',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/listing" element={<ListingPage />}></Route>
        <Route path="/details" element={<DetailsPage />}></Route>
        <Route path="/bookmarks" element={<BookmarksPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
