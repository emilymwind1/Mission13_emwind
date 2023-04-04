import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import Podcast from "./podcast";
import MovieList from "./movie_collection";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="podcast" element={<Podcast />} />

          <Route path="movielist" element={<MovieList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Podcast from "./podcast";
// import MovieList from "./movie_collection";

// function App() {
//   return (
//     <div>
//       <MovieList />
//     </div>
//   );
// }

// export default App;
