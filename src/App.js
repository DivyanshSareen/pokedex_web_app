import { Button } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { SearchPage, ListingPage, DetailsPage, BookmarksPage } from "./routes/index.js";
import { NavBar } from "./components/index.js";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path="/search" element={<SearchPage/>}></Route>
      <Route path="/listing" element={<ListingPage/>}></Route>
      <Route path="/details" element={<DetailsPage/>}></Route>
      <Route path="/bookmarks" element={<BookmarksPage/>}></Route>
     </Routes>
     <Button>Hello</Button>
    </div>
  );
}

export default App;
