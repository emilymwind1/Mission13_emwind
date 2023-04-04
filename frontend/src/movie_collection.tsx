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
        <tbody></tbody>
      </table>
    </div>
  );
}

export default MovieList;
