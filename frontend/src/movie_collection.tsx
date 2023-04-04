import movieList from "./MovieData.json";

const movies = movieList.MovieData;

function MovieList() {
  return (
    <div>
      <h1>Movies</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Director</th>
            <th>Year</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Category}</td>
              <td>{m.Rating}</td>
              <td>{m.Director}</td>
              <td>{m.Year}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
